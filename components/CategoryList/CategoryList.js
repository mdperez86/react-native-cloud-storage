import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {SIZES} from '../../constants';
import CategoryListItem from './CategoryListItem';

export function CategoryList({categories, onCategoryPress}) {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <FlatList
      data={categories}
      keyExtractor={keyExtractor}
      renderItem={getRenderItem({onCategoryPress: handleCategoryPress})}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 1.5,
      }}
      extraData={selectedCategory?.id}
    />
  );

  function handleCategoryPress(category) {
    setSelectedCategory(category);
    onCategoryPress && onCategoryPress(category);
  }
}

function keyExtractor(category) {
  return `${category.id}`;
}

function getRenderItem({onCategoryPress}) {
  return function renderItem({item}) {
    return (
      <CategoryListItem category={item} onCategoryPress={onCategoryPress} />
    );
  };
}

export default CategoryList;
