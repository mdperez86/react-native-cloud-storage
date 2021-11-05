import React from 'react';
import {FlatList} from 'react-native';
import FileListItem from './FileListItem';

export function FileList({files, ListHeaderComponent}) {
  return (
    <FlatList
      data={files}
      keyExtractor={keyExtractor}
      renderItem={getRenderItem()}
      showsVerticalScrollIndicator={false}
      numColumns={1}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

function keyExtractor(file) {
  return `${file.id}`;
}

function getRenderItem() {
  return function renderItem({item}) {
    return <FileListItem file={item} />;
  };
}

export default FileList;
