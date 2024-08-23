import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import BtabNavigation from "./Btabnavigation";

const RootNavigation = (props) => {
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


  const isLoggin = false

  return (

    isLoggin ?
      <BtabNavigation initRoute={"Home"} />
      :
      <AuthNavigation initRoute={"Login"} />

  );
};

export default RootNavigation;