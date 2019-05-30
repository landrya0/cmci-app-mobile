import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import AboutStack from './navigation/AboutStack';
import EventsStack from './navigation/EventsStack';
import HomeStack from './navigation/HomeStack';
import LitteratureStack from './navigation/LitteratureStack';
import MinistereStack from './navigation/MinistereStack';


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Events: EventsStack,
    Litterature: LitteratureStack,
    Ministere: MinistereStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
