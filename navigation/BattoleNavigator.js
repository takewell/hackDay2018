import BattoleScreen from '../screens/BattoleScreen';
import { createStackNavigator } from 'react-navigation';

const BattoleStack = createStackNavigator({
  Battole: BattoleScreen,
});

export default BattoleStack;