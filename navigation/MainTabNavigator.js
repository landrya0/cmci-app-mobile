import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import TabBarIcon from '../components/TabBarIcon';

import AboutScreen from '../screens/about/AboutScreen';
import EventsScreen from '../screens/events/EventsScreen';
import HomeScreen from '../screens/home/HomeScreen';
import BooksScreen from '../screens/books/BooksScreen';
import MinistryScreen from '../screens/ministry/MinistryScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : `md-home`
      }
    />
  ),
};

const EventsStack = createStackNavigator({
  Events: EventsScreen
});
EventsStack.navigationOptions = {
  tabBarLabel: 'Evenements',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : `md-home`
      }
    />
  ),
};

const BooksStack = createStackNavigator({
  Books: BooksScreen
});
BooksStack.navigationOptions = {
  tabBarLabel: 'Livres',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : `md-home`
      }
    />
  ),
};

const MinistryStack = createStackNavigator({
  Ministry: MinistryScreen
});
MinistryStack.navigationOptions = {
  tabBarLabel: 'Ministères',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : `md-home`
      }
    />
  ),
};

const AboutStack = createStackNavigator({
  About: AboutScreen
});
AboutStack.navigationOptions = {
  tabBarLabel: 'A propos',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : `md-home`
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  EventsStack,
  BooksStack,
  MinistryStack,
  AboutStack,
});
