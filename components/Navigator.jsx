import React from 'react';
import Index from './Index';
import Register from './Register';
import Mangas from './Mangas';
import Logout from './LogOut';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import authorsReducer from '../redux/reducer/me_authorsReducer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigator = () => {
    const { user, token } = useSelector((state) => state.me_authorsReducer);
    const isAuthenticated = !!token; 

    return (
        <Drawer.Navigator>
            {!isAuthenticated ? (
            <>
                <Drawer.Screen name="Home" component={Index} />
                <Drawer.Screen name="Register" component={Register} />
                
            </>
            ) : (
            <>
                <Drawer.Screen name="Mangas" component={Mangas} />
                <Drawer.Screen name="Logout" component={Logout} />
            </>)}
        </Drawer.Navigator>
    )
}

export default Navigator
