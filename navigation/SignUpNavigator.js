import SignUpScreen from '../screens/SignUpScreen';
import { createStackNavigator } from 'react-navigation';

const SignUpStack = createStackNavigator({ SignUp: SignUpScreen });

export default SignUpStack