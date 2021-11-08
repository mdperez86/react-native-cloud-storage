import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Tabs, useFocusedTab} from 'react-native-collapsible-tab-view';
import {
  ListQueryBuilder,
  MimeTypes,
} from '@robinbobin/react-native-google-drive-api-wrapper';
import FileListItem from '../../../components/FileList/FileListItem';
import {useFileSearch} from '../../../hooks';

export function Files({search}) {
  const focusedTab = useFocusedTab();
  const {load, next} = useFileSearch();
  const [files, setFiles] = useState([]);

  useEffect(loadFiles, [focusedTab, search, load]);

  return (
    <Tabs.FlatList
      data={files}
      showsHorizontalScrollIndicator={false}
      renderItem={useCallback(renderIrem, [])}
      keyExtractor={keyExtractor}
      style={styles.container}
      onEndReachedThreshold={0.5}
      onEndReached={handleEndReached}
    />
  );

  function renderIrem({item}) {
    return <FileListItem file={item} />;
  }

  function keyExtractor(file) {
    return `${file.id}`;
  }

  function loadFiles() {
    if (focusedTab === 'Files') {
      nextPage(load, search).then(function handleResponse(response) {
        setFiles(response);
      });
    }
  }

  function handleEndReached() {
    nextPage(next, search).then(function handleResponse(response) {
      setFiles(function changeState(prev) {
        return [...prev, ...response];
      });
    });
  }
}

function nextPage(next, search) {
  return next({
    q: new ListQueryBuilder()
      .operator('mimeType', '!=', MimeTypes.FOLDER, false, true)
      .and()
      .operator('name', 'contains', search, false, true),
    fields: 'files(id,name,size,fileExtension,mimeType)',
  });
}

export default Files;

const styles = StyleSheet.create({
  container: {},
});
