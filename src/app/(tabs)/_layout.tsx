import { Tabs } from "expo-router";

const TabsNavigation = () => {
    return (
        <Tabs>  
            <Tabs.Screen 
                name="favorites" 
                options={{
                    title: 'Favorites'
                }}
            />
            <Tabs.Screen 
                name="playlists" 
                options={{
                    title: 'Playlists'
                }}
            />
            <Tabs.Screen 
                name="(songs)" 
                options={{
                    title: 'Songs'
                }}
            />
            <Tabs.Screen 
                name="artists" 
                options={{
                    title: 'Artists'
                }}
            />
        </Tabs>
    )
}

export default TabsNavigation;