app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50':   '2196F3',
    '100':  '2196F3',
    '200':  '2196F3',
    '300':  '2196F3',
    '400':  '2196F3',
    '500':  '2196F3',
    '600':  '2196F3',
    '700':  '2196F3',
    '800':  '2196F3',
    '900':  '2196F3',
    'A100': '2196F3',
    'A200': '2196F3',
    'A400': '2196F3',
    'A700': '2196F3',
    'contrastDefaultColor': 'light',
    // whether, by default, text (contrast) on this palette should be dark or light

    // hues which contrast should be 'dark' by default
    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  // Available palettes: red, pink, purple, deep-purple, indigo, blue, light-blue, 
  // teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, 
  // cyan, blue-grey, amazingPaletteName
  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName')
    .accentPalette('amazingPaletteName');
});