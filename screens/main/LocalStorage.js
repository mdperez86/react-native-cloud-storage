import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {getCategories, getFiles} from '../../api/files';
import {CategoryList, FileList, Header, SearchBox} from '../../components';

export function LocalStorage() {
  const {colors} = useTheme();
  const [categories, setCategories] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(loadCategories, []);
  useEffect(loadFiles, [selectedCatId, search]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <FileList
        files={files}
        ListHeaderComponent={useCallback(ListHeaderComponent, [categories])}
        style={styles.container}
      />
    </SafeAreaView>
  );

  function ListHeaderComponent() {
    return (
      <>
        <Header title="Local Storage">
          <SearchBox onChangeText={handleSearchChange} />
        </Header>
        <View>
          <CategoryList
            categories={categories}
            onCategoryPress={handleCategoryPress}
          />
        </View>
      </>
    );
  }

  function loadCategories() {
    getCategories().then(handleResponse).catch(handleError);

    function handleResponse(data) {
      setCategories(data);
    }

    function handleError() {
      setCategories([]);
    }
  }

  function loadFiles() {
    getFiles({
      categoryId: selectedCatId,
      search,
    })
      .then(handleFilesResponse)
      .catch(handleFilesError);
  }

  function handleCategoryPress(category) {
    setSelectedCatId(category.id);
  }

  function handleFilesResponse(data) {
    setFiles(data);
  }

  function handleFilesError() {
    setFiles([]);
  }

  function handleSearchChange(text) {
    setSearch(text);
  }
}

export default LocalStorage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
