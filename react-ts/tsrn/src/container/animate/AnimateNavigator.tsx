import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AnimateHome from './Home/AnimateHome';
import CounterContainer from '../Counter/CounterContainer';
import GithubContainer from '../Github/GithubContainer';
import AwesomeSlideContainer from '../Slide/AwesomeSlideContainer';

export type RootStackParamList = {
  AnimateHome: undefined;
  CounterContainer: undefined;
  GithubContainer: undefined;
  AwesomeSlideContainer: undefined;
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
      <Stack.Screen name="CounterContainer" component={CounterContainer} />
      <Stack.Screen name="GithubContainer" component={GithubContainer} />
      <Stack.Screen
        name="AwesomeSlideContainer"
        component={AwesomeSlideContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AnimateNavigator;
