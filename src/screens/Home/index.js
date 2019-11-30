import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, View, Text, Button} from 'native-base';

const Home = props => {
  return (
    <Container>
      <Content>
        <View>
          <Text>hi</Text>
        </View>
        <Button onPress={() => props.navigation.navigate('ViewRecipe')}>
          <Text>GO to Recipe</Text>
        </Button>
      </Content>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
