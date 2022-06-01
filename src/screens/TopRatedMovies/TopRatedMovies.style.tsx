import {StyleSheet} from 'react-native';
import {themes} from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: themes.colors.WHITE,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.WHITE,
  },
});
