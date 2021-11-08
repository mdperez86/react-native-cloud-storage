import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Tabs, useFocusedTab} from 'react-native-collapsible-tab-view';
import {
  ListQueryBuilder,
  MimeTypes,
} from '@robinbobin/react-native-google-drive-api-wrapper';
import {FolderListItem} from '../../../components';
import {SIZES} from '../../../constants';
import {useFileSearch} from '../../../hooks';

export function Folders({search}) {
  const focusedTab = useFocusedTab();
  const {load, next} = useFileSearch();
  const [folders, setFolders] = useState([]);

  useEffect(loadFiles, [focusedTab, search, load]);

  return (
    <Tabs.FlatList
      data={folders}
      numColumns={2}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      renderItem={useCallback(renderItem, [])}
      keyExtractor={keyExtractor}
      style={styles.container}
      onEndReachedThreshold={0.8}
      onEndReached={handleEndReached}
    />
  );

  function renderItem({item}) {
    return <FolderListItem folder={item} />;
  }

  function keyExtractor(file) {
    return `${file.id}`;
  }

  function loadFiles() {
    if (focusedTab === 'Folders') {
      nextPage(load, search).then(function handleResponse(response) {
        const ids = response.map(({id}) => id);
        console.log(...ids);
        setFolders(response);
      });
    }
  }

  function handleEndReached() {
    nextPage(next, search).then(function handleResponse(response) {
      setFolders(function changeState(prev) {
        return [...prev, ...response];
      });
    });
  }
}

function nextPage(next, search) {
  return next({
    q: new ListQueryBuilder()
      .operator('mimeType', '=', MimeTypes.FOLDER, false, true)
      .and()
      .operator('name', 'contains', search, false, true),
    fields: 'files(id,name,size,permissions)',
  });
}

export default Folders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
  },
});
