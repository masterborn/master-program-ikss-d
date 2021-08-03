import { DefaultTheme } from 'styled-components';
import { color, fontFamily, fontWeight } from './theme';

type StyledComponentsTheme = { theme: DefaultTheme };
export const getColor = (colorName: keyof typeof color) => ({
  theme,
}: StyledComponentsTheme): string => theme.color[colorName];

export const getFontFamily = (fontName: keyof typeof fontFamily) => ({
  theme,
}: StyledComponentsTheme): string => theme.fontFamily[fontName];

export const getFontWeight = (fontWeightName: keyof typeof fontWeight) => ({
  theme,
}: StyledComponentsTheme): string | number => theme.fontWeight[fontWeightName];
