import React, {useEffect, useCallback} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import ItemCard from '../../components/ItemCard/ItemCard.component';
import {requestUpcomingMovies} from '../../redux/actions/upcomingMovies.action';
import {themes} from '../../themes/themes';

import {styles} from './UpcomingMovies.style';

export default function UpcomingMovies() {
  const dispatch: any = useDispatch();
  const {loading, data} = useSelector(
    (state: any) => state.upcomingMovies,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(requestUpcomingMovies(1));
  }, [dispatch]);

  const renderItem = useCallback(({item}: any) => {
    return <ItemCard item={item} />;
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={36} color={themes.colors.DARK_BLUE} />
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data.results}
      renderItem={renderItem}
      keyExtractor={(_, i) => String(i)}
    />
  );
}
