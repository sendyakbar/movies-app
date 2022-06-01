import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TopRatedNavigation from './TopRated/TopRated.navigation';
import UpcomingMovies from '../screens/UpcomingMovies/UpcomingMovies.screen';
import NowPlayingMovies from '../screens/NowPlayingMovies/NowPlayingMovies.screen';
import PopularNavigation from './Popular/Popular.navigation';
import {themes} from '../themes/themes';
import {images} from '../themes/images';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        style: {backgroundColor: themes.colors.DARK_BLUE},
        inactiveTintColor: themes.colors.LIGHT_GREY,
        activeTintColor: themes.colors.LIGHT_GREEN,
      }}>
      <Tab.Screen
        name="TopRatedNavigation"
        component={TopRatedNavigation}
        options={{
          title: 'Top Rated',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.iconTopRated}
              style={focused ? tabIconSizeActive : tabIconSizeInactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UpcomingMoviesScreen"
        component={UpcomingMovies}
        options={{
          title: 'Upcoming',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.iconUpcoming}
              style={focused ? tabIconSizeActive : tabIconSizeInactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NowPlayingScreen"
        component={NowPlayingMovies}
        options={{
          title: 'Now Playing',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.iconNowPlaying}
              style={focused ? tabIconSizeActive : tabIconSizeInactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PopularNavigation"
        component={PopularNavigation}
        options={{
          title: 'Popular',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.iconPopular}
              style={focused ? tabIconSizeActive : tabIconSizeInactive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabIconSizeInactive = {
  height: 24,
  width: 24,
};

const tabIconSizeActive = {
  height: 30,
  width: 30,
};
