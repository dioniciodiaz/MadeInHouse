import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, View, Text} from 'native-base';

const ViewRecipe = props => {
  return (
    <Container>
      <Content>
        <View>
          <Text>Hi</Text>
        </View>
      </Content>
    </Container>
  );
};

ViewRecipe.propTypes = {};

export default ViewRecipe;
