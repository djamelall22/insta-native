import React, {useState} from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/themes/colors';
import DoublePressable from '../DoublePressable';
// styles
import styles from './styles';
import Comment from './comment/Comment';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDdescriptionExpanded = () => {
    setIsDescriptionExpanded(prev => !prev);
  };

  const togglePostLiked = () => {
    setIsLiked(prev => !prev);
  };

  // display image or images
  let content = null;
  if (post.image) {
    content = (
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
    );
  } else if (post.images) {
    content = <Carousel images={post.images} />;
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user?.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Djamel</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={togglePostLiked}>
        {content}
      </DoublePressable>

      <View style={styles.postFooter}>
        <View style={styles.iconsContainer}>
          <Pressable onPress={togglePostLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>Djamel</Text> and{' '}
          <Text style={styles.bold}>{post.numOfLikes} others</Text>
        </Text>

        {/* post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          <Text>{post.description}</Text>
        </Text>
        <Text onPress={toggleDdescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* comments section*/}
        <Text>View all {post.numOfComments} comments</Text>

        {/* COMENT COMPONENT */}
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}

        {/* posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
