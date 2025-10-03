cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.ashera.core.coreManager",
      "file": "plugins/com.ashera.core/core/browser/www/coreManager.js",
      "pluginId": "com.ashera.core",
      "clobbers": [
        "coreManager"
      ]
    },
    {
      "id": "com.ashera.core.coreAddRes",
      "file": "plugins/com.ashera.core/core/browser/www/js/add_res.js",
      "pluginId": "com.ashera.core",
      "runs": true
    },
    {
      "id": "com.ashera.core.layoutAddRes",
      "file": "plugins/com.ashera.core/layout/browser/www/js/add_res.js",
      "pluginId": "com.ashera.core",
      "runs": true
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_browser",
      "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    }
  ];
  module.exports.metadata = {
    "com.ashera.core": "1.0",
    "cordova-plugin-dialogs-ashera": "1.0",
    "cordova-plugin-dialogs": "2.0.2"
  };
});