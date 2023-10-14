import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';


interface propsType {
  id: string;
  title: string;
  description: string;
  onPressDelete: (id: string) => void;
  userCollection: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>;
}

const RenderItem = (props: propsType) => {
  const {id, title, description, onPressDelete, userCollection} = props;
  const [active, setActive] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);






  const handleSave = async () => {
    try {
      await userCollection.collection('tasks').doc(id).update({
        title: editedTitle,
        description: editedDescription,
      });
      setActive(false);
    } catch (error) {
      setActive(false);
      Alert.alert('Some thing went wrong');
      console.log('Update task error', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '84%'}}>
        {active ? (
          <TextInput
            value={editedTitle}
            onChangeText={v => setEditedTitle(v)}
            style={styles.headingText}
          />
        ) : (
          <Text style={styles.headingText}>{editedTitle}</Text>
        )}
        {active ? (
          <TextInput
            value={editedDescription}
            onChangeText={v => setEditedDescription(v)}
            style={styles.descriptionText}
          />
        ) : (
          <Text style={styles.descriptionText}>{editedDescription}</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onPressDelete(id)}>
          <MaterialCommunityIcons name="delete" size={25} color="green" />
        </TouchableOpacity>
        {active ? (
          <TouchableOpacity onPress={handleSave} style={{marginTop: 10}}>
            <FontAwesome name="save" size={25} color="green" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setActive(true)}
            style={{marginTop: 10}}>
            <FontAwesome name="edit" size={25} color="green" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FfF',
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headingText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000000',
  },
  descriptionText: {
    fontSize: 16,
  },

  buttonContainer: {
    alignItems: 'center',
    width: '10%',
    justifyContent: 'space-between',
  },
});

export default RenderItem;
