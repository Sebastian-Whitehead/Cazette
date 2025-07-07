import { TrackList } from "@/components/TrackList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import { useNavigation } from "expo-router"
import { ScrollView, View, StyleSheet } from "react-native"

const SongScreen = () => {
    //TODO: android title implementation is fucking with search bar
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: "Search songs",
        },
    })

    return (
        <View style={defaultStyles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ paddingHorizontal: screenPadding.horizontal }}
            >
                <TrackList scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
})

export default SongScreen