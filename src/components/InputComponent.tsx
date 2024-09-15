import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardType,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appInfo} from '../constants/appInfo';

interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  keytype?: KeyboardType;
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    affix,
    placeholder,
    suffix,
    isPassword,
    allowClear,
    keytype,
  } = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

  return (
    <View style={[style.inputcontainer]}>
      {affix ?? affix}
      <TextInput
        value={value}
        style={[{color: appColors.black}, style.input]}
        placeholderTextColor={appColors.typo4}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPass}
        keyboardType={keytype ?? 'default'}
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }>
        {isPassword ? (
          isShowPass ? (
            <EyeSlash size={22} color={appColors.typo3}></EyeSlash>
          ) : (
            <Eye size={22} color={appColors.typo3}></Eye>
          )
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.typo4} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const style = StyleSheet.create({
  inputcontainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.typo5,
    width: appInfo.sizes.WIDTH * 0.94,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
  },
});
