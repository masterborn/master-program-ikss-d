export const fontFamily = {
  Mulish: 'Mulish, sans-serif;',
};

export const fontWeight = {
  extraBold: '900',
  bold: '800',
  buttonWeight: '700',
  regular: '400',
};

export const color = {
  ikksBlue: '#1889E9',

  white: '#ffffff',
  navy: '#1A2847',

  secondaryButtonBorderActive: '#3c4863',
  secondaryButtonBorderPressed: '#535e75',
  secondaryButtonBorderDisabled: '#babec8',

  blue_50: '#8CC4F4',
  blue_40: '#A3D0F6',
  blue_30: '#BADCF8',
  blue_20: '#D1E7FB',
  blue_10: '#E8F3FD',
  blue_05: '#F5FAFF',

  steel: '#61798B',
  steel_70: '#90A1AE',
  steel_60: '#A0AFB9',
  steel_50: '#B0BCC5',
  steel_40: '#C0C9D1',
  steel_30: '#D0D7DC',
  steel_20: '#DFE4E8',

  success: '#18D4A7',
  error: '#E01A4F',

  backgroundGradient: `linear-gradient(180deg,
    #F4FAFF 0%,
    rgba(255,255,255,0) 100%,
    #FFFFFF)`,
};

export const medias = {
  mobile: '375px',
};

const theme = {
  fontFamily,
  fontWeight,
  color,
  medias,
};

export default theme;
