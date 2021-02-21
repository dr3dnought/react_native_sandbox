import React, {useState, useEffect} from 'react';
import {View, Switch} from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
const MainScreen = () => {
    const { setDark, setLight, isDark, isLight } = useTheme();

    const toggleSwitch = (value) => {
        if(value) setLight();
        else setDark();
    };

    return (
        <View style={{backgroundColor: isLight ? '#1c1f2a' : '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isLight ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch(value)}
                value={isLight}
            />
        </View>
    )
};


const App = () => {
  return (
    <ThemeProvider>
        <MainScreen/>
    </ThemeProvider>
  );
};

export default App;
