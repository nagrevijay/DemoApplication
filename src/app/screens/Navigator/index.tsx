import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../Home';
import About from '../About';
import List from '../List'
import Notification from "../../common/pushNotification";


const screens = {
    Home: {
        screen: Home,
    },
    About: {
        screen: About,
    }, 
    List: {
        screen: List,
    },
    Notification:{
        screen:Notification,
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);