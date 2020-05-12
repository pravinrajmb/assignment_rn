import React, {useState, useEffect} from 'react';
import {Container, Content, Text} from 'native-base';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';

import {weatherService} from '../services';

const WeatherDetailsScreen = ({route}) => {
  const city = route.params.data;

  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    setLoading(true);
    weatherService
      .getCurrentWeather(city)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {})
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator style={styles.activityIndicator} size={'large'} />
      ) : (
        <Content style={styles.content}>
          <View style={styles.dataContainer}>
            <View>
              <Text>{city}</Text>
              <Text style={styles.text}>
                Temperature: {weather?.current?.temperature} °C
              </Text>
              <Text style={styles.text}>
                Wind Speed: {weather?.current?.wind_speed} km/hr
              </Text>
              <Text style={styles.text}>
                Preciptation: {weather?.current?.precip} mm
              </Text>
            </View>
            <Image
              style={styles.image}
              source={{uri: weather?.current?.weather_icons?.[0]}}
            />
          </View>
        </Content>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {flex: 1, alignSelf: 'center'},
  content: {padding: 16},
  text: {margin: 8},
  image: {height: 50, width: 50},
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export {WeatherDetailsScreen};
