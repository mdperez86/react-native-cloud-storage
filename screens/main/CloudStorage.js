import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Tabs} from 'react-native-collapsible-tab-view';
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

  return (
    <Tabs.Container
      renderHeader={TabsHeaderComponent}
      renderTabBar={TopTabBar}
      initialTabName="Files"
      tabBarHeight={40}
      headerContainerStyle={[
        styles.headerContainerStyle,
        {borderColor: colors.gray[88]},
      ]}
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Tabs.Tab name="Files">
        <Files />
      </Tabs.Tab>
      <Tabs.Tab name="Folders">
        <Folders />
      </Tabs.Tab>
    </Tabs.Container>
  );
}

export default CloudStorage;

function TabsHeaderComponent() {
  return (
    <>
      <Header
        dark={true}
        title="Cloud Storage"
        subtitle="at the moment you have">
        <StorageStatus total={100} used={78} dark={true} />
      </Header>
      <SearchBar>
        <SearchBox />
      </SearchBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerContainerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
  },
});
