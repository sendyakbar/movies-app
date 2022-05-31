import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TopRatedMovies from '../../screens/TopRatedMovies/TopRatedMovies.screen';
import TopRatedTVShow from '../../screens/TopRatedTVShow/TopRatedTVShow.screen';

const Tab = createMaterialTopTabNavigator();

export default function TopRatedNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TopRatedMoviesScreen"
        component={TopRatedMovies}
        options={{title: 'Movies'}}
      />
      <Tab.Screen
        name="TopRatedTVShowScreen"
        component={TopRatedTVShow}
        options={{title: 'TV Show'}}
      />
    </Tab.Navigator>
  );
}
