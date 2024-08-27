import {View, Text, Button, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {Lock, Sms} from 'iconsax-react-native';
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
const LoginScreen = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerComponent>
      <SectionComponent
        styles={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/image/loginIcon.png')}
          style={{
            width: 162,
            height: 114,
            resizeMode: 'contain',
            marginTop: 75,
          }}
        />
        <Text></Text>
      </SectionComponent>
      <SectionComponent>
        <TextComponent font={fontFamilies.regular} size={24} text="Sign in" />
        <SpaceComponent height={21} />
        <InputComponent
          placeholder="Email"
          value={email}
          onChange={val => {
            setEmail(val);
          }}
          // isPassword
          allowClear
          affix={<Sms size={22} color={appColors.typo3} />}
        />
        <InputComponent
          placeholder="Password"
          value={password}
          onChange={val => {
            setPassword(val);
          }}
          isPassword
          allowClear
          affix={<Feather name="lock" size={22} color={appColors.typo3} />}
        />
        <SpaceComponent height={20} />

        <RowComponent justify="space-between">
          <RowComponent onPress={()=> setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.grayBg}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent
              font={fontFamilies.Semilight}
              text="Remember me"
              size={14}
            />
          </RowComponent>  
          <ButtonComponent
            text="Forgot Password"
            onPress={() => {}}
            type="Text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={20}/>
      <SectionComponent>
        <ButtonComponent text='SIGN IN' type='Primary'/>
      </SectionComponent>
      <SocialLogin/>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Don't have account?"/>
          <ButtonComponent type='Link' text='Sign up'/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
