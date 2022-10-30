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
      "id": "com.ashera.datetime.datetimeAddRes",
      "file": "plugins/com.ashera.datetime/browser/www/js/add_res.js",
      "pluginId": "com.ashera.datetime",
      "runs": true
    },
    {
      "id": "com.ashera.toolbar.toolbarAddRes",
      "file": "plugins/com.ashera.toolbar/browser/www/js/add_res.js",
      "pluginId": "com.ashera.toolbar",
      "runs": true
    },
    {
      "id": "com.filfatstudios.spinnerdialog.SpinnerDialog",
      "file": "plugins/com.filfatstudios.spinnerdialog/android_ios/www/SpinnerDialog.js",
      "pluginId": "com.filfatstudios.spinnerdialog",
      "clobbers": [
        "SpinnerDialog"
      ]
    }
  ];
  module.exports.metadata = {
    "com.ashera.core": "1.0",
    "com.ashera.capinsets": "1.0",
    "com.ashera.constraintlayout": "1.0",
    "com.ashera.cssborder": "1.0",
    "com.ashera.datetime": "1.0",
    "com.ashera.drawerlayout": "1.0",
    "com.ashera.gridlayout": "1.0",
    "com.ashera.recycleview": "1.0",
    "com.ashera.toolbar": "1.0",
    "com.ashera.iqkeyboardmanager.ios": "1.0",
    "com.ashera.shutterbug": "1.0",
    "com.ashera.glide": "1.0",
    "com.ashera.sdwebimage.ios": "1.0",
    "com.filfatstudios.spinnerdialog": "1.0.2"
  };
});