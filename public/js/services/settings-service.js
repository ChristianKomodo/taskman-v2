taskmanApp.service('settingsService', function() {
    var settings = {
        circleSize : 150,
        circleColorA : 'forestgreen',
        circleColorB : 'royalblue'
    };

    var getSettings = function() {
        return settings;
    };

    var changeSettings = function(newSettings) {
        settings = newSettings;
    };

    return {
        getSettings : getSettings,
        changeSettings : changeSettings
    };
});
