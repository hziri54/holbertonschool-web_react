/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\nclass Director {\n    workFromHome() {\n        return \"Baptiste Rousseau travaille à distance\";\n    }\n    getCoffeeBreak() {\n        return \"Baptiste prend une pause café\";\n    }\n    workDirectorTasks() {\n        return \"Baptiste s'occupe des tâches de direction\";\n    }\n}\nclass Teacher {\n    workFromHome() {\n        return \"Maxence Potier ne peut pas télétravailler\";\n    }\n    getCoffeeBreak() {\n        return \"Maxence ne peut pas prendre de pause\";\n    }\n    workTeacherTasks() {\n        return \"Maxence donne ses cours\";\n    }\n}\nfunction createEmployee(salary) {\n    if (typeof salary === \"number\" && salary < 500) {\n        return new Teacher();\n    }\n    return new Director();\n}\n// Tests\nconsole.log(createEmployee(200));\nconsole.log(createEmployee(1000));\nconsole.log(createEmployee(\"$500\"));\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;
