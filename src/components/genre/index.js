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
            images={item.slideshow}
            sliderBoxHeight={200}
            parentWidth={width}
            autoplay
            cicleLoop
          />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Genre;
