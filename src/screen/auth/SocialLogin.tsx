import {View, Text} from 'react-native';
import React from 'react';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants/fontFamilies';
import ButtonComponent from '../../components/ButtonComponent';
import {Facebook, Google} from '../../assets/SVG';
import SpaceComponent from '../../components/SpaceComponent';
const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColors.typo3}
        size={16}
        font={fontFamilies.regular}
      />
      <SpaceComponent height={16} />
      <ButtonComponent
        style={{marginHorizontal: 40}}
        textfont={fontFamilies.Semilight}
        textcolor={appColors.black}
        type="Primary"
        color={appColors.grayBg}
        text="Login with Google"
        icon={<Google />}
        iconFlex="left"
      />
      <ButtonComponent
        style={{marginHorizontal:40}}

        textfont={fontFamilies.Semilight}
        textcolor={appColors.black}
        type="Primary"
        color={appColors.grayBg}
        text="Login with Facebook"
        icon={<Facebook />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
