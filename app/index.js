import { useState } from 'react';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../src/components/AppButton';
import AppInput from '../src/components/AppInput';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios'?'padding':undefined}>
        <View>
            <Text style={styles.tittle}>Meu Bolso</Text>
            <Text style={styles.subtittle}>Controle suas finanças</Text>
            <AppInput label="E-mail:" placeholder="Digite seu e-mail" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail}/>
            <AppInput label="Senha:" placeholder="Digite sua senha" secureTextEntry value={password} onChangeText={setPassword}/>
            <AppButton tittle="Entrar" loading={loading}/>
            <TouchableOpacity onPress={() => router.push('/register')}> <Text style={styles.link}>Criar nova conta</Text> </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f8f9fa'
    },
    tittle: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign: 'center'
    },
    subtittle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32
    },
    link: {
        color: '#008f72',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700'
    }
})
