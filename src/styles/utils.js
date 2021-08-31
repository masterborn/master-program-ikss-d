export const getColor =
  (colorName) =>
  ({ theme }) =>
    theme.color[colorName];

export const getFontFamily =
  (fontName) =>
  ({ theme }) =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (fontWeightName) =>
  ({ theme }) =>
    theme.fontWeight[fontWeightName];

export const getMedias =
  (mediasName) =>
  ({ theme }) =>
    theme.medias[mediasName];

export const getAnimation =
  (animationName) =>
  ({ theme }) =>
    theme.animations[animationName];
