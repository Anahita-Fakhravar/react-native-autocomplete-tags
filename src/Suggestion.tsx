import React from 'react';
import { Text, StyleSheet, Pressable, PressableProps, TextStyle } from 'react-native';

export type SuggestionProps = PressableProps & {
  label: string;
  textStyle?: TextStyle;
};

const Suggestion = ({ label, textStyle, ...props }: SuggestionProps) => (
  <Pressable style={styles.container} {...props}>
    <Text style={[styles.label, textStyle]}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#0F0E16',
    // borderColor: '#262626',
    // borderWidth: 0.5,
  },
  label: {
    color: '#E6E1E5',
  },
});
export default Suggestion;
