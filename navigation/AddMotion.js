import { createStackNavigator } from 'react-navigation';
import AddMotionScreen from '../screens/AddMotionScreen';

const AddMotionStack = createStackNavigator({
  AddMotion: AddMotionScreen,
});

export default AddMotionStack;