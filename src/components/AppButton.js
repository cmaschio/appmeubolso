import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

export default function AppButton({
  title,
  tittle,
  onPress,
  disabled = false,
  loading = false,
}) {
  const label = title ?? tittle;

  return (
    <TouchableOpacity
      style={[styles.button, (disabled || loading) && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.title}>{label}</Text>}
    </TouchableOpacity>
  );
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
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
})
