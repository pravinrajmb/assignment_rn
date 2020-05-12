import React from 'react';
import {Container, Content, Text} from 'native-base';

const WeatherDetailsScreen = ({route}) => {
  const city = route.params.city;
  return (
    <Container>
      <Content>
        <Text>{city}</Text>
      </Content>
    </Container>
  );
};

export {WeatherDetailsScreen};
