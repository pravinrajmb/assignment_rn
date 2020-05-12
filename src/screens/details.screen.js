import React from 'react';
import {Container, Content, Text} from 'native-base';

const DetailsScreen = ({route}) => {
  const data = route.params.data;
  return (
    <Container>
      <Content>
        <Text>{JSON.stringify(data)}</Text>
      </Content>
    </Container>
  );
};

export {DetailsScreen};
