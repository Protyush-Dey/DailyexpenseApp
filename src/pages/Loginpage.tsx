import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import { useFormik } from 'formik';
import { loginPayload } from '../Api/Type';
import { useMutation } from '@tanstack/react-query';
import { Login } from '../Api/AuthAPi';
import * as Yup from 'yup';
export const Loginpage = () => {
  const inputError = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: inputError,
    onSubmit: (values: loginPayload) => {
        console.log(values);
      loginMutation.mutate(values);
    },
  });

  const loginMutation = useMutation({
    mutationFn: (value: loginPayload) => Login(value),
    onSuccess: () => {
      console.log('logged in');
    },
    onError: () => {
      console.log('logged in failed');
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.heading}>
          <Text style={styles.headingH}> Login </Text>
          <Text style={styles.headingp}> Manage your expense</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            style={styles.form}
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
          style={styles.form}
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            secureTextEntry
            autoCapitalize="none"
          />
          <Pressable onPress={() => formik.handleSubmit()} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>{' '}
        </View>
        <Text>
          You Don't have account <Text>Sign Up</Text>{' '}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#F5F7FA',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
},
  box: {
  backgroundColor: '#FFFFFF',
  width: '90%',
  padding: 24,
  borderRadius: 20,
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  gap:"20"
},
  heading: {
    alignItems: 'center',

    width: '100%',
  },
  headingH: {
    fontSize: 35,
  },
  headingp: {
    fontSize: 20,
  },
  formBox: {
    width: '100%',
    gap:20
  },
  form: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 10,
    fontSize:20,
    color:"#000000"
  },
  button: {
  width: '100%',
  height: 52,
  backgroundColor: '#2563EB',
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
},

buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
},
});
