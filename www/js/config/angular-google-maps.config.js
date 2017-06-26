app.config(function(constants, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: constants.googleKey,
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
})