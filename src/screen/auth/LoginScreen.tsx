import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import {globalStyles} from '../../styles/globalStyles';
import InputComponent from '../../components/InputComponent';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import Feather from 'react-native-vector-icons/Feather'

const LoginScreen = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
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
        affix={<Feather name='lock' size={22} color={appColors.typo3} />}
      />
    </View>
  );
};

export default LoginScreen;
