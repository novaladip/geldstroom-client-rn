import { Navigation, LayoutBottomTabsChildren } from 'react-native-navigation';
import { colors } from '../utils';

export const HomeLayout = createLayoutBottomTabsChildren({
  componentName: 'Home',
  tabLabel: 'Home',
  iconPath: require('./house.png'),
});
export const RecordsLayout = createLayoutBottomTabsChildren({
  componentName: 'Records',
  tabLabel: 'Records',
  iconPath: require('./book.png'),
});
export const SettingLayout = createLayoutBottomTabsChildren({
  componentName: 'Setting',
  tabLabel: 'Setting',
  iconPath: require('./settings.png'),
});

export function AuthRoot() {
  Navigation.setDefaultOptions({
    blurOnUnmount: true,
    topBar: {
      background: {
        color: colors.primaryLight,
        translucent: true,
      },
      title: {
        alignment: 'center',
        color: colors.textOnPrimary,
      },
      backButton: {
        color: colors.textOnPrimary,
      },
    },
    statusBar: {
      backgroundColor: colors.primaryDark,
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
}

export function AppRoot() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: colors.secondaryDark,
        translucent: true,
      },
      title: {
        alignment: 'center',
        color: colors.textOnPrimary,
      },
      backButton: {
        color: colors.textOnPrimary,
      },
    },
    statusBar: {
      backgroundColor: colors.primary,
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [HomeLayout, RecordsLayout, SettingLayout],
      },
    },
  });
}

export interface createLayoutBottomTabsChildrenOpts {
  componentName: string;
  iconPath: number;
  tabLabel: string;
}

export function createLayoutBottomTabsChildren(
  options: createLayoutBottomTabsChildrenOpts,
): LayoutBottomTabsChildren {
  return {
    stack: {
      children: [
        {
          component: {
            name: options.componentName,
          },
        },
      ],
      options: {
        bottomTab: {
          text: options.tabLabel,
          icon: options.iconPath,
          iconColor: colors.primaryLight,
          textColor: colors.primaryLight,
          selectedIconColor: colors.textOnPrimary,
          selectedTextColor: colors.textOnPrimary,
        },
        bottomTabs: {
          backgroundColor: colors.secondaryDark,
        },
      },
    },
  };
}
