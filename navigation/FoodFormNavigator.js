import FoodFormScreen from '../screens/FoodFormScreen';
import { createStackNavigator } from 'react-navigation';

const FoodFormStack = createStackNavigator({
  FoodForm: FoodFormScreen,
});

export default FoodFormStack;