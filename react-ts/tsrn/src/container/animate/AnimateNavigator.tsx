import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import AnimateHome from './Home/AnimateHome';

export type RootStackParamList = {
  AnimateHome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
// type HomeProp = {
//   navigation: HomeScreenNavigationProp;
// };

// const Home = ({navigation}: HomeProp) => {
//   const user = {
//     userID: 1,
//     username: 'WonyJeong',
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Profile', user);
//         }}>
//         <Text>GO TO NEXT SCREEN!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;

// type Props = {
//   route: ProfileScreenRouteProp;
//   navigation: ProfileScreenNavigationProp;
// };

// const Profile = ({route, navigation}: Props) => {
//   const userID = route.params?.userID ?? null;
//   const username = route.params?.username ?? null;
//   return (
//     <View>
//       <Text>{userID}</Text>
//       <Text>{username}</Text>
//     </View>
//   );
// };

function AnimateNavigator() {
  return (
    <Stack.Navigator initialRouteName="AnimateHome">
      <Stack.Screen
        name="AnimateHome"
        component={AnimateHome}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
}

export default AnimateNavigator;
