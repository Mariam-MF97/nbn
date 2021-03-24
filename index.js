/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import AppStart from './Screens/components/AppStart';
import Students from './Screens/Data/StudentData';

AppRegistry.registerComponent(appName, () => AppStart);
