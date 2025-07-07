import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

const SongScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>
                This is the Songs screen.
            </Text>
        </View>
    )
}

export default SongScreen