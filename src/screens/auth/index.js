import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../store/actions';
import { COLORS } from '../../constants';
import Input from '../../components/input';

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setIsNotValid] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const onChangeInput = (value, type) => {
    if (type === 'email') {
      setEmail(value);
    }
    if (type === 'password') {
      setPassword(value);
    }

    if (
      emailInputRef.current.state.validate &&
      passwordInputRef.current.state.validate
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  const handleAuth = () => {
    if (isLogin) {
      dispatch(authAction.signin(email, password));

      console.log(userId);
    } else {
      dispatch(authAction.signup(name, email, password));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}
      enabled
    >
      {isLogin ? (
        <>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Login</Text>
            </View>
          </View>
          <View style={styles.containerCard}>
            <View style={styles.formContainer}>
              <Input
                ref={emailInputRef}
                label="Email"
                placeholder="Ingresa tu correo"
                // placeholderTextColor={colors.placeholder}
                keyboardType="email-address"
                type="email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeInput={(value) => onChangeInput(value, 'email')}
                value={email}
                maxLength={60}
              />
              <Input
                ref={passwordInputRef}
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                // placeholderTextColor={colors.placeholder}
                type="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeInput={(value) => onChangeInput(value, 'password')}
                value={password}
                maxLength={20}
              />
            </View>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.linkText}>
                Don't you have an account yet? Register
              </Text>
            </TouchableOpacity>
            <Button
              title="Login"
              onPress={() => handleAuth()}
              disabled={isNotValid}
              color={COLORS.primaryColor}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Register</Text>
            </View>
          </View>
          <View style={styles.containerCard}>
            <View style={styles.formContainer}>
              <Input
                ref={emailInputRef}
                label="Email"
                placeholder="Fill Email"
                // placeholderTextColor={colors.placeholder}
                keyboardType="email-address"
                type="email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeInput={(value) => onChangeInput(value, 'email')}
                value={email}
                maxLength={60}
              />
              <Input
                ref={passwordInputRef}
                label="Contraseña"
                placeholder="Fill Password"
                // placeholderTextColor={colors.placeholder}
                type="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeInput={(value) => onChangeInput(value, 'password')}
                value={password}
                maxLength={20}
              />
            </View>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.linkText}>
                Do you already have an account? Login
              </Text>
            </TouchableOpacity>
            <Button
              title="Register"
              onPress={() => handleAuth()}
              disabled={isNotValid}
              color={COLORS.primaryColor}
            />
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default Auth;
