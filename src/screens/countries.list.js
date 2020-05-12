import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {Container, Content, List, ListItem, Text} from 'native-base';

const CountriesList = ({navigation, route}) => {
  const data = route.params.data;

  return (
    <Container>
      <Content>
        <List
          dataArray={data}
          keyExtractor={({item, index}) => {
            `${index}`;
          }}
          renderItem={({item, index}) => {
            return (
              <ListItem
                onPress={() => {
                  navigation.navigate('weather_details', {data: item.capital});
                }}>
                <View style={styles.listItemContanier}>
                  <View style={styles.listDataContainer}>
                    <Text>{item.name}</Text>
                    <Text>{`Capital: ${item.capital}`}</Text>
                    <Text>{`Population: ${item.population}`}</Text>
                    <Text>{`Latitude: ${item.latlng[0]} Longitude: ${
                      item.latlng[1]
                    }`}</Text>
                  </View>
                  <SvgUri width={50} height={50} uri={item.flag} />
                </View>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  listItemContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listDataContainer: {flex: 1},
});

export {CountriesList};
