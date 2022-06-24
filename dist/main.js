/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_960_720.png\");\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  background: rgba(0, 0, 0, 0.911);\r\n  box-shadow: 3px 3px 3px rgba(99, 96, 96, 0.719);\r\n  z-index: 1;\r\n}\r\n\r\nheader a.logo {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  background: rgba(255, 0, 0, 0.5);\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-radius: 50px 0 50px 0;\r\n}\r\n\r\nheader nav {\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul li {\r\n  width: 40%;\r\n  background: rgb(48, 46, 46);\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul li:hover,\r\nheader nav ul li:focus {\r\n  background: rgb(90, 87, 87);\r\n}\r\n\r\nheader nav ul li a {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nheader nav ul li:hover > a {\r\n  color: rgba(238, 119, 119, 0.822);\r\n  font-weight: 500;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.719);\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .main-card {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.432);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .main-card img {\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  /* display: none; */\r\n}\r\n\r\nmain section.container .main-card .list-movies {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .main-card .list-movies h2 {\r\n  font-size: 20px;\r\n  color: rgb(235, 143, 143);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i:hover,\r\nmain section.container .main-card .list-movies div button i:focus {\r\n  color: rgba(243, 78, 78, 0.973);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .main-card .card-text {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .main-card .card-text p {\r\n  color: #fff;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .main-card .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\nmain section.container .main-card .comment-btn:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\n/* Comment popup */\r\n\r\nsection.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(1, 1, 26, 0.7);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.comment-popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: rgba(0, 0, 0, 0.466);\r\n  border: 2px solid rgba(25, 238, 25, 0.849);\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: rgba(233, 97, 97, 0.39);\r\n  border: 2px solid #fff;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn:hover,\r\nsection.comment-popup .comment-modal .close-comment-bn:focus {\r\n  background-color: rgba(255, 0, 0, 0.932);\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details h3 {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.493);\r\n  padding: 20px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span strong {\r\n  color: green;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: rgb(20, 11, 11);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  background-color: rgba(124, 104, 104, 0.363);\r\n  color: #fff;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: rgba(172, 134, 134, 0.938);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n/* Desktop media query */\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav {\r\n    width: auto;\r\n  }\r\n\r\n  header nav ul {\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    gap: 20px;\r\n  }\r\n\r\n  header nav ul li {\r\n    width: auto;\r\n    background: none;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n  }\r\n\r\n  header nav ul li:hover,\r\n  header nav ul li:focus {\r\n    background: rgb(90, 87, 87);\r\n  }\r\n\r\n  header nav ul li a {\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  main section.container {\r\n    margin: 120px auto;\r\n  }\r\n\r\n  section.comment-popup .comment-modal {\r\n    width: 60%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn {\r\n    width: 40px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn i {\r\n    font-size: 30px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details img {\r\n    width: 80%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details .more-info {\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: auto;\r\n    text-align: left;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_960_720.png\");\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  background: rgba(0, 0, 0, 0.911);\r\n  box-shadow: 3px 3px 3px rgba(99, 96, 96, 0.719);\r\n  z-index: 1;\r\n}\r\n\r\nheader a.logo {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  background: rgba(255, 0, 0, 0.5);\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-radius: 50px 0 50px 0;\r\n}\r\n\r\nheader nav {\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul li {\r\n  width: 40%;\r\n  background: rgb(48, 46, 46);\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul li:hover,\r\nheader nav ul li:focus {\r\n  background: rgb(90, 87, 87);\r\n}\r\n\r\nheader nav ul li a {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nheader nav ul li:hover > a {\r\n  color: rgba(238, 119, 119, 0.822);\r\n  font-weight: 500;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.719);\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .main-card {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.432);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .main-card img {\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  /* display: none; */\r\n}\r\n\r\nmain section.container .main-card .list-movies {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .main-card .list-movies h2 {\r\n  font-size: 20px;\r\n  color: rgb(235, 143, 143);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i:hover,\r\nmain section.container .main-card .list-movies div button i:focus {\r\n  color: rgba(243, 78, 78, 0.973);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .main-card .card-text {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .main-card .card-text p {\r\n  color: #fff;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .main-card .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\nmain section.container .main-card .comment-btn:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\n/* Comment popup */\r\n\r\nsection.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(1, 1, 26, 0.7);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.comment-popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: rgba(0, 0, 0, 0.466);\r\n  border: 2px solid rgba(25, 238, 25, 0.849);\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: rgba(233, 97, 97, 0.39);\r\n  border: 2px solid #fff;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn:hover,\r\nsection.comment-popup .comment-modal .close-comment-bn:focus {\r\n  background-color: rgba(255, 0, 0, 0.932);\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details h3 {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.493);\r\n  padding: 20px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span strong {\r\n  color: green;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: rgb(20, 11, 11);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  background-color: rgba(124, 104, 104, 0.363);\r\n  color: #fff;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: rgba(172, 134, 134, 0.938);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n/* Desktop media query */\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav {\r\n    width: auto;\r\n  }\r\n\r\n  header nav ul {\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    gap: 20px;\r\n  }\r\n\r\n  header nav ul li {\r\n    width: auto;\r\n    background: none;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n  }\r\n\r\n  header nav ul li:hover,\r\n  header nav ul li:focus {\r\n    background: rgb(90, 87, 87);\r\n  }\r\n\r\n  header nav ul li a {\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  main section.container {\r\n    margin: 120px auto;\r\n  }\r\n\r\n  section.comment-popup .comment-modal {\r\n    width: 60%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn {\r\n    width: 40px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn i {\r\n    font-size: 30px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details img {\r\n    width: 80%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details .more-info {\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: auto;\r\n    text-align: left;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/fetchMovieLikes.js":
/*!****************************************!*\
  !*** ./src/modules/fetchMovieLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const fetchMovieLikes = async () => {
  let likedItems = [];
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes',
  )
    .then((response) => response.json())
    .then((res) => {
      likedItems = res;
      return likedItems;
    });
  return likedItems;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMovieLikes);


/***/ }),

