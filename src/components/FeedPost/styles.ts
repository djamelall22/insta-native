import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';
import fonts from '../../assets/themes/fonts';

export default styles = StyleSheet.create({
  post: {},

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },

  threeDots: {
    marginLeft: 'auto',
  },

  postFooter: {
    padding: 10,
  },

  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  icon: {
    marginHorizontal: 5,
  },

  text: {
    lineHeight: 18,
    color: colors.black,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },

  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});
