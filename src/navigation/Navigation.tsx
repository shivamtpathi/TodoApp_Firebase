import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import { ScreenList } from './NavigationProp'

const Navigation = () => {
  const stack = createNativeStackNavigator<ScreenList>()
  return (
    <NavigationContainer >
      <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login' >
        <stack.Screen name="Login" component={Login}  />
        <stack.Screen name="SignUp" component={SignUp}  />

      </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

