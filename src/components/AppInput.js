import { Text, TextInput, View, StyleSheet } from 'react-native';
import {colors, radius, spacing} from '../constants/theme'

export default function AppInput({label, error, ...props}){
    return(
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={[styles.input, error && styles.errorInput]}
                placeholderTextColor={colors.muted} {...props}/>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.md,        
    },
    label: {
        color: colors.text,
        fontWeight: '600',
        marginBottom: 6
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.md,
        fontSize: 16
    },
    errorInput: {
        borderColor: colors.danger
    },
    error: {
        color: colors.danger,
        fontSize: 12,
        marginTop: 4
    }
});