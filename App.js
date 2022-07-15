
import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>

      <NavigationContainer>
      <SafeAreaProvider>
          <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1}}>
          <Stack.Navigator>
          <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
            }}
            />
            <Stack.Screen
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown: false,
            }}
            />
        </Stack.Navigator>
          </KeyboardAvoidingView>
        
      
      </SafeAreaProvider>
      </NavigationContainer>
      
      
    </Provider>
  );
}


