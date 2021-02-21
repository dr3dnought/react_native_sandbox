import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '../context/NavigationContext';
import {SCREEN} from '../constants/constants';
const MainScreen = () => {
    const [screen, setScreen] = useNavigation();
    const onPress = () => {
        setScreen(SCREEN.FEED);
    };
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={{}}>MainScreen</Text>
            </TouchableOpacity>
        </View>
    )
};

export default MainScreen;
