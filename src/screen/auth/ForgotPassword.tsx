import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components/Index';
import {ArrowRight, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent back>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <TextComponent
          text="Please enter your email address to request a password reset"
          styles={{width: '70%'}}
        />
        <SpaceComponent height={26} />
        <InputComponent
          value={email}
          onChange={val => setEmail(val)}
          placeholder="abc@email.com"
          allowClear
          affix={<Sms size={22} color={appColors.typo3} />}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="SEND"
          type="Primary"
          style={{marginHorizontal: 45}}
          icon={
            <View
              style={{
                backgroundColor: appColors.primary2, 
                borderRadius: 50, 
                padding: 3,
              }}>
              <ArrowRight size={28} color={appColors.white} />
            </View>
          }
          iconFlex="right"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
