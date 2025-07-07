import { StackScreenWithSearchbar } from "@/constants/layout"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const SongScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                    name="index" 
                    options={{
                        // TODO: CHECK IF THE DEFAULT BEHAVIOR WORKS ON ANDROID OR NOT
                        // TODO: FIX SCROLLING BEHAVIOR FOR ANDROID VARIANT OF THIS LAYOUT
                        ...StackScreenWithSearchbar('Songs'), 
                        }} 
                    />
            </Stack>
        </View>
    )
}

export default SongScreenLayout 