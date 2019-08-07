import React, { Fragment } from 'react';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine,
} from 'rn-placeholder';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
  length: number;
  isVisible: boolean;
}

export function RecordPlaceholder({ length, isVisible }: Props) {
  const placeholderLength = Array(length).fill(length);

  return (
    <Fragment>
      {isVisible &&
        placeholderLength.map((_, i) => (
          <View style={styles.container} key={'RecordPlaceholder' + i}>
            <Placeholder Animation={Shine} Left={PlaceholderMedia}>
              <View style={styles.row}>
                <PlaceholderLine width={40} />
                <PlaceholderLine width={45} />
              </View>
              <PlaceholderLine width={35} style={{ alignSelf: 'flex-end' }} />
            </Placeholder>
          </View>
        ))}
    </Fragment>
  );
}
