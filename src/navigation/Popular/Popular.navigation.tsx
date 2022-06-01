import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import PopularMovies from '../../screens/PopularMovies/PopularMovies.screen';
import PopularTVShow from '../../screens/PopularTVShow/PopularTVShow.screen';
import {themes} from '../../themes/themes';

const Tab = createMaterialTopTabNavigator();

export default function PopularNavigation() {
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
        name="PopularMoviesScreen"
        component={PopularMovies}
        options={{title: 'Movies'}}
      />
      <Tab.Screen
        name="PopularTVShowScreen"
        component={PopularTVShow}
        options={{title: 'TV Show'}}
      />
    </Tab.Navigator>
  );
}
