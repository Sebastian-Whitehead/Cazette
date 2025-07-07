import React from "react";
import { Platform, View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/tokens";

interface CustomLargeHeaderProps {
    title: string;
}

export const CustomLargeHeader: React.FC<CustomLargeHeaderProps> = ({ title }) => {
    const insets = useSafeAreaInsets();
    
    if (Platform.OS === 'ios') return null;
    
    return (
        <View style={[styles.customHeader, { paddingTop: insets.top + 20 }]}>
            <Text style={styles.largeTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    largeTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 10,
    },
});
