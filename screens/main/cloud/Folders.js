import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';
import {getFolders} from '../../../api/files';
import {FolderListItem} from '../../../components';
import {SIZES} from '../../../constants';

export function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(loadFolders, []);

  return (
    <Tabs.FlatList
      data={folders}
      numColumns={2}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      renderItem={useCallback(
        ({item}) => (
          <FolderListItem folder={item} />
        ),
        [],
      )}
      keyExtractor={keyExtractor}
      style={styles.container}
    />
  );

  function loadFolders() {
    getFolders().then(handleResponse).catch(handleError);
  }

  function handleResponse(data) {
    setFolders(data);
  }

  function handleError() {
    setFolders([]);
  }

  function keyExtractor(file) {
    return `${file.id}`;
  }
}

export default Folders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
  },
});
