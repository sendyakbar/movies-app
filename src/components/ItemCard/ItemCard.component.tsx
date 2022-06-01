import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './ItemCard.style';
import {getImageUri} from '../../services/image';
import {formatDate} from '../../utils/helpers';

type ItemCardPropTypes = {
  item: any;
};

export default function ItemCard(props: ItemCardPropTypes) {
  const {item} = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: getImageUri(200, item.poster_path),
        }}
        style={styles.img}
        resizeMode="contain"
      />
      <View style={styles.infoCol}>
        <Text numberOfLines={2} style={styles.titleText}>
          {item.name || item.title}
        </Text>
        <Text style={styles.overviewText} numberOfLines={4}>
          {item.overview}
        </Text>
        <View style={styles.ratingContainer}>
          {!!item.first_air_date && (
            <Text style={styles.dateText}>
              {formatDate(item.first_air_date)}
            </Text>
          )}
          {!!item.release_date && (
            <Text style={styles.dateText}>{formatDate(item.release_date)}</Text>
          )}
          {item.vote_average && (
            <View style={styles.ratingBox}>
              <Text style={styles.voteText}>{item.vote_average}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
