import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TopRatedNavigation from './TopRated/TopRated.navigation';
import UpcomingMovies from '../screens/UpcomingMovies/UpcomingMovies.screen';
import NowPlayingMovies from '../screens/NowPlayingMovies/NowPlayingMovies.screen';
import PopularNavigation from './Popular/Popular.navigation';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TopRatedNavigation"
        component={TopRatedNavigation}
        options={{title: 'Top Rated'}}
      />
      <Tab.Screen
        name="UpcomingMoviesScreen"
        component={UpcomingMovies}
        options={{title: 'Upcoming'}}
      />
      <Tab.Screen
        name="NowPlayingScreen"
        component={NowPlayingMovies}
        options={{title: 'Now Playing'}}
      />
      <Tab.Screen
        name="PopularNavigation"
        component={PopularNavigation}
        options={{title: 'Popular'}}
      />
    </Tab.Navigator>
  );
}