/***/ "./src/modules/likeFeature.js":
/*!************************************!*\
  !*** ./src/modules/likeFeature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderMovies.js */ "./src/modules/renderMovies.js");
/* harmony import */ var _likesApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesApi.js */ "./src/modules/likesApi.js");
/* eslint-disable linebreak-style */



const likeMovie = async () => {
  const allMovies = await (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const likesBtn = document.querySelectorAll('.like');
  const spans = document.querySelectorAll('#count-like');
  likesBtn.forEach((a, i) => {
    let h = JSON.parse(spans[i].innerHTML);

    a.addEventListener('click', () => {
      (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allMovies[i].name);
      h += 1;
      spans[i].innerHTML = h;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeMovie);


/***/ }),

/***/ "./src/modules/likesApi.js":
/*!*********************************!*\
  !*** ./src/modules/likesApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const postLike = (movies) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: movies,
      }),
    },
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);


/***/ }),

/***/ "./src/modules/pageBody.js":
/*!*********************************!*\
  !*** ./src/modules/pageBody.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderMovies.js */ "./src/modules/renderMovies.js");
/* harmony import */ var _fetchMovieLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchMovieLikes.js */ "./src/modules/fetchMovieLikes.js");



const commentModal = document.getElementById('comment-popup');
let count = 0;
const counter = document.getElementById('count');
const moviesCards = document.getElementById('container');
let currentValue = 0;

const appId = 'jQcwh1wRBsAT8XgABb4X';
const invUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const fetchComments = async (itemId) => {
  try {
    const comments = await fetch(`${invUrl}?item_id=${itemId}`);
    const data = await comments.json();
    const commentHead = document.querySelector('.comm-header');
    const commentList = document.querySelector('.comment-list');
    if (data.length > 0) {
      commentHead.innerHTML = `Comments(${data.length})`;
      commentList.innerHTML = '';
      data.forEach((comm) => {
        const commentItem = `        
        <p>${comm.creation_date} ${comm.username}: ${comm.comment}</p>
      `;
        commentList.innerHTML += commentItem;
      });
    } else {
      commentHead.innerHTML = 'Comments(0)';
      const noComment = `
      <p>No comment on this post</p>
      `;
      commentList.innerHTML = noComment;
    }
  } catch (err) {
    throw new Error('Request error: ', err);
  }
};

