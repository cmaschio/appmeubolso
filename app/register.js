import { useRouter } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../src/components/AppButton';
import AppInput from '../src/components/AppInput';

export default function Register() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.title}>Meu Bolso</Text>
          <Text style={styles.subtitle}>Crie sua conta para começar</Text>

          <AppInput
            label="Nome:"
            placeholder="Digite seu nome"
            autoCapitalize="words"
            autoComplete="name"
            textContentType="name"
          />
          <AppInput
            label="E-mail:"
            placeholder="Digite seu e-mail"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppInput
            label="Senha:"
            placeholder="Crie uma senha"
            autoCapitalize="none"
            autoComplete="new-password"
            secureTextEntry
            textContentType="newPassword"
          />
          <AppInput
            label="Confirmar senha:"
            placeholder="Digite sua senha novamente"
            autoCapitalize="none"
            autoComplete="new-password"
            secureTextEntry
            textContentType="newPassword"
          />

          <AppButton title="Criar conta" />

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.link}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#2f3640',
    textAlign: 'center',
  },
  subtitle: {
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  link: {
    color: '#008f72',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
  },
});
