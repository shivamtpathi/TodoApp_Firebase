import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import HeadingInput from '../component/Home/HeadingInput';
import RenderItem from '../component/Home/RenderItem';
import HomeButton from '../component/Home/HomeButton';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign'
import { Alert } from 'react-native';

const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const data = [
    {
      title: 'HomeWork',
      description:
        'hello how are you kinnincis ncini incindi incidnsiijidjsijdijid jndiwqijdijwiqjdiwj',
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
      description:
        'hello how are you kinnincis ncini incindi incidnsi kmdisjijsijisjisj',
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
  // const handleLogout = async () => {
  //   try {
  //     await auth().signOut(); // Sign out the user
  //     // You can add any additional logic here, such as navigating to the login screen.
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //   }
  // };
  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await auth().signOut(); // Sign out the user
              // You can add any additional logic here, such as navigating to the login screen.
            } catch (error) {
              console.error('Error signing out:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>

        <Icon name="logout" size={30} color="green" />

      </TouchableOpacity>
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

      <ScrollView style={{marginTop: 10}} showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <RenderItem
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: '#E6F0F5',
    flex: 1,
  },
  logoutButton: {
  
  alignItems:"flex-end",
  marginTop:15,
  justifyContent:"center",
  marginRight:10
  

   
  },

 
});
