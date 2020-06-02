/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);

//import { ipcMain } from "electron";

class MainWindow {
  constructor() {
    this.window = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]({ width: 800, height: 600 });
    this.window.loadURL(`file://${__dirname}/../../index.html`);
    this.window.openDevTools();
    this.window.on("closed", () => {
      this.window = null;
    });
    // this.window.webContents.on("will-navigate", (e, url) => {
    //   e.preventDefault();
    //   shell.openExternal(url);
    // });
  }

  // requestText() {
  //   return new Promise((resolve) => {
  //     this.window.webContents.send("REQUEST_TEXT");
  //     ipcMain.once("REPLY_TEXT", (_e, text) => resolve(text));
  //   });
  // }
  //
  // sendText(text) {
  //   this.window.webContents.send("SEND_TEXT", text);
  // }
}

function createMainWindow() {
  return new MainWindow();
}

/* harmony default export */ __webpack_exports__["a"] = createMainWindow;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);


function setAppMenu(options) {
  const template = [{
    label: "File",
    submenu: [{ label: "Open", accelerator: "CmdOrCtrl+O", click: () => options.openFile() }, { label: "Save", accelerator: "CmdOrCtrl+S", click: () => options.saveFile() }, { label: "Save As...", click: () => options.saveAsNewFile() }, { label: "Export PDF", click: () => options.exportPDF() }]
  }, {
    label: "Edit",
    submenu: [{ label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" }, { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" }, { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" }, { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }]
  }, {
    label: "View",
    submenu: [{
      label: "Toggle DevTools",
      accelerator: "Alt+Command+I",
      click: () => __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"].getFocusedWindow().toggleDevTools()
    }]
  }];
  if (process.platform === "darwin") {
    template.unshift({
      label: "MarkdownEditor",
      submenu: [{ label: "Quit", accelerator: "CmdOrCtrl+Q", click: () => __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit() }]
    });
  }
  __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].setApplicationMenu(__WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].buildFromTemplate(template));
}
/* harmony default export */ __webpack_exports__["a"] = setAppMenu;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createMainWindow__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setAppMenu__ = __webpack_require__(2);



// import showSaveAsNewFileDialog from "./showSaveAsNewFileDialog";
// import createFileManager from "./createFileManager";
// import showOpenFileDialog from "./showOpenFileDialog";
// import createPDFWindow from "./createPDFWindow";
// import showExportPDFDialog from "./showExportPDFDialog";

let mainWindow = null;
//let fileManager = null;

function openFile() {
  console.log('openFile');
  // showOpenFileDialog()
  //   .then((filePath) => fileManager.readFile(filePath))
  //   .then((text) => mainWindow.sendText(text))
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

function saveFile() {
  console.log('saveFile');
  // if (!fileManager.filePath) {
  //   saveAsNewFile();
  // }
  // mainWindow.requestText()
  //   .then((text) => fileManager.overwriteFile(text))
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

function saveAsNewFile() {
  console.log('saveAsNewFile');
  // return Promise.all([ showSaveAsNewFileDialog(), mainWindow.requestText() ])
  //   .then(([filePath, text]) => fileManager.saveFile(filePath, text))
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

function exportPDF() {
  console.log('exportPDF');
  // Promise.all([ showExportPDFDialog(), mainWindow.requestText() ])
  //   .then(([filePath, text]) => {
  //     const pdfWindow = createPDFWindow(text);
  //     pdfWindow.on("RENDERED_CONTENTS", () => {
  //       pdfWindow.generatePDF()
  //         .then((pdf) => fileManager.writePdf(filePath, pdf))
  //         .then(() => pdfWindow.close())
  //         .catch((error) => {
  //           console.log(error);
  //           pdfWindow.close();
  //         });
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on("ready", () => {
  mainWindow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createMainWindow__["a" /* default */])();
  // fileManager = createFileManager();
  const options = { openFile, saveFile, saveAsNewFile, exportPDF };
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__setAppMenu__["a" /* default */])(options);
});

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on("window-all-closed", () => {
  mainWindow = null;
  if (process.platform !== "darwin") {
    __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit();
  }
});

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on("activate", (_e, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    mainWindow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createMainWindow__["a" /* default */])();
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map