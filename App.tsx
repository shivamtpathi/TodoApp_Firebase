import { SafeAreaView} from 'react-native';
import React, { useEffect } from 'react';

import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

const App = (): React.JSX.Element =>{

  useEffect(() => {
    SplashScreen.hide();
  }, []);


return(
<SafeAreaView style={{flex: 1}}>
    
    <Navigation/>
  </SafeAreaView>
)}

export default App;

