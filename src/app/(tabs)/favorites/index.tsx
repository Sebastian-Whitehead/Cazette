import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

const FavoritesScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>
                This is the Favorites screen.
            </Text>
        </View>
    )
}

export default FavoritesScreen
