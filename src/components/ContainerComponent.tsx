import {
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import RowComponent from './RowComponent';
import { ArrowLeft } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean; // Fixed the typo here
  title?: string;
  children: ReactNode;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const { isImageBackground, isScroll, title, children, back } = props;

  const navigation = useNavigation();

  const headerComponent = () => {
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        {(title || back) && (
          <RowComponent
            styles={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              minHeight: 48,
              minWidth: 48,
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginRight: 12 }}>
                <ArrowLeft size={24} color={appColors.black} />
              </TouchableOpacity>
            )}
            {title && (
              <TextComponent
                text={title}
                font={fontFamilies.regular}
                size={16}
              />
            )}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    );
  };

  // Corrected logic for ScrollView or View container
  const returnContainer = isScroll ? (
    <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
  ) : (
    <View style={{ flex: 1 }}>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/image/black.png')}
      style={{ flex: 1 }}
      imageStyle={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={{ flex: 1 }}>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
