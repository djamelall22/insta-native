import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/themes/colors';
import fonts from '../../../assets/themes/fonts';

const Comment = ({comment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        <Text>{comment.comment}</Text>
      </Text>
      <AntDesign
        // name={isLiked ? 'heart' : 'hearto'}
        name={'hearto'}
        size={14}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
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
