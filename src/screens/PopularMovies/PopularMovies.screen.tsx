import React, {useEffect, useCallback} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import ItemCard from '../../components/ItemCard/ItemCard.component';
import {requestPopularMovies} from '../../redux/actions/popularMovies.action';
import {themes} from '../../themes/themes';

import {styles} from './PopularMovies.style';

export default function PopularMovies() {
  const dispatch: any = useDispatch();
  const {loading, data} = useSelector(
    (state: any) => state.popularMovies,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(requestPopularMovies(1));
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
