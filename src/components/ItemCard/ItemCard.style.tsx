import {StyleSheet} from 'react-native';
import {elevation} from '../../themes/elevation';
import {themes} from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.WHITE,
    borderRadius: 6,
    marginTop: 8,
    flexDirection: 'row',
    ...elevation.container,
    borderWidth: 0.5,
    borderColor: themes.colors.LIGHT_GREY,
    overflow: 'hidden',
  },
  img: {
    width: 120,
    height: 180,
    backgroundColor: themes.colors.LIGHT_GREY,
  },
  infoCol: {
    padding: 12,
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: themes.colors.BLACK,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: themes.colors.GREY,
    fontStyle: 'italic',
  },
  episodeText: {
    fontSize: 15,
    fontWeight: '500',
    color: themes.colors.GREY,
  },
  overviewText: {
    fontSize: 12,
    color: themes.colors.GREY,
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  ratingBox: {
    padding: 4,
    paddingHorizontal: 8,
    backgroundColor: themes.colors.GREEN,
    borderRadius: 100,
  },
  voteText: {
    fontSize: 18,
    color: themes.colors.WHITE,
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  deleteButtonText: {
    color: themes.colors.WHITE,
  },
});
