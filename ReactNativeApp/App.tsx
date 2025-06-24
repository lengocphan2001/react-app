/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './src/screens/home/HomeScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import SettingsScreen from './src/screens/settings/SettingsScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';

// Import components
import LoadingSpinner from './src/components/common/LoadingSpinner';

// Import types
import {RootStackParamList} from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{title: 'Sign Up'}}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{title: 'Home'}}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{title: 'Profile'}}
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{title: 'Settings'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <LoadingSpinner />
    </SafeAreaProvider>
  );
}

export default App;
