import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import {counterReducer, createStore} from './src/redux';

let store = createStore(counterReducer, 0);

store.subscribe(() => {
    console.log(store.getState());
});

const IncrementAction = {
    type: 'INCREMENT',
    payload: undefined
};

const DecrementAction = {
    type: 'DECREMENT',
    payload: undefined
};

const NullAction = {
    type: 'NULL',
    payload: undefined
};

const PlusActionCreator = (plus) => {
    return {
        type: 'PLUS',
        payload: plus
    }
};

const MinusActionCreator = (minus) => {
    return {
        type: 'MINUS',
        payload: minus
    }
};

const CounterComponent = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title={'Increment'}
                onPress={() => {store.dispatch(IncrementAction)}}
            />
            <Button
                title={'Decrement'}
                onPress={() => {store.dispatch(DecrementAction)}}
            />
            <Button
                title={'Null'}
                onPress={() => {store.dispatch(NullAction)}}
            />
            <Button
                title={'Plus'}
                onPress={() => {store.dispatch(PlusActionCreator(5))}}
            />
            <Button
                title={'Minus'}
                onPress={() => {store.dispatch(MinusActionCreator(3))}}
            />
        </View>
    )
};


const App = () => {
    return (
        <CounterComponent/>
    )
};

export default App;
