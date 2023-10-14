import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeadingInput from '../component/Home/HeadingInput';
import RenderItem from '../component/Home/RenderItem';
import HomeButton from '../component/Home/HomeButton';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import PushNotification from 'react-native-push-notification';

const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [getloading, setGetLoading] = useState<boolean>(true);

  const [description, setDescription] = useState<string>('');

  const [data, setData] = useState<
    {id: string; title: string; description: string}[]
  >([]);
  console.log("kndimidmimi",data)
  const user = auth().currentUser;
 
  const userCollection = firestore().collection('users').doc(user?.uid);
  const fetchTasks = async () => {
    // setLoading(true)
    try {
      const snapshot = await userCollection.collection('tasks').get();
      // console.log("kkkkkk",snapshot)
      const tasksData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as {id: string; title: string; description: string}[];
      setData(tasksData);
      // setLoading(false)
    } catch (error) {
      console.log('Fetch tasks error', error);
      setGetLoading(false);
    } finally {
      setGetLoading(false);
    }
  };

  const Notification = (message: string) => {
    PushNotification.localNotification({
      channelId: 'channelId',
      bigText:message,
      allowWhileIdle: true,
      message: message, 
    });
  };
  
// Notification()
  const Post = async () => {
    setLoading(true);
    if (title == '' || description == '') {
      setLoading(false);
      Alert.alert('please add work with it description');
    } else
      try {
        await userCollection.collection('tasks').add({
          title,
          description,
        });
        Notification('🚀 Task added successfully');
        setDescription('');
        setTitle('');
        fetchTasks();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Something went wrong');
        console.log('Post task error', error);
      }
  };
  const deleteTask = (taskId: string) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await userCollection.collection('tasks').doc(taskId).delete();
              fetchTasks();
              Notification('👍 Congratulations, you completed the task');
            } catch (error) {
              Alert.alert('Something went wrong');

              console.log('Delete task error', error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

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
              await auth().signOut();
            } catch (error) {
              Alert.alert('Something went wrong');

              console.error('Error signing out:', error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoutButton}>
        <Icon onPress={handleLogout} name="logout" size={30} color="green" />
      </View>
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

      <HomeButton loading={loading} onPress={Post} />

      <ScrollView style={{marginTop: 10}} showsVerticalScrollIndicator={false}>
        {getloading ? (
          <ActivityIndicator size={30} color="green" />
        ) : (
         data.map((item, index) => (
            <RenderItem
              id={item.id}
              title={item.title}
              description={item.description}
              key={item.id}
              onPressDelete={() => deleteTask(item.id)}
              userCollection={userCollection}
            />
          ))
        )}
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
    alignItems: 'flex-end',
    marginTop: 15,
    justifyContent: 'center',
    marginRight: 10,
  },
});
