import React, {useState, useContext} from 'react';
import {SCREEN} from '../constants/constants';

const NavigationContext = React.createContext({screen: SCREEN.MAIN, setScreen: (screen) => {}});

export const NavigationProvider = ({children}) => {
    const [screen, setScreen] = useState(SCREEN.MAIN);
    return (
        <NavigationContext.Provider value={{screen, setScreen}}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const {screen, setScreen} = useContext(NavigationContext);

    return [screen, setScreen];
};
