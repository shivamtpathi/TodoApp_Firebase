import {ScrollView,StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import HeadingInput from '../component/Home/HeadingInput';
import RenderItem from '../component/Home/RenderItem';
import HomeButton from '../component/Home/HomeButton';

const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const data = [
    {
      title: 'HomeWork',
      description: 'hello how are you kinnincis ncini incindi incidnsiijidjsijdijid jndiwqijdijwiqjdiwj',
    },
    {
      title: 'Buy Vegetable',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'BUy Car',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi kmdisjijsijisjisj',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
    {
      title: 'Learn History',
      description: 'hello how are you kinnincis ncini incindi incidnsi',
    },
  ];

  return (
    <View style={styles.container}>
      <HeadingInput
        value={title}
        setValue={setTitle}
        placeHolder="Add Work Title"
      />
      <HeadingInput
        value={description}
        setValue={setDescription}
        placeHolder="Add Description"
      />

      <HomeButton />

<ScrollView style={{marginTop:10}} showsVerticalScrollIndicator={false} >

{data.map((item,index) => (
        <RenderItem title={item.title}  description={item.description} key={index}/>
      ))}
</ScrollView>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: '#E6F0F5',
  },
});
