import SignInScreen from '../screens/SignInScreen';
import { createStackNavigator } from 'react-navigation';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default AuthStack