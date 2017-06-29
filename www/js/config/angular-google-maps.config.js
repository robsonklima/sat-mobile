app.config(function(uiGmapGoogleMapApiProvider, config) {
    uiGmapGoogleMapApiProvider.configure({
        key: config.googleKey,
        v: '3.28',
        libraries: 'weather,geometry,visualization'
    });
})