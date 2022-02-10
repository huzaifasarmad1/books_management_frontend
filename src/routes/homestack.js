import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import mainpage from '../screens/mainpage';
import details from '../screens/details';


const screens = {
  mainpage:{
    screen:mainpage,
    navigationOptions: {headerShown: false,},
  },
  details: {
    screen: details,
    navigationOptions: {headerShown: false,},
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
