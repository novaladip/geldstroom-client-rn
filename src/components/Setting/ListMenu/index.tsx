import React, { Fragment } from 'react';
import pkg from '../../../../package.json';

import { styles } from './styles';
import { Item } from './Item';

interface Props {
  componentId: string;
}

export function ListMenu(props: Props) {
  return (
    <Fragment>
      <Item
        icon={require('./assets/logout.png')}
        name="Logout"
        onPress={() => {}}
        useBorder
      />
      <Item
        icon={require('./assets/rating.png')}
        name="Give us rate"
        onPress={() => {}}
        useBorder
      />
      <Item
        icon={require('./assets/version.png')}
        name={`Version ${pkg.version}`}
        onPress={() => {}}
        useBorder
      />
    </Fragment>
  );
}
