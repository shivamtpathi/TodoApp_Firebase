import {  StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface propsType {
  title: string,
  description: string
}

const Heading = ({ title }:Pick<propsType, 'title'>) => <Text style={styles.headingText}>{title}</Text>;

const Description = ({ description }: Pick<propsType, 'description'>) => (
  <Text  style={styles.descriptionText}>{description}</Text>
);

const RenderItem = (props: propsType) => {
  const { title, description } = props;

  return (
    <View style={styles.container}>
      <Heading title={title}  />
      <Description description={description}  />
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#F3FBFF",
  //   width: "100%",
  //   padding: 12,
  //   borderRadius: 5,
  //   marginBottom:7,
  //   // minHeight:400
  // },
  container: {
    backgroundColor: "#FfF",
    borderRadius: 5,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,

  },
  descriptionText: {
    fontSize: 16,
  
  },
});
