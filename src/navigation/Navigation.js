import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '../context/NavigationContext';
import {SCREEN} from '../constants/constants';
import MainScreen from '../screens/MainScreen';
import AuthScreen from '../screens/AuthScreen';
import FeedScreen from '../screens/FeedScreen';

const Navigation = () => {
    const [screen] = useNavigation();
    let renderScreen;
    switch(screen) {
        case SCREEN.MAIN:
            renderScreen = <MainScreen/>;
            break;
        case SCREEN.AUTH:
            renderScreen = <AuthScreen/>;
            break;
        case SCREEN.FEED:
            renderScreen = <FeedScreen/>;
            break;
    }

    return <View style={{flex: 1}}>{renderScreen}</View>;
};

export default Navigation;