const postComment = async (itemId) => {
  const username = document.querySelector('.username');
  const comment = document.querySelector('.usermassage');

  if (username.value !== '' || comment.value !== '') {
    try {
      const response = await fetch(invUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          item_id: itemId,
          username: username.value,
          comment: comment.value,
        }),
      });
      const data = response.text();
      if (response.ok) {
        username.value = '';
        comment.value = '';
        fetchComments(itemId);
        return data;
      }
    } catch (err) {
      throw new Error('Request error: ', err);
    }
    return true;
  }
  return false;
};

const closePopupModal = () => {
  const closeIcon = document.querySelector('#close');
  closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    commentModal.style.display = 'none';
  });
};

const showCommentModal = async () => {
  const arr = await (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((commentBtn) => {
    const btnId = commentBtn.getAttribute('id');
    const movieDetails = arr[btnId];
    commentBtn.addEventListener('click', () => {
      fetchComments(btnId);
      const modal = `          
      <div class="comment-modal">
      <button type="button" id="close" class="close-comment-bn">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card-details">
        <img src="${movieDetails.image.original}" alt="Card original image" />
        <h3>${movieDetails.name}</h3>
        <ul class="more-info">
          <li>
            <span><strong> Language </strong>: ${movieDetails.language}</span>
            <span><strong> Genre </strong>: ${movieDetails.genres}</span>
          </li>
          <li>
            <span><strong> Runtime </strong>: ${movieDetails.runtime} minutes</span>
            <span><strong> premiered </strong>: ${movieDetails.premiered}</span>
          </li>
        </ul>
        <p class="summary">${movieDetails.summary}</p>
        <div class="card-comment">
          <h3 class="comm-header"></h3>
          <div class="comment-area">
            <div class="comment-list">
            </div>
            <form autocomplete="off" id="comment-form">
              <input type="text" class="username" name="name" id="name" placeholder="Your name"/>
              <textarea name="message" class="usermassage" id="" cols="30" rows="5" placeholder="Your Insight" ></textarea>
              <button class="new-comment" id="${btnId}" type="button">Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      `;

      commentModal.innerHTML = modal;
      commentModal.style.display = 'block';
      closePopupModal();

      const cmntBtn = document.querySelector('.new-comment');
      cmntBtn.addEventListener('click', () => {
        postComment(btnId);
      });
    });
  });
};

// Render all Movies card
const renderMovies = async () => {
  const arr = await (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  arr.slice(0, 10).forEach((movie) => {
    (0,_fetchMovieLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then((res) => {
      currentValue = res;
      let assignLike = 0;

      const like = currentValue.filter(
        (element) => element.item_id === movie.name,
      );
      if (like.length === 0) {
        assignLike = 0;
      } else {
        assignLike = like[0].likes;
      }
      moviesCards.innerHTML += `
        <div class="main-card" id="${arr.indexOf(movie)}">
          <img src="${movie.image.medium}" alt="${movie.name}" />
          <div class="list-movies">
            <h2 class="title">${`${movie.name.substring(0, 15)}`}</h2>
            <div>
              <button type="button" class="like"><i class="fa-solid fa-thumbs-up"></i><span id="count-like">${assignLike}</span></button>
            </div>
          </div>
          <div class="card-text">        
            <p>${`${movie.summary.substring(0, 80)} ...`}</p>
          </div>
            <button type="button" class="comment-btn" id="${arr.indexOf(
    movie,
  )}">Read more & comments</button>
        </div>`;
      showCommentModal();
    });

    count += 1;
  });

  counter.innerText = `(${count * 2})`;
  counter.style.color = 'red';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);


/***/ }),

/***/ "./src/modules/renderMovies.js":
/*!*************************************!*\
  !*** ./src/modules/renderMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const fetchFromApi = async () => {
  let moviesArray = [];
  await fetch('https://api.tvmaze.com/shows?page=1')
    .then((response) => response.json())
    .then((response) => {
      moviesArray = response;
    });
  return moviesArray;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchFromApi);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_pageBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageBody.js */ "./src/modules/pageBody.js");
