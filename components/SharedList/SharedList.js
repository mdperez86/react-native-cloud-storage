import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZES} from '../../constants';
import MoreListItem from './MoreListItem';
import SharedListItem from './SharedListItem';

export function SharedList({shares, style}) {
  const top3 = shares.slice(0, 3);
  const rest = shares.length - top3.length;

  return (
    <View style={[styles.container, style]}>
      {top3.map(mapSharedItem)}
      {rest > 0 && <MoreListItem count={rest} />}
    </View>
  );

  function mapSharedItem(share) {
    return <SharedListItem key={share.id} share={share} />;
  }
}

SharedList.defaultProps = {
  shares: [],
};

export default SharedList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: SIZES.padding,
  },
});
