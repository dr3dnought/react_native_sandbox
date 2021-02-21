import React from 'react';
import {NavigationProvider} from './src/context/NavigationContext';
import Navigation from './src/navigation/Navigation';


const App = () => {
    return (
        <NavigationProvider>
            <Navigation/>
        </NavigationProvider>
    )
};

export default App;
