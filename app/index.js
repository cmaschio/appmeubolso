import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import AppButton from "../src/components/AppButton";
import AppInput from "../src/components/AppInput";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Plataform.OS === 'ios'?'padding':undefined}>
        <View>
            <Text>Meu Bolso</Text>
            <Text>Controle suas finanças</Text>
            <AppInput label="E-mail:" placeholder="Digite seu e-mail" autoCapitalize="none" keyboardType="email-address"/>
            <AppInput label="Senha:" placeholder="Digite sua senha" secureTextEntry/>
            <AppButton tittle="Entrar"/>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    
})