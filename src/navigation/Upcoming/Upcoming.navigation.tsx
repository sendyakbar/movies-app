import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import UpcomingMovies from '../../screens/UpcomingMovies/UpcomingMovies.screen';
import {themes} from '../../themes/themes';

const Tab = createMaterialTopTabNavigator();

export default function UpcomingNavigation() {
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
        name="UpcomingMoviesScreen"
        component={UpcomingMovies}
        options={{title: 'Movies'}}
      />
    </Tab.Navigator>
  );
}
