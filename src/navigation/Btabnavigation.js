import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import colors from '../assets/colors/colors';


function HomeTab() {
  const HomeTabStack = createBottomTabNavigator();

  return (
    <HomeTabStack.Navigator
      screenOptions={{
        tabBarStyle: {
          opacity: 0,
        },
      }}
      initialRouteName="homeTab">
      <HomeTabStack.Screen name="homeTab" component={Home} options={{ headerShown: false }} />

    </HomeTabStack.Navigator>
  );
}


const BtabNavigation = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={props.initRoute}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.SecondaryColor,
          borderRadius: 30,
          position: 'absolute',
          paddingHorizontal: 40,
          bottom: 20,
          left: 20,
          right: 20,
          height: 80,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.67,
          shadowRadius: 4.65,
          elevation: 6,
        },
        tabBarInactiveTintColor: "#f4f1f1",
        tabBarActiveTintColor: colors.white,

      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        style={{ paddingHorizontal: 0 }}
        options={{
          headerShown: false,
          tabBarIcon: ({ color = 'red', size, focused }) => (
            <View style={focused ? { marginBottom: 10, alignItems: "center", width: 200 } : { alignItems: "center", width: 100 }}>
              <FontAwesome5 name="home" color={color} size={size} />
            </View>
          ),
          tabBarLabel: ({ focused }) => null,
        }}
      />

     
    </Tab.Navigator >
  );
};

export default BtabNavigation;