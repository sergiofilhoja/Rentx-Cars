import React from 'react';

import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleToBack() {
    navigation.goBack();
  }

  return (
    <Container {...rest} onPress={handleToBack}>
      <MaterialIcons 
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
