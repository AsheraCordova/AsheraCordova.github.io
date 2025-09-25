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
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreenProxy",
      "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
      "pluginId": "cordova-plugin-splashscreen",
      "runs": true
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
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
    },
    {
      "id": "com.ashera.chip.coreAddRes",
      "file": "plugins/com.ashera.chip/browser/www/js/add_res.js",
      "pluginId": "com.ashera.chip",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.Preparing",
      "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.browserFileProxy",
      "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-file.firefoxFileSystem",
      "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.idbFilesystem",
      "file": "plugins/cordova-plugin-file/www/browser/idb.filesystem.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file-transfer.FileTransferError",
      "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransferError"
      ]
    },
    {
      "id": "cordova-plugin-file-transfer.FileTransfer",
      "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransfer"
      ]
    },
    {
      "id": "cordova-plugin-file-transfer.BrowserFileTransfer",
      "file": "plugins/cordova-plugin-file-transfer/www/browser/FileTransfer.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransfer"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.NetworkInfoProxy",
      "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
      "pluginId": "cordova-plugin-network-information",
      "runs": true
    },
    {
      "id": "cordova-plugin-zip.Zip",
      "file": "plugins/cordova-plugin-zip/zip.js",
      "pluginId": "cordova-plugin-zip",
      "clobbers": [
        "zip"
      ]
    },
    {
      "id": "cordova-plugin-zip.ZipProxy",
      "file": "plugins/cordova-plugin-zip/src/browser/ZipProxy.js",
      "pluginId": "cordova-plugin-zip",
      "runs": true
    },
    {
      "id": "cordova-plugin-file-md5.md5chksum",
      "file": "plugins/cordova-plugin-file-md5/www/md5chksum.js",
      "pluginId": "cordova-plugin-file-md5",
      "clobbers": [
        "md5chksum"
      ]
    },
    {
      "id": "cordova-plugin-file-downloader.downloader",
      "file": "plugins/cordova-plugin-file-downloader/src/downloader.js",
      "pluginId": "cordova-plugin-file-downloader",
      "clobbers": [
        "downloader"
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
    "com.filfatstudios.spinnerdialog": "1.0.2",
    "com.ashera.custom": "1.0",
    "com.ashera.customwidgetextension": "1.0.0",
    "com.ashera.absolutelayout": "1.0",
    "cordova-plugin-splashscreen-ashera": "1.0",
    "cordova-plugin-splashscreen": "7.0.0-dev",
    "com.ashera.viewpager": "1.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-dialogs-ashera": "1.0",
    "com.ashera.navigationview": "1.0",
    "com.ashera.tablayout": "1.0",
    "com.ashera.cardview": "1.0",
    "com.ashera.chip": "1.0",
    "cordova-plugin-file": "8.1.4-dev",
    "cordova-plugin-file-transfer": "2.0.1-dev",
    "cordova-plugin-network-information": "3.0.1-dev",
    "cordova-plugin-zip": "3.2.0",
    "cordova-plugin-file-md5": "0.3.3",
    "cordova-plugin-file-downloader": "0.4.2"
  };
});