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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_960_720.png\");\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  background: rgba(0, 0, 0, 0.911);\r\n  box-shadow: 3px 3px 3px rgba(99, 96, 96, 0.719);\r\n  z-index: 1;\r\n}\r\n\r\nheader a.logo {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  background: rgba(255, 0, 0, 0.5);\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-radius: 50px 0 50px 0;\r\n}\r\n\r\nheader nav {\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul li {\r\n  width: 40%;\r\n  background: rgb(48, 46, 46);\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul li:hover,\r\nheader nav ul li:focus {\r\n  background: rgb(90, 87, 87);\r\n}\r\n\r\nheader nav ul li a {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nheader nav ul li:hover > a {\r\n  color: rgba(238, 119, 119, 0.822);\r\n  font-weight: 500;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.719);\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .main-card {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.432);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .main-card img {\r\n\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  /* display: none; */;\r\n\r\n}\r\n\r\nmain section.container .main-card .list-movies {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .main-card .list-movies h2 {\r\n  font-size: 20px;\r\n  color: rgb(235, 143, 143);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i:hover,\r\nmain section.container .main-card .list-movies div button i:focus {\r\n  color: rgba(243, 78, 78, 0.973);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .main-card .card-text {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .main-card .card-text p {\r\n  color: #fff;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .main-card .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\nmain section.container .main-card .comment-btn:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\n/* COMMENT POPUP */\r\n\r\nsection.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(1, 1, 26, 0.7);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.comment-popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: rgba(0, 0, 0, 0.466);\r\n  border: 2px solid rgba(25, 238, 25, 0.849);\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: rgba(233, 97, 97, 0.39);\r\n  border: 2px solid #fff;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn:hover,\r\nsection.comment-popup .comment-modal .close-comment-bn:focus {\r\n  background-color: rgba(255, 0, 0, 0.932);\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details h3 {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.493);\r\n  padding: 20px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span strong {\r\n  color: green;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: rgb(20, 11, 11);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  background-color: rgba(124, 104, 104, 0.363);\r\n  color: #fff;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: rgba(172, 134, 134, 0.938);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n/* Desktop media query */\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav {\r\n    width: auto;\r\n  }\r\n\r\n  header nav ul {\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    gap: 20px;\r\n  }\r\n\r\n  header nav ul li {\r\n    width: auto;\r\n    background: none;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n  }\r\n\r\n  header nav ul li:hover,\r\n  header nav ul li:focus {\r\n    background: rgb(90, 87, 87);\r\n  }\r\n\r\n  header nav ul li a {\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  main section.container {\r\n    margin: 120px auto;\r\n  }\r\n\r\n  section.comment-popup .comment-modal {\r\n    width: 60%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn {\r\n    width: 40px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn i {\r\n    font-size: 30px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details img {\r\n    width: 80%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details .more-info {\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: auto;\r\n    text-align: left;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_960_720.png\");\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  background: rgba(0, 0, 0, 0.911);\r\n  box-shadow: 3px 3px 3px rgba(99, 96, 96, 0.719);\r\n  z-index: 1;\r\n}\r\n\r\nheader a.logo {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  background: rgba(255, 0, 0, 0.5);\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-radius: 50px 0 50px 0;\r\n}\r\n\r\nheader nav {\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul li {\r\n  width: 40%;\r\n  background: rgb(48, 46, 46);\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul li:hover,\r\nheader nav ul li:focus {\r\n  background: rgb(90, 87, 87);\r\n}\r\n\r\nheader nav ul li a {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nheader nav ul li:hover > a {\r\n  color: rgba(238, 119, 119, 0.822);\r\n  font-weight: 500;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.719);\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .main-card {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.432);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .main-card img {\r\n\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  /* display: none; */;\r\n\r\n}\r\n\r\nmain section.container .main-card .list-movies {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .main-card .list-movies h2 {\r\n  font-size: 20px;\r\n  color: rgb(235, 143, 143);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i:hover,\r\nmain section.container .main-card .list-movies div button i:focus {\r\n  color: rgba(243, 78, 78, 0.973);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .main-card .card-text {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .main-card .card-text p {\r\n  color: #fff;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .main-card .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\nmain section.container .main-card .comment-btn:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\n/* COMMENT POPUP */\r\n\r\nsection.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(1, 1, 26, 0.7);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.comment-popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: rgba(0, 0, 0, 0.466);\r\n  border: 2px solid rgba(25, 238, 25, 0.849);\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: rgba(233, 97, 97, 0.39);\r\n  border: 2px solid #fff;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn:hover,\r\nsection.comment-popup .comment-modal .close-comment-bn:focus {\r\n  background-color: rgba(255, 0, 0, 0.932);\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details h3 {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.493);\r\n  padding: 20px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span strong {\r\n  color: green;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: rgb(20, 11, 11);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  background-color: rgba(124, 104, 104, 0.363);\r\n  color: #fff;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: rgba(172, 134, 134, 0.938);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n/* Desktop media query */\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav {\r\n    width: auto;\r\n  }\r\n\r\n  header nav ul {\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    gap: 20px;\r\n  }\r\n\r\n  header nav ul li {\r\n    width: auto;\r\n    background: none;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n  }\r\n\r\n  header nav ul li:hover,\r\n  header nav ul li:focus {\r\n    background: rgb(90, 87, 87);\r\n  }\r\n\r\n  header nav ul li a {\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  main section.container {\r\n    margin: 120px auto;\r\n  }\r\n\r\n  section.comment-popup .comment-modal {\r\n    width: 60%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn {\r\n    width: 40px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn i {\r\n    font-size: 30px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details img {\r\n    width: 80%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details .more-info {\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: auto;\r\n    text-align: left;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* eslint-disable linebreak-style */
/* eslint-disable quotes */



