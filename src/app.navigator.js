import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, CountriesList, WeatherDetailsScreen} from './screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerTitle: 'Assignment'}}
        />
        <Stack.Screen
          name="countrieslist"
          component={CountriesList}
          options={{headerTitle: 'Select Country'}}
        />
        <Stack.Screen
          name={'weather_details'}
          component={WeatherDetailsScreen}
          options={{headerTitle: 'Weather Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
