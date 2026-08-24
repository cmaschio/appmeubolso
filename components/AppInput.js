import { Text, TextInput, View } from 'react-native';

export default function AppInput(){
    return(
        <View>
            {label && <Text>{label}</Text>}
            <TextInput/>
            {error && <Text>{error}</Text>}
        </View>
    );
}