import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Inbox } from "../pages/Inbox";
import { Profile } from "../pages/Profile";
import { New } from "../pages/New";

import { Ionicons } from "@expo/vector-icons";
import ButtonNew from "../components/ButtonNew";

const Tab = createBottomTabNavigator();

export function Routes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle:{
          backgroundColor: "#000",
          borderTopWidth: 0,
        },

        tabBarActiveTintColor: "#FFF"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if(focused){
              return <Ionicons name="search" size={size} color={color} />
            }
            return <Ionicons name="search-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: () => {
           return <ButtonNew size={25}/>
          }
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if(focused){
              return <Ionicons name="ios-chatbubble-ellipses" size={size} color={color} />
            }
            return <Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if(focused){
              return <Ionicons name="person" size={size} color={color} />
            }
            return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}