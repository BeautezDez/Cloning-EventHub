import {View, Text} from 'react-native';
import React from 'react';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants/fontFamilies';
import ButtonComponent from '../../components/ButtonComponent';
import {Google} from 'iconsax-react-native';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color={appColors.typo3}
        size={16}
        font={fontFamilies.regular}
      />
      <ButtonComponent
        textfont={fontFamilies.Semilight}
        textcolor={appColors.black}
        type='Primary'
        color={appColors.grayBg}
        text="Login with Google"
        icon={<Google size={24} color={appColors.primary} />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
