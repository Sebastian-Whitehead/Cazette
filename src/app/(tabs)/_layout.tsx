import { colors, fontSize } from "@/constants/tokens";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from 'react-native';
import {FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6} from '@expo/vector-icons';

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: '500',
            },
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                borderRadius: 20,
                borderTopWidth: 0,
                paddingTop: 8,
            },
            //TODO: blur works differently on android and ios so i need to figure that out
            tabBarBackground: () => <BlurView intensity={95}
            style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }} />,
         }}>  
            <Tabs.Screen 
                name="favorites" 
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="heart" size={20} color={color} />,
                }}
            />
            <Tabs.Screen 
                name="playlists" 
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color }: { color: string }) => <MaterialCommunityIcons name="playlist-play" size={28} color={color} />,
                }}

            />
            <Tabs.Screen 
                name="(songs)" 
                options={{
                    title: 'Songs',
                    tabBarIcon: ({ color }: { color: string }) => <Ionicons name="musical-notes-sharp" size={24} color={color} />,
                }}
            />
            <Tabs.Screen 
                name="artists" 
                options={{
                    title: 'Artists',
                    tabBarIcon: ({ color }: { color: string }) => <FontAwesome6 name="users-line" size={20} color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsNavigation;