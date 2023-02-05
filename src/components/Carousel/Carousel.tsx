import React from 'react';
import {Image, FlatList} from 'react-native';

interface ICarousel {
  images: string[];
}
const Carousel = ({images}: ICarousel) => {
  return (
    <FlatList
      data={image}
      renderItem={({item}) => (
        <Image
          source={{
            uri: image,
          }}
        />
        style={}
      )}
    />
  );

  //   images.map(image => (
  //     <Image
  //
  //       style={styles.image}
  //     />
  //   ));
};

export default Carousel;
