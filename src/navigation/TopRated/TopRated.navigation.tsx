import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TopRatedMovies from '../../screens/TopRatedMovies/TopRatedMovies.screen';
import TopRatedTVShow from '../../screens/TopRatedTVShow/TopRatedTVShow.screen';
import {themes} from '../../themes/themes';

const Tab = createMaterialTopTabNavigator();

export default function TopRatedNavigation() {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        style: {backgroundColor: themes.colors.DARK_BLUE},
        inactiveTintColor: themes.colors.LIGHT_GREY,
        activeTintColor: themes.colors.LIGHT_GREEN,
        indicatorStyle: {backgroundColor: themes.colors.LIGHT_GREEN},
      }}>
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