/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */

(0,_modules_pageBody_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const body = document.querySelector("body");

body.addEventListener("click", () => {
  (0,_modules_likeFeature_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8s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QUFDQTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL21vZHVsZXMvZmV0Y2hNb3ZpZUxpa2VzLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL21vZHVsZXMvbGlrZUZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvbW9kdWxlcy9saWtlc0FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9tb2R1bGVzL3BhZ2VCb2R5LmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL21vZHVsZXMvcmVuZGVyTW92aWVzLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMy8yMy8xNy8zMy9jdXJ0YWluLTEyNzUyMDBfOTYwXzcyMC5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkxMSk7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDk5LCA5NiwgOTYsIDAuNzE5KTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhLmxvZ28ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCAwIDUwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNDgsIDQ2LCA0Nik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpOmhvdmVyLFxcclxcbmhlYWRlciBuYXYgdWwgbGk6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDkwLCA4NywgODcpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpOmhvdmVyID4gYSB7XFxyXFxuICBjb2xvcjogcmdiYSgyMzgsIDExOSwgMTE5LCAwLjgyMik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiAxODBweCBhdXRvO1xcclxcbiAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIHJvdy1nYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCB7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCBpbWcge1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG5cXHJcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgaDIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IHJnYigyMzUsIDE0MywgMTQzKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyBkaXYgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibiBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiBpOmhvdmVyLFxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiBpOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0MywgNzgsIDc4LCAwLjk3Myk7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAuY2FyZC10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBwIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNhcmQtdGV4dCBwIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCAxMDAsIDM4LCAwLjU0OCk7XFxyXFxuICBjb2xvcjogcmdiYSgyNDMsIDc4LCA3OCwgMC45NzMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIENPTU1FTlQgUE9QVVAgKi9cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMjYsIDAuNyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ2Nik7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1LCAyMzgsIDI1LCAwLjg0OSk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5NXZoO1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCA5NywgOTcsIDAuMzkpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm46aG92ZXIsXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjkzMik7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGgzIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5Myk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkgc3BhbiBzdHJvbmcge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCBoMyB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3Qge1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDJweCAxMHB4ICNmZmY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxMSwgMTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHA6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGlucHV0LFxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI0LCAxMDQsIDEwNCwgMC4zNjMpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMTcyLCAxMzQsIDEzNCwgMC45MzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTAwLCAzOCwgMC41NDgpO1xcclxcbiAgY29sb3I6IHJnYmEoMjQzLCA3OCwgNzgsIDAuOTczKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGVza3RvcCBtZWRpYSBxdWVyeSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGk6aG92ZXIsXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDkwLCA4NywgODcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiBzZWN0aW9uLmNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMTIwcHggYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibiBpIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG1HQUFtRztBQUNyRzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLCtDQUErQztFQUMvQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsMkJBQTJCO0FB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QWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBOztJQUVFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMy8yMy8xNy8zMy9jdXJ0YWluLTEyNzUyMDBfOTYwXzcyMC5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkxMSk7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDk5LCA5NiwgOTYsIDAuNzE5KTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhLmxvZ28ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCAwIDUwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNDgsIDQ2LCA0Nik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpOmhvdmVyLFxcclxcbmhlYWRlciBuYXYgdWwgbGk6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDkwLCA4NywgODcpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpOmhvdmVyID4gYSB7XFxyXFxuICBjb2xvcjogcmdiYSgyMzgsIDExOSwgMTE5LCAwLjgyMik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiAxODBweCBhdXRvO1xcclxcbiAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIHJvdy1nYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCB7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCBpbWcge1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG5cXHJcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgaDIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IHJnYigyMzUsIDE0MywgMTQzKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyBkaXYgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibiBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiBpOmhvdmVyLFxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiBpOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0MywgNzgsIDc4LCAwLjk3Myk7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAuY2FyZC10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBwIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNhcmQtdGV4dCBwIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCAxMDAsIDM4LCAwLjU0OCk7XFxyXFxuICBjb2xvcjogcmdiYSgyNDMsIDc4LCA3OCwgMC45NzMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIENPTU1FTlQgUE9QVVAgKi9cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMjYsIDAuNyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ2Nik7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1LCAyMzgsIDI1LCAwLjg0OSk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5NXZoO1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCA5NywgOTcsIDAuMzkpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm46aG92ZXIsXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjkzMik7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGgzIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5Myk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkgc3BhbiBzdHJvbmcge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCBoMyB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3Qge1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDJweCAxMHB4ICNmZmY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxMSwgMTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHA6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGlucHV0LFxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI0LCAxMDQsIDEwNCwgMC4zNjMpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMTcyLCAxMzQsIDEzNCwgMC45MzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTAwLCAzOCwgMC41NDgpO1xcclxcbiAgY29sb3I6IHJnYmEoMjQzLCA3OCwgNzgsIDAuOTczKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGVza3RvcCBtZWRpYSBxdWVyeSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGk6aG92ZXIsXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDkwLCA4NywgODcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiBzZWN0aW9uLmNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMTIwcHggYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibiBpIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5jb25zdCBmZXRjaE1vdmllTGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGxpa2VkSXRlbXMgPSBbXTtcclxuICBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iajMzT0VRWDM0UlB3b0dlSjhlSi9saWtlcycsXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGxpa2VkSXRlbXMgPSByZXM7XHJcbiAgICAgIHJldHVybiBsaWtlZEl0ZW1zO1xyXG4gICAgfSk7XHJcbiAgcmV0dXJuIGxpa2VkSXRlbXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaE1vdmllTGlrZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgZmV0Y2hGcm9tQXBpIGZyb20gJy4vcmVuZGVyTW92aWVzLmpzJztcclxuaW1wb3J0IHBvc3RMaWtlIGZyb20gJy4vbGlrZXNBcGkuanMnO1xyXG5cclxuY29uc3QgbGlrZU1vdmllID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFsbE1vdmllcyA9IGF3YWl0IGZldGNoRnJvbUFwaSgpO1xyXG5cclxuICBjb25zdCBsaWtlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XHJcbiAgY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY291bnQtbGlrZScpO1xyXG4gIGxpa2VzQnRuLmZvckVhY2goKGEsIGkpID0+IHtcclxuICAgIGxldCBoID0gSlNPTi5wYXJzZShzcGFuc1tpXS5pbm5lckhUTUwpO1xyXG5cclxuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHBvc3RMaWtlKGFsbE1vdmllc1tpXS5uYW1lKTtcclxuICAgICAgaCArPSAxO1xyXG4gICAgICBzcGFuc1tpXS5pbm5lckhUTUwgPSBoO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaWtlTW92aWU7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5jb25zdCBwb3N0TGlrZSA9IChtb3ZpZXMpID0+IHtcclxuICBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iajMzT0VRWDM0UlB3b0dlSjhlSi9saWtlcycsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IG1vdmllcyxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZTtcclxuIiwiaW1wb3J0IGZldGNoRnJvbUFwaSBmcm9tICcuL3JlbmRlck1vdmllcy5qcyc7XG5pbXBvcnQgZmV0Y2hNb3ZpZUxpa2VzIGZyb20gJy4vZmV0Y2hNb3ZpZUxpa2VzLmpzJztcblxuY29uc3QgY29tbWVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtcG9wdXAnKTtcbmxldCBjb3VudCA9IDA7XG5jb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XG5jb25zdCBtb3ZpZXNDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmxldCBjdXJyZW50VmFsdWUgPSAwO1xuXG5jb25zdCBhcHBJZCA9ICdqUWN3aDF3UkJzQVQ4WGdBQmI0WCc7XG5jb25zdCBpbnZVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vY29tbWVudHNgO1xuXG5jb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goYCR7aW52VXJsfT9pdGVtX2lkPSR7aXRlbUlkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb21tZW50cy5qc29uKCk7XG4gICAgY29uc3QgY29tbWVudEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbS1oZWFkZXInKTtcbiAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb21tZW50SGVhZC5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtkYXRhLmxlbmd0aH0pYDtcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKChjb21tKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gYCAgICAgICAgXG4gICAgICAgIDxwPiR7Y29tbS5jcmVhdGlvbl9kYXRlfSAke2NvbW0udXNlcm5hbWV9OiAke2NvbW0uY29tbWVudH08L3A+XG4gICAgICBgO1xuICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gY29tbWVudEl0ZW07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudEhlYWQuaW5uZXJIVE1MID0gJ0NvbW1lbnRzKDApJztcbiAgICAgIGNvbnN0IG5vQ29tbWVudCA9IGBcbiAgICAgIDxwPk5vIGNvbW1lbnQgb24gdGhpcyBwb3N0PC9wPlxuICAgICAgYDtcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IG5vQ29tbWVudDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBlcnJvcjogJywgZXJyKTtcbiAgfVxufTtcblxuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm1hc3NhZ2UnKTtcblxuICBpZiAodXNlcm5hbWUudmFsdWUgIT09ICcnIHx8IGNvbW1lbnQudmFsdWUgIT09ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW52VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS50ZXh0KCk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBmZXRjaENvbW1lbnRzKGl0ZW1JZCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGVycm9yOiAnLCBlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBjbG9zZVBvcHVwTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb21tZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93Q29tbWVudE1vZGFsID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcnIgPSBhd2FpdCBmZXRjaEZyb21BcGkoKTtcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgoY29tbWVudEJ0bikgPT4ge1xuICAgIGNvbnN0IGJ0bklkID0gY29tbWVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgbW92aWVEZXRhaWxzID0gYXJyW2J0bklkXTtcbiAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmV0Y2hDb21tZW50cyhidG5JZCk7XG4gICAgICBjb25zdCBtb2RhbCA9IGAgICAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1tb2RhbFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZVwiIGNsYXNzPVwiY2xvc2UtY29tbWVudC1iblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxzXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZURldGFpbHMuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiQ2FyZCBvcmlnaW5hbCBpbWFnZVwiIC8+XG4gICAgICAgIDxoMz4ke21vdmllRGV0YWlscy5uYW1lfTwvaDM+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IExhbmd1YWdlIDwvc3Ryb25nPjogJHttb3ZpZURldGFpbHMubGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz4gR2VucmUgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5nZW5yZXN9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz4gUnVudGltZSA8L3N0cm9uZz46ICR7bW92aWVEZXRhaWxzLnJ1bnRpbWV9IG1pbnV0ZXM8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48c3Ryb25nPiBwcmVtaWVyZWQgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5wcmVtaWVyZWR9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPiR7bW92aWVEZXRhaWxzLnN1bW1hcnl9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb21tZW50XCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiY29tbS1oZWFkZXJcIj48L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIi8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGNsYXNzPVwidXNlcm1hc3NhZ2VcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRcIiA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1jb21tZW50XCIgaWQ9XCIke2J0bklkfVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICBjb21tZW50TW9kYWwuaW5uZXJIVE1MID0gbW9kYWw7XG4gICAgICBjb21tZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjbG9zZVBvcHVwTW9kYWwoKTtcblxuICAgICAgY29uc3QgY21udEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY29tbWVudCcpO1xuICAgICAgY21udEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9zdENvbW1lbnQoYnRuSWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gUmVuZGVyIGFsbCBNb3ZpZXMgY2FyZFxuY29uc3QgcmVuZGVyTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcnIgPSBhd2FpdCBmZXRjaEZyb21BcGkoKTtcbiAgYXJyLnNsaWNlKDAsIDEwKS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIGZldGNoTW92aWVMaWtlcygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY3VycmVudFZhbHVlID0gcmVzO1xuICAgICAgbGV0IGFzc2lnbkxpa2UgPSAwO1xuXG4gICAgICBjb25zdCBsaWtlID0gY3VycmVudFZhbHVlLmZpbHRlcihcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaXRlbV9pZCA9PT0gbW92aWUubmFtZSxcbiAgICAgICk7XG4gICAgICBpZiAobGlrZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXNzaWduTGlrZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ25MaWtlID0gbGlrZVswXS5saWtlcztcbiAgICAgIH1cbiAgICAgIG1vdmllc0NhcmRzLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNhcmRcIiBpZD1cIiR7YXJyLmluZGV4T2YobW92aWUpfVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHttb3ZpZS5uYW1lfVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbW92aWVzXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7YCR7bW92aWUubmFtZS5zdWJzdHJpbmcoMCwgMTUpfWB9PC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlrZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdGh1bWJzLXVwXCI+PC9pPjxzcGFuIGlkPVwiY291bnQtbGlrZVwiPiR7YXNzaWduTGlrZX08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxwPiR7YCR7bW92aWUuc3VtbWFyeS5zdWJzdHJpbmcoMCwgODApfSAuLi5gfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudC1idG5cIiBpZD1cIiR7YXJyLmluZGV4T2YoXG4gICAgbW92aWUsXG4gICl9XCI+UmVhZCBtb3JlICYgY29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgIHNob3dDb21tZW50TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvdW50ICs9IDE7XG4gIH0pO1xuXG4gIGNvdW50ZXIuaW5uZXJUZXh0ID0gYCgke2NvdW50ICogMn0pYDtcbiAgY291bnRlci5zdHlsZS5jb2xvciA9ICdyZWQnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTW92aWVzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmNvbnN0IGZldGNoRnJvbUFwaSA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgbW92aWVzQXJyYXkgPSBbXTtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTEnKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbW92aWVzQXJyYXkgPSByZXNwb25zZTtcclxuICAgIH0pO1xyXG4gIHJldHVybiBtb3ZpZXNBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoRnJvbUFwaTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHJlbmRlck1vdmllcyBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VCb2R5LmpzXCI7XHJcbmltcG9ydCBsaWtlTW92aWUgZnJvbSBcIi4vbW9kdWxlcy9saWtlRmVhdHVyZS5qc1wiO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGlwbGUtZW1wdHktbGluZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1ib2R5LXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xyXG5cclxucmVuZGVyTW92aWVzKCk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBsaWtlTW92aWUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==