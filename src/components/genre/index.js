import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { styles } from './styles';

const Genre = ({ item, onSelected }) => {
  const [width, setWidth] = useState(null);
  const onLayout = (event) => {
    const newWidth = event.nativeEvent.layout.width;
    setWidth(newWidth);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onSelected(item)}
        style={styles.touchable}
      >
        <View onLayout={onLayout} style={styles.slideshowContainer}>
          <SliderBox
            ImageComponent={Image}
            images={item.slideshow}
            sliderBoxHeight={200}
            parentWidth={width}
            autoplay
            cicleLoop
            ImageComponentStyle={{
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: 200,
            }}
          />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Genre;
