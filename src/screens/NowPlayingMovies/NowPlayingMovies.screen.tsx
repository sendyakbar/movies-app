import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './NowPlayingMovies.style';

export default function NowPlayingMovies() {
  return (
    <View style={styles.container}>
      <Text>Now Playing Movies</Text>
    </View>
  );
}
