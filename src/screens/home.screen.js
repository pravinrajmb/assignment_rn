import React, {useState} from 'react';
import {Container, Content, Form, Item, Input, Button, Text} from 'native-base';
import {Alert, StyleSheet} from 'react-native';

import {countriesService} from '../services';

const HomeScreen = ({navigation}) => {
  const {button} = styles;

  const [country, setCounrty] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCountryDetails = async () => {
    setLoading(true);
    try {
      const result = await countriesService.getCounrtyDetails(country);
      navigation.navigate('countrieslist', {data: result.data});
    } catch (error) {
      Alert.alert(
        'Error',
        error?.response?.data?.message
          ? error.response.data.message
          : 'Unexpected error occured. Please try again later.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item last>
            <Input
              placeholder={'Enter country'}
              value={country}
              onChangeText={setCounrty}
            />
          </Item>
        </Form>

        <Button
          style={button}
          disabled={!country || loading}
          onPress={fetchCountryDetails}>
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
});

export {HomeScreen};
