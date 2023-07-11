import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type Props = {
    name?: string;
}

const Component4: React.FC<Props> = (props) => {
    const [state, setState] = useState({
      name: props.name,
      count: 0,
    });
  
    // You can access the state variables like this:
    const { name, count } = state;
  
    const changeNameToGreet = (text: string) => {
      setState((prevState) => ({
        ...prevState,
        name: text,
      }));
    };

    return (
        <View>
            <Text>Hello {name}. Greetings from from React-Native.</Text>
            <View>
                <TextInput placeholder="Write a name here..." onChangeText={changeNameToGreet} autoFocus/>
            </View>
            <View>
                <Text>You clicked {count} times</Text>
                <Button title="Click Me" onPress={() => setState((prevState) => ({ ...prevState, count: prevState.count + 1 }))} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: '#fff',
        fontSize: 20,
        backgroundColor: 'blue',
        padding: 6,
        alignItems: 'center'
    }
});

Component4.defaultProps = {
    name: "Sally"
}


export default Component4;