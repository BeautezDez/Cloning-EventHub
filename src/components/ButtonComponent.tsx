import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'Primary' | 'Text' | 'Link';
  color?: string;
  style?: StyleProp<ViewStyle>;
  textcolor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  textfont?: string;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    style,
    textcolor,
    textStyle,
    onPress,
    iconFlex,
    textfont,
  } = props;

  return type === 'Primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        globalStyles.shadow,
        {
          backgroundColor: color ?? appColors.primary,
          marginBottom: 20,
        },
        style,
      ]}>
      {icon && iconFlex === 'left' && icon}
      <TextComponent
        text={text}
        color={textcolor ?? appColors.white}
        font={textfont ?? fontFamilies.regular}
        size={16}
        styles={[
          textStyle,
          {
            marginLeft: icon ? 12 : 0,
            fontSize: 16,
            textAlign: 'center'
          },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        font={fontFamilies.Semilight}
        text={text}
        color={type === 'Link' ? appColors.primary2 : appColors.black}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
