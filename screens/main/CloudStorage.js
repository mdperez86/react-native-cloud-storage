import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Tabs} from 'react-native-collapsible-tab-view';
import debounce from 'lodash-es/debounce';
import {
  Header,
  SearchBar,
  SearchBox,
  StorageStatus,
  TopTabBar,
} from '../../components';
import {Files, Folders} from './cloud';

export function CloudStorage() {
  const {colors} = useTheme();
  const [search, setSearch] = useState('');

  return (
    <Tabs.Container
      renderHeader={useCallback(TabsHeaderComponent, [])}
      renderTabBar={TopTabBar}
      initialTabName="Files"
      tabBarHeight={40}
      headerContainerStyle={[
        styles.headerContainerStyle,
        {borderColor: colors.gray[88]},
      ]}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Tabs.Tab name="Files">
        <Files search={search} />
      </Tabs.Tab>
      <Tabs.Tab name="Folders">
        <Folders search={search} />
      </Tabs.Tab>
    </Tabs.Container>
  );

  function TabsHeaderComponent() {
    return (
      <>
        <Header
          dark={true}
          title="Cloud Storage"
          subtitle="at the moment you have">
          <StorageStatus dark={true} />
        </Header>
        <SearchBar>
          <SearchBox onChangeText={debounce(handleSearchChange, 400)} />
        </SearchBar>
      </>
    );

    function handleSearchChange(text) {
      setSearch(text);
    }
  }
}

export default CloudStorage;

const styles = StyleSheet.create({
  container: {},
  headerContainerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
  },
});
