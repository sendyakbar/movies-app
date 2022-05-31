import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import PopularMovies from '../../screens/PopularMovies/PopularMovies.screen';
import PopularTVShow from '../../screens/PopularTVShow/PopularTVShow.screen';

const Tab = createMaterialTopTabNavigator();

export default function PopularNavigation() {
  return (
    <Tab.Navigator>
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
