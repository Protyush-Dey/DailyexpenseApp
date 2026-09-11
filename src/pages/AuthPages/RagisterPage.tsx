import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useFormik} from "formik";
import { ragisterPayload } from "../Api/Type";
import { useMutation} from "@tanstack/react-query";
import { Login } from "../Api/AuthAPi";
import * as Yup from "yup";
export const RagisterPage = ({ navigation }: any) => {

    const inputError = Yup.object().shape({
        fullName : Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });


    const formik = useFormik({
        initialValues: {
            fullName:"",
            email: "",
            password: "",
        },
        validationSchema: inputError,
        onSubmit: (values: ragisterPayload) => {

            signupMutation.mutate(values)
        },
    });

    const signupMutation = useMutation({
        mutationFn: (value: ragisterPayload) => Login(value),
        onSuccess: () => {
            console.log("logged in");
        },
        onError: () => {
            console.log("logged in failed");
        }
    })

    return (
        <View style={styles.container}>
            <View>
                <Text> Sign Up </Text>
                <Text> Make to manage expense</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Full name"
                    value={formik.values.fullName}
                    onChangeText={formik.handleChange("fullName")}
                    onBlur={formik.handleBlur("fullName")}
                    autoCapitalize="none"
                />
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
                    <Text>Sign Up</Text>
                </Pressable>            </View>
            <Text>You already have account{" "} <Text onPress={()=>navigation.navigate("Login")}>Login</Text> </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});