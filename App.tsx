import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Navigation from './src/navigation/Navigation';

const App = (): React.JSX.Element => (
<SafeAreaView style={{flex: 1}}>
    {/* <Home/> */}
    {/* <Login /> */}
    {/* <SignUp /> */}
    <Navigation/>
  </SafeAreaView>
);

export default App;




// import React, { useEffect } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import PushNotification from 'react-native-push-notification';

// const App: React.FC = () => {
//   useEffect(() => {
//     // Create a high-priority channel
//     PushNotification.createChannel(
//       {
//         channelId: 'high-priority-channel', // Specify a unique channel ID
//         channelName: 'High Priority Channel',
//         soundName: 'default',
//       },
//       (created) => console.log(`createChannel returned '${created}'`)
//     );

//     // Create a low-priority channel
//     PushNotification.createChannel(
//       {
//         channelId: 'low-priority-channel1', // Specify a unique channel ID
//         channelName: 'Low Priority Channel',
//         soundName: 'default',
//       },
//       (created) => console.log(`createChannel returned '${created}'`)
//     );

//     // Schedule a local notification using the high-priority channel
//     PushNotification.localNotification({
//       channelId: 'high-priority-channel', // Use the provided channel ID
//       message: 'High-Priority Notification',
//       allowWhileIdle: true,

//     });

    
//     PushNotification.localNotificationSchedule({
//       channelId: 'low-priority-channel1', 
//       message: 'Low-Priority Notification',
//       date: new Date(Date.now() + 5 * 1000), 
//       allowWhileIdle: true,
//     });
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Push Notification Example</Text>
//       <TouchableOpacity>
//         <Text>Schedule Notification</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;
