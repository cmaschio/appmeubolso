import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors, spacing, radius } from "../constants/theme"

export default function AppButton(){
    return(
        <TouchableOpacity style={[styles.button, (disabled || loading) && styles.disabled]}
            onPress={onPress} disabled={disabled || loading}>

            {loading ? <ActivityIndicator color={#fff}/> :
            <Text style={styles.tittle}>{tittle}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius.md,
        padding: spacing.md,
        alignItems: 'center'
    },
    disabled: {
        opacity: 0.6
    },
    tittle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
})