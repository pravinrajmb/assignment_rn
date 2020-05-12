import React from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import moment from 'moment';

const HomeScreen = ({navigation}) => {
  const {title, url, time} = styles;

  return (
    <Container>
      <Content>
        <List
          dataArray={[
            {
              created_at: '2020-05-12T01:37:52.000Z',
              title: 'DevSecOps: Are we reducing silos now?',
              url:
                'http://diego-pacheco.blogspot.com/2020/05/devsecops-are-we-reducing-silos-now.html',
            },
          ]}
          renderItem={(data, index) => {
            return (
              <ListItem
                key={data.item.title + index}
                onPress={() => {
                  navigation.navigate('details', {data});
                }}>
                <Content>
                  <Text style={title}>{data.item.title}</Text>
                  <Text style={url}>{data.item.url}</Text>
                  <Text style={time}>
                    {moment(data.item.created_at).fromNow()}
                  </Text>
                </Content>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  url: {
    color: 'grey',
    marginBottom: 8,
  },
  time: {
    color: 'red',
  },
});

export {HomeScreen};
