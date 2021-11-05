import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';
import {getFiles} from '../../../api/files';
import FileListItem from '../../../components/FileList/FileListItem';

export function Files() {
  const [files, setFiles] = useState([]);

  useEffect(loadFiles, []);

  return (
    <Tabs.FlatList
      data={files}
      showsHorizontalScrollIndicator={false}
      renderItem={useCallback(
        ({item}) => (
          <FileListItem file={item} />
        ),
        [],
      )}
      keyExtractor={keyExtractor}
      style={styles.container}
    />
  );

  function loadFiles() {
    getFiles().then(handleFilesResponse).catch(handleFilesError);
  }

  function handleFilesResponse(data) {
    setFiles(data);
  }

  function handleFilesError() {
    setFiles([]);
  }

  function keyExtractor(file) {
    return `${file.id}`;
  }
}

export default Files;

const styles = StyleSheet.create({
  container: {flex: 1},
});