/* harmony import */ var _modules_likeFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likeFeature.js */ "./src/modules/likeFeature.js");
/* eslint-disable quotes */




(0,_modules_pageBody_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const body = document.querySelector("body");

body.addEventListener("click", () => {
  (0,_modules_likeFeature_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksa0JBQWtCO0FBQ3pJO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLHVCQUF1Qiw0QkFBNEIsS0FBSyxjQUFjLHlCQUF5QiwwQ0FBMEMsNEdBQTRHLEtBQUssZ0JBQWdCLHNCQUFzQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLGdCQUFnQixvQkFBb0IsdUNBQXVDLHNEQUFzRCxpQkFBaUIsS0FBSyx1QkFBdUIseUJBQXlCLHNCQUFzQix1QkFBdUIsdUNBQXVDLGtCQUFrQixvQkFBb0IsbUNBQW1DLEtBQUssb0JBQW9CLGtCQUFrQixLQUFLLHVCQUF1QixvQkFBb0Isb0NBQW9DLDBCQUEwQixtQkFBbUIsS0FBSywwQkFBMEIsaUJBQWlCLGtDQUFrQyx5QkFBeUIsMEJBQTBCLG1CQUFtQixzQkFBc0IsS0FBSywyREFBMkQsa0NBQWtDLEtBQUssNEJBQTRCLHNCQUFzQix1QkFBdUIsa0JBQWtCLEtBQUssb0NBQW9DLHdDQUF3Qyx1QkFBdUIsS0FBSyxjQUFjLG9CQUFvQix1Q0FBdUMsS0FBSyxnQ0FBZ0Msb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHlCQUF5Qix1QkFBdUIsb0JBQW9CLEtBQUssMkNBQTJDLG9CQUFvQixtQkFBbUIsbURBQW1ELHlCQUF5QixvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsS0FBSywrQ0FBK0Msa0JBQWtCLGtCQUFrQiw0QkFBNEIsT0FBTyx3REFBd0Qsb0JBQW9CLHFDQUFxQywwQkFBMEIsa0JBQWtCLG9CQUFvQixrQkFBa0IsS0FBSywyREFBMkQsc0JBQXNCLGdDQUFnQyxLQUFLLG1FQUFtRSxvQkFBb0IscUNBQXFDLDBCQUEwQixrQkFBa0IsZ0JBQWdCLHVCQUF1QixtQkFBbUIsa0JBQWtCLEtBQUssa0VBQWtFLHNCQUFzQixrQkFBa0IsS0FBSyxxRUFBcUUsc0JBQXNCLEtBQUssaUpBQWlKLHNDQUFzQyxLQUFLLHdFQUF3RSxzQkFBc0IsdUJBQXVCLEtBQUssc0RBQXNELHFCQUFxQixvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsS0FBSyw4REFBOEQsa0JBQWtCLHNCQUFzQix1QkFBdUIsd0JBQXdCLHNCQUFzQixLQUFLLHdEQUF3RCxrQkFBa0IsdUJBQXVCLHNCQUFzQix3QkFBd0IsS0FBSyx3REFBd0QseUJBQXlCLG1CQUFtQixrQkFBa0Isd0JBQXdCLHNCQUFzQiwyQ0FBMkMsc0NBQXNDLDhCQUE4Qix1QkFBdUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsS0FBSyw4REFBOEQsd0JBQXdCLGtCQUFrQixLQUFLLDBEQUEwRCxvQkFBb0Isc0JBQXNCLDRDQUE0QyxzQ0FBc0MsbUNBQW1DLGtDQUFrQyxhQUFhLGdCQUFnQixjQUFjLGVBQWUsaUJBQWlCLEtBQUssOENBQThDLHlCQUF5QixnREFBZ0Qsb0JBQW9CLDZCQUE2QixxQ0FBcUMsdUNBQXVDLGlEQUFpRCxpQkFBaUIsbUJBQW1CLG9CQUFvQixlQUFlLGdCQUFnQixLQUFLLGdFQUFnRSx5QkFBeUIsa0JBQWtCLGdCQUFnQixrQkFBa0IsZ0RBQWdELDZCQUE2QixzQkFBc0IsMkJBQTJCLEtBQUssdUlBQXVJLCtDQUErQyxLQUFLLDREQUE0RCx1QkFBdUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQix1QkFBdUIseUJBQXlCLEtBQUssZ0VBQWdFLGtCQUFrQixvQkFBb0IsS0FBSywrREFBK0Qsa0JBQWtCLGtCQUFrQix5QkFBeUIsc0JBQXNCLHdCQUF3QixLQUFLLHVFQUF1RSxvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsZ0JBQWdCLG1CQUFtQix5QkFBeUIsMERBQTBELG9CQUFvQixLQUFLLDBFQUEwRSxvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsZ0JBQWdCLHNCQUFzQixLQUFLLCtFQUErRSxrQkFBa0Isa0JBQWtCLEtBQUssc0ZBQXNGLG1CQUFtQixLQUFLLDBFQUEwRSxvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsc0JBQXNCLGtCQUFrQix1QkFBdUIsS0FBSyw2RUFBNkUsc0JBQXNCLEtBQUssd0ZBQXdGLG9CQUFvQiw2QkFBNkIscUNBQXFDLGdDQUFnQywwQkFBMEIsa0JBQWtCLG9CQUFvQixrQkFBa0IsZ0JBQWdCLEtBQUssZ0ZBQWdGLG9DQUFvQyxrQkFBa0IseUJBQXlCLEtBQUssa0ZBQWtGLHNCQUFzQiwwQkFBMEIsb0JBQW9CLHdDQUF3QyxLQUFLLGtHQUFrRyw4QkFBOEIsS0FBSyx1RUFBdUUsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixtQkFBbUIsS0FBSyx3SkFBd0osa0JBQWtCLHdCQUF3QixzQkFBc0IsOEJBQThCLDBCQUEwQixtREFBbUQsa0JBQWtCLEtBQUssd0hBQXdILHdDQUF3QyxLQUFLLDhFQUE4RSxrQkFBa0Isd0JBQXdCLHNCQUFzQiwyQ0FBMkMsc0NBQXNDLDhCQUE4Qix1QkFBdUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsS0FBSyxvRkFBb0Ysd0JBQXdCLGtCQUFrQixLQUFLLGdCQUFnQiwwQkFBMEIseUJBQXlCLHNCQUFzQixrQkFBa0IsS0FBSyxnRkFBZ0YsY0FBYyxzQkFBc0IsNEJBQTRCLHNDQUFzQyw0QkFBNEIsT0FBTyxzQkFBc0Isb0JBQW9CLE9BQU8seUJBQXlCLHVDQUF1QyxzQkFBc0Isa0JBQWtCLE9BQU8sNEJBQTRCLG9CQUFvQix5QkFBeUIsMkJBQTJCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLE9BQU8sK0RBQStELG9DQUFvQyxPQUFPLDhCQUE4Qix3QkFBd0IseUJBQXlCLE9BQU8sa0NBQWtDLDJCQUEyQixPQUFPLGdEQUFnRCxtQkFBbUIsT0FBTyxrRUFBa0Usb0JBQW9CLE9BQU8sb0VBQW9FLHdCQUF3QixPQUFPLGtFQUFrRSxtQkFBbUIsT0FBTyx5RUFBeUUsNEJBQTRCLGtCQUFrQixvQkFBb0IseUJBQXlCLE9BQU8sS0FBSyxXQUFXLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUss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RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUN5QjtBQUN3QjtBQUNBO0FBQ2pEO0FBQ0EsZ0VBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1FQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvbW9kdWxlcy9mZXRjaE1vdmllTGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvbW9kdWxlcy9saWtlRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9tb2R1bGVzL2xpa2VzQXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL21vZHVsZXMvcGFnZUJvZHkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvbW9kdWxlcy9yZW5kZXJNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzIzLzE3LzMzL2N1cnRhaW4tMTI3NTIwMF85NjBfNzIwLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTExKTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoOTksIDk2LCA5NiwgMC43MTkpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEubG9nbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgNTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0OCwgNDYsIDQ2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIsXFxyXFxuaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoOTAsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIgPiBhIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIzOCwgMTE5LCAxMTksIDAuODIyKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDE4MHB4IGF1dG87XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgcm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcblxcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMjM1LCAxNDMsIDE0Myk7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyBkaXYgYnV0dG9uIGkge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmdiYSgyNDMsIDc4LCA3OCwgMC45NzMpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNhcmQtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jYXJkLXRleHQgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTAwLCAzOCwgMC41NDgpO1xcclxcbiAgY29sb3I6IHJnYmEoMjQzLCA3OCwgNzgsIDAuOTczKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50IHBvcHVwICovXFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDI2LCAwLjcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNSwgMjM4LCAyNSwgMC44NDkpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgOTcsIDk3LCAwLjM5KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuOmhvdmVyLFxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45MzIpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBoMyB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OTMpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHNwYW4gc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTEsIDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNCwgMTA0LCAxMDQsIDAuMzYzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE3MiwgMTM0LCAxMzQsIDAuOTM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzgsIDEwMCwgMzgsIDAuNTQ4KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0MywgNzgsIDc4LCAwLjk3Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgbWVkaWEgcXVlcnkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpOmhvdmVyLFxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgODcsIDg3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gc2VjdGlvbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDEyMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxtR0FBbUc7QUFDckc7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywrQ0FBK0M7RUFDL0MsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVB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LFdBQVc7QUFDYjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzIzLzE3LzMzL2N1cnRhaW4tMTI3NTIwMF85NjBfNzIwLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTExKTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoOTksIDk2LCA5NiwgMC43MTkpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEubG9nbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgNTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0OCwgNDYsIDQ2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIsXFxyXFxuaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoOTAsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIgPiBhIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIzOCwgMTE5LCAxMTksIDAuODIyKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDE4MHB4IGF1dG87XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgcm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcblxcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMjM1LCAxNDMsIDE0Myk7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyBkaXYgYnV0dG9uIGkge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmdiYSgyNDMsIDc4LCA3OCwgMC45NzMpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNhcmQtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jYXJkLXRleHQgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTAwLCAzOCwgMC41NDgpO1xcclxcbiAgY29sb3I6IHJnYmEoMjQzLCA3OCwgNzgsIDAuOTczKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50IHBvcHVwICovXFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDI2LCAwLjcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNSwgMjM4LCAyNSwgMC44NDkpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgOTcsIDk3LCAwLjM5KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuOmhvdmVyLFxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45MzIpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBoMyB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OTMpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHNwYW4gc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTEsIDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNCwgMTA0LCAxMDQsIDAuMzYzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE3MiwgMTM0LCAxMzQsIDAuOTM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzgsIDEwMCwgMzgsIDAuNTQ4KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0MywgNzgsIDc4LCAwLjk3Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgbWVkaWEgcXVlcnkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpOmhvdmVyLFxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgODcsIDg3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gc2VjdGlvbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDEyMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuY29uc3QgZmV0Y2hNb3ZpZUxpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCBsaWtlZEl0ZW1zID0gW107XHJcbiAgYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYmozM09FUVgzNFJQd29HZUo4ZUovbGlrZXMnLFxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBsaWtlZEl0ZW1zID0gcmVzO1xyXG4gICAgICByZXR1cm4gbGlrZWRJdGVtcztcclxuICAgIH0pO1xyXG4gIHJldHVybiBsaWtlZEl0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hNb3ZpZUxpa2VzO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IGZldGNoRnJvbUFwaSBmcm9tICcuL3JlbmRlck1vdmllcy5qcyc7XHJcbmltcG9ydCBwb3N0TGlrZSBmcm9tICcuL2xpa2VzQXBpLmpzJztcclxuXHJcbmNvbnN0IGxpa2VNb3ZpZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhbGxNb3ZpZXMgPSBhd2FpdCBmZXRjaEZyb21BcGkoKTtcclxuXHJcbiAgY29uc3QgbGlrZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xyXG4gIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvdW50LWxpa2UnKTtcclxuICBsaWtlc0J0bi5mb3JFYWNoKChhLCBpKSA9PiB7XHJcbiAgICBsZXQgaCA9IEpTT04ucGFyc2Uoc3BhbnNbaV0uaW5uZXJIVE1MKTtcclxuXHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBwb3N0TGlrZShhbGxNb3ZpZXNbaV0ubmFtZSk7XHJcbiAgICAgIGggKz0gMTtcclxuICAgICAgc3BhbnNbaV0uaW5uZXJIVE1MID0gaDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlrZU1vdmllO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuY29uc3QgcG9zdExpa2UgPSAobW92aWVzKSA9PiB7XHJcbiAgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYmozM09FUVgzNFJQd29HZUo4ZUovbGlrZXMnLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBtb3ZpZXMsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdExpa2U7XHJcbiIsImltcG9ydCBmZXRjaEZyb21BcGkgZnJvbSAnLi9yZW5kZXJNb3ZpZXMuanMnO1xyXG5pbXBvcnQgZmV0Y2hNb3ZpZUxpa2VzIGZyb20gJy4vZmV0Y2hNb3ZpZUxpa2VzLmpzJztcclxuXHJcbmNvbnN0IGNvbW1lbnRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXBvcHVwJyk7XHJcbmxldCBjb3VudCA9IDA7XHJcbmNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuY29uc3QgbW92aWVzQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcbmxldCBjdXJyZW50VmFsdWUgPSAwO1xyXG5cclxuY29uc3QgYXBwSWQgPSAnalFjd2gxd1JCc0FUOFhnQUJiNFgnO1xyXG5jb25zdCBpbnZVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vY29tbWVudHNgO1xyXG5cclxuY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaChgJHtpbnZVcmx9P2l0ZW1faWQ9JHtpdGVtSWR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29tbWVudHMuanNvbigpO1xyXG4gICAgY29uc3QgY29tbWVudEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbS1oZWFkZXInKTtcclxuICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb21tZW50SGVhZC5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtkYXRhLmxlbmd0aH0pYDtcclxuICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gYCAgICAgICAgXHJcbiAgICAgICAgPHA+JHtjb21tLmNyZWF0aW9uX2RhdGV9ICR7Y29tbS51c2VybmFtZX06ICR7Y29tbS5jb21tZW50fTwvcD5cclxuICAgICAgYDtcclxuICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gY29tbWVudEl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tbWVudEhlYWQuaW5uZXJIVE1MID0gJ0NvbW1lbnRzKDApJztcclxuICAgICAgY29uc3Qgbm9Db21tZW50ID0gYFxyXG4gICAgICA8cD5ObyBjb21tZW50IG9uIHRoaXMgcG9zdDwvcD5cclxuICAgICAgYDtcclxuICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gbm9Db21tZW50O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGVycm9yOiAnLCBlcnIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lJyk7XHJcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybWFzc2FnZScpO1xyXG5cclxuICBpZiAodXNlcm5hbWUudmFsdWUgIT09ICcnIHx8IGNvbW1lbnQudmFsdWUgIT09ICcnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGludlVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICB1c2VybmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvbW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICBmZXRjaENvbW1lbnRzKGl0ZW1JZCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZXJyb3I6ICcsIGVycik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VQb3B1cE1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xyXG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb21tZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNob3dDb21tZW50TW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYXJyID0gYXdhaXQgZmV0Y2hGcm9tQXBpKCk7XHJcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcclxuICBjb21tZW50QnRucy5mb3JFYWNoKChjb21tZW50QnRuKSA9PiB7XHJcbiAgICBjb25zdCBidG5JZCA9IGNvbW1lbnRCdG4uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgY29uc3QgbW92aWVEZXRhaWxzID0gYXJyW2J0bklkXTtcclxuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGZldGNoQ29tbWVudHMoYnRuSWQpO1xyXG4gICAgICBjb25zdCBtb2RhbCA9IGAgICAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LW1vZGFsXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VcIiBjbGFzcz1cImNsb3NlLWNvbW1lbnQtYm5cIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGV0YWlsc1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZURldGFpbHMuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiQ2FyZCBvcmlnaW5hbCBpbWFnZVwiIC8+XHJcbiAgICAgICAgPGgzPiR7bW92aWVEZXRhaWxzLm5hbWV9PC9oMz5cclxuICAgICAgICA8dWwgY2xhc3M9XCJtb3JlLWluZm9cIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz4gTGFuZ3VhZ2UgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5sYW5ndWFnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IEdlbnJlIDwvc3Ryb25nPjogJHttb3ZpZURldGFpbHMuZ2VucmVzfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IFJ1bnRpbWUgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5ydW50aW1lfSBtaW51dGVzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48c3Ryb25nPiBwcmVtaWVyZWQgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5wcmVtaWVyZWR9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPiR7bW92aWVEZXRhaWxzLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbW1lbnRcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW0taGVhZGVyXCI+PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJjb21tZW50LWZvcm1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInVzZXJuYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiLz5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBjbGFzcz1cInVzZXJtYXNzYWdlXCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiWW91ciBJbnNpZ2h0XCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1jb21tZW50XCIgaWQ9XCIke2J0bklkfVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgY29tbWVudE1vZGFsLmlubmVySFRNTCA9IG1vZGFsO1xyXG4gICAgICBjb21tZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGNsb3NlUG9wdXBNb2RhbCgpO1xyXG5cclxuICAgICAgY29uc3QgY21udEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY29tbWVudCcpO1xyXG4gICAgICBjbW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvc3RDb21tZW50KGJ0bklkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIFJlbmRlciBhbGwgTW92aWVzIGNhcmRcclxuY29uc3QgcmVuZGVyTW92aWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFyciA9IGF3YWl0IGZldGNoRnJvbUFwaSgpO1xyXG4gIGFyci5zbGljZSgwLCAxMCkuZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIGZldGNoTW92aWVMaWtlcygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjdXJyZW50VmFsdWUgPSByZXM7XHJcbiAgICAgIGxldCBhc3NpZ25MaWtlID0gMDtcclxuXHJcbiAgICAgIGNvbnN0IGxpa2UgPSBjdXJyZW50VmFsdWUuZmlsdGVyKFxyXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lml0ZW1faWQgPT09IG1vdmllLm5hbWUsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChsaWtlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGFzc2lnbkxpa2UgPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFzc2lnbkxpa2UgPSBsaWtlWzBdLmxpa2VzO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmllc0NhcmRzLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY2FyZFwiIGlkPVwiJHthcnIuaW5kZXhPZihtb3ZpZSl9XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIiR7bW92aWUuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7bW92aWUubmFtZX1cIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbW92aWVzXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtgJHttb3ZpZS5uYW1lLnN1YnN0cmluZygwLCAxNSl9YH08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlrZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdGh1bWJzLXVwXCI+PC9pPjxzcGFuIGlkPVwiY291bnQtbGlrZVwiPiR7YXNzaWduTGlrZX08L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+ICAgICAgICBcclxuICAgICAgICAgICAgPHA+JHtgJHttb3ZpZS5zdW1tYXJ5LnN1YnN0cmluZygwLCA4MCl9IC4uLmB9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudC1idG5cIiBpZD1cIiR7YXJyLmluZGV4T2YoXHJcbiAgICBtb3ZpZSxcclxuICApfVwiPlJlYWQgbW9yZSAmIGNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgc2hvd0NvbW1lbnRNb2RhbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY291bnQgKz0gMTtcclxuICB9KTtcclxuXHJcbiAgY291bnRlci5pbm5lclRleHQgPSBgKCR7Y291bnQgKiAyfSlgO1xyXG4gIGNvdW50ZXIuc3R5bGUuY29sb3IgPSAncmVkJztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1vdmllcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmNvbnN0IGZldGNoRnJvbUFwaSA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgbW92aWVzQXJyYXkgPSBbXTtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTEnKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbW92aWVzQXJyYXkgPSByZXNwb25zZTtcclxuICAgIH0pO1xyXG4gIHJldHVybiBtb3ZpZXNBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoRnJvbUFwaTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXHJcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgcmVuZGVyTW92aWVzIGZyb20gXCIuL21vZHVsZXMvcGFnZUJvZHkuanNcIjtcclxuaW1wb3J0IGxpa2VNb3ZpZSBmcm9tIFwiLi9tb2R1bGVzL2xpa2VGZWF0dXJlLmpzXCI7XHJcblxyXG5yZW5kZXJNb3ZpZXMoKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGxpa2VNb3ZpZSgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9