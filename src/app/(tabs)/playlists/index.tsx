import { defaultStyles } from "@/styles"
import { ScrollView, View, StyleSheet } from "react-native"

const PlaylistsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                {/* Content goes here */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
})

export default PlaylistsScreen
