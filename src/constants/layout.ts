import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { colors } from "./tokens";
import React from "react";

// Conditionally import CustomLargeHeader only on Android
const CustomLargeHeader = Platform.OS === 'android' 
    ? require('../components/CustomLargeHeader').CustomLargeHeader 
    : null;

export const StackScreenWithSearchbar = (title?: string): NativeStackNavigationOptions => ({
    ...(Platform.OS === 'ios' ? {
        headerLargeTitle: true,
        headerLargeStyle: {
            backgroundColor: colors.background,
        },
        headerLargeTitleStyle: {
            color: colors.text,
        },
        headerBlurEffect: 'prominent',
    } : {
        headerShown: CustomLargeHeader ? true : false,
        ...(CustomLargeHeader && title ? {
            header: () => React.createElement(CustomLargeHeader, { title })
        } : {})
    }),
    headerTintColor: colors.text,
    headerTransparent: true,
    headerShadowVisible: false,
})

