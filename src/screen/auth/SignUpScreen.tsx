import {View, Text, Button, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {ArrowRight, Lock, Sms, User} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import Feather from 'react-native-vector-icons/Feather';
import {fontFamilies} from '../../constants/fontFamilies';
import {
  ButtonComponent,
  InputComponent,
  ContainerComponent,
  SectionComponent,
  TextComponent,
  SpaceComponent,
  RowComponent,
} from '../../components/Index';
import SocialLogin from './SocialLogin';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;
    setValues(data);
  };

  return (
    <ContainerComponent back>
      <SectionComponent>
        <TextComponent font={fontFamilies.regular} size={24} text="Sign up" />
        <SpaceComponent height={21} />
        <InputComponent
          placeholder="Full name"
          value={values.username}
          onChange={val => {
            handleChangeValue('username', val);
          }}
          // isPassword
          allowClear
          affix={<User size={22} color={appColors.typo3} />}
        />
        <InputComponent
          placeholder="abc@email.com"
          value={values.email}
          onChange={val => {
            handleChangeValue('email', val);
          }}
          // isPassword
          allowClear
          affix={<Sms size={22} color={appColors.typo3} />}
        />
        <InputComponent
          placeholder="Your password"
          value={values.password}
          onChange={val => {
            handleChangeValue('password', val);
          }}
          isPassword
          allowClear
          affix={<Feather name="lock" size={22} color={appColors.typo3} />}
        />
        <InputComponent
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={val => {
            handleChangeValue('confirmPassword', val);
          }}
          isPassword
          allowClear
          affix={<Feather name="lock" size={22} color={appColors.typo3} />}
        />
      </SectionComponent>
      <SpaceComponent height={20} />
      <SectionComponent>
        <ButtonComponent
          text="SIGN UP"
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
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have account?" />
          <ButtonComponent
            type="Link"
            text="Sign in"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
