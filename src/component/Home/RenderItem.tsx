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
  container: {
    backgroundColor: "#F3FBFF",
    width: "100%",
    padding: 12,
    borderRadius: 5,
    marginBottom:7,
    // minHeight:400
  },
  headingText: {
    fontSize: 18,
    color: 'black',
  },
  descriptionText: {
    fontSize: 16,
  
  },
});
