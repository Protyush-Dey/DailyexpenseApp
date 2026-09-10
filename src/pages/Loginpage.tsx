import { View, StyleSheet, Text, TextInput, Button, Pressable } from "react-native";
import { useFormik } from "formik";
import { loginPayload } from "../Api/Type";
export const Loginpage = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        // validationSchema: inputError,
        onSubmit: (values: loginPayload) => {
            console.log(values);
        },
    });

    return (
        <View>
            <View>
                <Text> Login </Text>
                <Text> Manage your expense</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Email"
                    value={formik.values.email}
                    onChangeText={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Password"
                    value={formik.values.password}
                    onChangeText={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <Pressable onPress={() => formik.handleSubmit()}>
                    <Text>Login</Text>
                </Pressable>            </View>
            <Text>You Don't have account{" "} <Text>Ragister</Text> </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});