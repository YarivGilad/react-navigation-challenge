import React, {FC} from 'react';
import {Text, View, TextInput, SafeAreaView} from 'react-native';
import Logo from '../../../assets/icons/logo.svg';
import GradientButton from '../../../components/ui/gradient-button/gradient.button';
import PasswordInput from '../../../components/ui/password-input/password.input';
import LinkButton from '../../../components/ui/link-button/link.button';
import Spacer from '../../../components/ui/spacer/spacer';
import styles from './login.screen.styles';

const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          {/******************** HEADER *********************/}
          <View style={styles.brandRow}>
            <Logo width={90} height={90} style={styles.logo} />
            <Text style={styles.brandName}>Nosotros</Text>
          </View>
          <Spacer height={20} />
          {/******************** FORM BEGIN *********************/}
          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          {/******************** EMAIL INPUT *********************/}
          <TextInput style={styles.emailInput} placeholder="Email" />
          {/******************** PASSWORD INPUT *********************/}
          <PasswordInput />
          {/******************** LOGIN BUTTON *********************/}
          <GradientButton
            label="login"
            onPress={() => console.log('login pressed!!')}
          />
          <Spacer height={20} />
          {/***************** FORGOT PASSWORD LINK BUTTON *****************/}
          <LinkButton
            onPress={() => console.log('Forgot Password pressed!!')}
            label="Forgot Password?"
          />
        </View>
        {/******************** FOOTER *********************/}
        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER LINK BUTTON *********************/}
          <LinkButton
            onPress={() => console.log('Sign Up pressed!!')}
            label="Sign Up"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
