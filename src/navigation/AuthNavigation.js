import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ForgotPassword from "../screens/ForgotPassword";
import Otpscreen from "../screens/Otpscreen";



const AuthNavigation = (props) => {

  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  const transitionConfig = {
    animation: "spring",
    config: {
      stiffness: 500,
      damping: 50,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (

    <Stack.Navigator
      // initialRouteName={"Btabs"}
      initialRouteName={props.initRoute}
      screenOptions={{
        ...screenOptions,
        transitionSpec: {
          open: transitionConfig,
          close: transitionConfig,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={{ title: "forgotpassword" }}
      />
      <Stack.Screen
        name="Otpscreen"
        component={Otpscreen}
        options={{ title: "Otpscreen" }}
      />
      
    </Stack.Navigator>
  );
};

export default AuthNavigation;