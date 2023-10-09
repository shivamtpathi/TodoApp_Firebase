// NavigationTypes.ts

import { NavigationProp as prop, RouteProp } from '@react-navigation/native';

export type ScreenList = {
  Login: undefined;
  SignUp: {name:string};
  // Add more routes here if needed
};

export type NavigationProp = prop<ScreenList>;
export type RoutePropType = RouteProp<ScreenList, keyof ScreenList>;
