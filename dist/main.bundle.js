/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/sky.jpg */ "./src/assets/images/sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Sans+Pro&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style-type: none;\n  outline: none;\n  font-family: \"Montserrat\", sans-serif;\n}\n\na, a:active, a:visited {\n  color: black;\n}\n\n.btn {\n  padding: 0.6rem;\n  font-size: 1rem;\n  border-radius: 8px;\n  background: transparent;\n  color: white;\n  outline: none;\n  border: 2px solid white;\n  cursor: pointer;\n  transition: all 0.2s linear;\n}\n.btn:hover {\n  background-color: #f26419;\n}\n\n.btn-2 {\n  position: relative;\n  font-size: 1.2rem;\n  padding: 0.6rem;\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.btn-2::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  border-bottom: 2px solid #ade4f7;\n  transition: 0.3s;\n}\n.btn-2::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  border-bottom: 2px solid #ade4f7;\n  transition: 0.3s;\n}\n.btn-2:hover {\n  color: #ade4f7;\n}\n.btn-2:hover::before {\n  width: 100%;\n}\n.btn-2:hover::after {\n  width: 100%;\n}\n\n/* html {\n    font-size: 62.5%;\n} */\n.page-wrapper {\n  position: relative;\n}\n\n.navbar {\n  position: fixed;\n  width: 94%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(0.2turn, rgba(134, 187, 216, 0.8) 30%, #2f4858);\n  font-weight: 600;\n  margin: 0.9rem 3% 0 3%;\n  border-radius: 8px;\n  padding: 0 5%;\n  z-index: 10;\n}\n.navbar .navbar-list {\n  position: relative;\n  display: flex;\n  gap: 2rem;\n  z-index: 0;\n}\n.navbar .navbar-list .list-item {\n  position: relative;\n  font-size: 1.3rem;\n}\n.navbar .navbar-list .list-item a {\n  text-align: center;\n  display: inline-block;\n  padding: 1.2rem;\n  width: 10rem;\n  transition: all 0.3s ease-in;\n  color: white;\n}\n.navbar .navbar-list .list-item a:hover {\n  transform: scale(1.1);\n}\n.navbar .navbar-list .list-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n  background: #f26419;\n  opacity: 0;\n  transition: all 0.3s ease-in;\n}\n.navbar .navbar-list .list-item:hover::before {\n  width: 100%;\n  opacity: 0.8;\n  z-index: -1;\n  border-radius: 8px;\n  transform: rotateX(180deg);\n}\n.navbar .company-logo {\n  display: flex;\n  align-items: center;\n}\n.navbar .company-logo .logo-container {\n  position: relative;\n}\n.navbar .company-logo .logo-container img {\n  height: 5rem;\n}\n.navbar .company-logo .image-container {\n  position: relative;\n}\n.navbar .company-logo .image-container .image-balloon {\n  position: relative;\n  display: inline-block;\n  height: 4rem;\n  animation-name: balloon;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n}\n.navbar .company-logo .image-container .image-cloud {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 1.5rem;\n  z-index: 10;\n  animation: cloud 4s linear infinite;\n}\n.navbar .company-logo .image-container .altitude {\n  transform: translate(80%, 80%) scaleX(-1);\n  animation: cloud 4s 1s linear infinite;\n}\n.navbar .hamburger {\n  position: fixed;\n  top: 1.8rem;\n  margin: auto;\n  opacity: 0;\n  right: 2rem;\n  transition: all 0.3s ease-in;\n}\n.navbar .hamburger .bar {\n  display: block;\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  background: white;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.navbar .hamburger:hover {\n  cursor: pointer;\n}\n\n.section {\n  position: relative;\n  height: auto;\n  width: 100vw !important;\n  color: white;\n  background-attachment: fixed;\n}\n\n.video-clip {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n  z-index: -10;\n  margin-bottom: 0;\n  background-attachment: fixed;\n}\n\n.video-reference {\n  width: 90%;\n  height: 25rem;\n}\n\n.index-page-content {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  top: 50%;\n  padding: 4rem;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  /* background: rgba(#86bbd8, 0.8); */\n}\n\n.sky-image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 60rem;\n  padding: 4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: -1rem;\n}\n\n.home-experience {\n  position: relative;\n  font-size: 1.1rem;\n  line-height: 1.8em;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  max-width: 50rem;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 3rem 1rem 5rem 1rem;\n  border-radius: 8px;\n  text-align: center;\n}\n\nfooter {\n  background-color: #5e76ff;\n}\nfooter .footer-content {\n  color: wheat;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n  gap: 2rem;\n  width: 100%;\n  height: auto;\n  transition: all 1s;\n}\nfooter .footer-content .footer-icons {\n  transition: all 0.4s ease-in;\n  border: 2px solid wheat;\n  border-radius: 45px;\n}\nfooter .footer-content .footer-links {\n  transition: all 0.7s ease-in;\n}\nfooter .footer-content .footer-copyrights {\n  transition: all 2.6s ease-in;\n}\nfooter .footer-content .info-list {\n  display: flex;\n  gap: 3rem;\n  padding: 0.5rem 0.8rem;\n}\nfooter .footer-content .info-list li a {\n  color: wheat;\n  transition: all 0.3s;\n}\nfooter .footer-content .info-list li a:hover {\n  color: #f26419;\n}\n\n@keyframes balloon {\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes cloud {\n  0% {\n    right: 0;\n    opacity: 1;\n  }\n  20% {\n    right: 20%;\n    opacity: 1;\n  }\n  40% {\n    right: 40%;\n    opacity: 1;\n  }\n  60% {\n    right: 60%;\n    opacity: 0.8;\n  }\n  80% {\n    right: 80%;\n    opacity: 0.6;\n  }\n  100% {\n    right: 100%;\n    opacity: 0;\n  }\n}\n/* @media only screen and (min-width: 1025px) {\n\n} */\n@media only screen and (max-width: 1024px) {\n  .navbar {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n  .navbar .navbar-list .list-item .nav-link {\n    font-size: 1rem;\n    padding: 0.6rem;\n    width: 7rem;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .navbar .navbar-list {\n    position: fixed;\n    top: 10rem;\n    left: -100%;\n    flex-direction: column;\n    width: 100%;\n    text-align: center;\n    transition: all 0.3s linear;\n  }\n  .navbar .navbar-list .navbar-item .nav-link {\n    width: 8rem;\n  }\n  .navbar .hamburger {\n    opacity: 1;\n  }\n  .navbar.active {\n    height: 100vh;\n    flex-direction: column;\n  }\n  .navbar.active .navbar-list {\n    left: 0;\n  }\n  .navbar.active .navbar-list .list-item {\n    width: 8rem;\n    margin: 0 auto;\n  }\n  .navbar.active .hamburger .bar:nth-child(2) {\n    opacity: 0;\n  }\n  .navbar.active .hamburger .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n  .navbar.active .hamburger .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n\n  .image-container {\n    display: none;\n  }\n\n  .footer-content {\n    display: flex;\n    justify-content: center;\n    flex-direction: row !important;\n  }\n\n  .info-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Sans+Pro&display=swap');\n\n$navbar-font-size: 1.3rem;\n$navbar-bg-color: linear-gradient(0.2turn, rgba(#86bbd8, 0.8) 30%, #2f4858);\n$section-bg-color: rgb(172, 172, 255);\n$navbar-font-color: white;\n$hover-color: #f26419;\n\n*, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    list-style-type: none;\n    outline: none;\n    font-family: 'Montserrat', sans-serif;\n}\n\na, a:active, a:visited {\n    color: black;\n}\n\n.btn {\n    padding: 0.6rem;\n    font-size: 1rem;\n    border-radius: 8px;\n    background: transparent;\n    color: white;\n    outline: none;\n    border: 2px solid white;\n    cursor: pointer;\n    transition: all 0.2s linear;\n    &:hover {\n        background-color: $hover-color;\n    }\n}\n\n.btn-2 {\n    position: relative;\n    font-size: 1.2rem;\n    padding: 0.6rem;\n    border: none;\n    outline: none;\n    background: none;\n    color: white;\n    cursor: pointer;\n    transition: 0.3s;\n    &::before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 0;\n        border-bottom: 2px solid rgb(173, 228, 247);\n        transition: 0.3s;\n    }\n    &::after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        width: 0;\n        border-bottom: 2px solid rgb(173, 228, 247);\n        transition: 0.3s;\n    }\n    &:hover {\n        color: rgb(173, 228, 247);\n        \n        &::before {\n            width: 100%;\n        }\n        &::after {\n            width: 100%;\n        }\n    }\n}\n\n/* html {\n    font-size: 62.5%;\n} */\n\n.page-wrapper {\n    position: relative;\n}\n\n.navbar {\n    position: fixed;\n    width: 94%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n    background: $navbar-bg-color;\n    font-weight: 600;\n    margin: 0.9rem 3% 0 3%;\n    border-radius: 8px;\n    padding: 0 5%;\n    z-index: 10;\n    .navbar-list {\n        position: relative;\n        display: flex;\n        gap: 2rem;\n        z-index: 0;\n        & .list-item {\n            position: relative;\n            font-size: $navbar-font-size;\n            & a {\n                text-align: center;\n                display: inline-block;\n                padding: 1.2rem;\n                width: 10rem;\n                transition: all 0.3s ease-in;\n                color: $navbar-font-color;\n                &:hover {\n                    transform: scale(1.1);\n                }\n            }\n            &::before {\n                content: \"\";\n                position: absolute;\n                top: 0;\n                right: 0;\n                width: 0;\n                height: 100%;\n                background: #f26419;\n                opacity: 0;\n                transition: all 0.3s ease-in;\n            }\n            &:hover {\n                &::before {\n                    width: 100%;\n                    opacity: 0.8;\n                    z-index: -1;\n                    border-radius:8px;\n                    transform: rotateX(180deg);\n                }\n            }\n        }\n    }\n    .company-logo {\n        display: flex;\n        align-items: center;\n\n        .logo-container {\n            position: relative;\n            img {\n                height: 5rem;\n            }\n        }\n        .image-container {\n            position: relative;\n\n            .image-balloon {\n                position: relative;\n                display: inline-block;\n                height: 4rem;\n                animation-name: balloon;\n                animation-duration: 4s;\n                animation-iteration-count: infinite;\n                animation-timing-function: ease-in-out;\n            }\n            .image-cloud {\n                position: absolute;\n                top: 0;\n                right: 0;\n                height: 1.5rem;\n                z-index: 10;\n                animation: cloud 4s linear infinite ;\n            }\n            .altitude {\n                transform: translate(80%, 80%) scaleX(-1);\n                animation: cloud 4s 1s linear infinite ;\n            }\n        }\n    }\n\n    .hamburger {\n        position: fixed;\n        top: 1.8rem;\n        margin: auto;\n        opacity: 0;\n        right: 2rem;\n        transition: all 0.3s ease-in;\n        .bar {\n            display: block;\n            width: 25px;\n            height: 3px;\n            margin: 5px auto;\n            background: white;\n            -webkit-transition: all 0.3s ease-in-out;\n            transition: all 0.3s ease-in-out;\n        }\n        &:hover {\n            cursor: pointer;\n        }\n    }\n}\n\n.section {\n    position: relative;\n    height: auto;\n    width: 100vw !important;\n    color: white;\n    background-attachment: fixed;\n}\n\n.video-clip {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n    z-index: -10;\n    margin-bottom: 0;\n    background-attachment: fixed;\n}\n\n.video-reference {\n    width: 90%;\n    height: 25rem;\n}\n\n.index-page-content {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    gap: 0.7rem;\n    top: 50%;\n    padding: 4rem;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    /* background: rgba(#86bbd8, 0.8); */\n}\n\n.sky-image {\n    background-image: url(\"../assets/images/sky.jpg\");\n\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 60rem;\n    padding: 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: -1rem;\n}\n\n.home-experience {\n    position: relative;\n    font-size: 1.1rem;\n    line-height: 1.8em;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    max-width: 50rem;\n    background: rgba(0, 0, 0, 0.2);\n    padding: 3rem 1rem 5rem 1rem;\n    border-radius: 8px;\n    text-align: center;\n}\n\nfooter {\n    background-color: rgb(94, 118, 255);\n    .footer-content {\n    color: wheat;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    gap: 2rem;\n    width: 100%;\n    height: auto;\n    transition: all 1s;\n    .footer-icons {\n        transition: all 0.4s ease-in;\n        border: 2px solid wheat;\n        border-radius: 45px;\n    }\n    .footer-links {\n        transition: all 0.7s ease-in;\n    }\n    .footer-copyrights {\n        transition: all 2.6s ease-in;\n    }\n        .info-list {\n            display: flex;\n            gap: 3rem;\n            padding: 0.5rem 0.8rem;\n            li {\n                a{\n                    color: wheat;\n                    transition: all 0.3s;\n                    &:hover {\n                        color: $hover-color;\n                    }\n                }\n            }\n        }\n    }\n}\n\n@keyframes balloon {\n    0% {\n        transform: translateY(-10px);\n    }\n    50% {\n        transform: translateY(10px);\n    }\n    100% {\n        transform: translateY(-10px);\n    }\n} \n\n@keyframes cloud {\n    0% {\n        right: 0;\n        opacity: 1;\n    }\n    20% {\n        right: 20%;\n        opacity: 1;\n    }\n    40% {\n        right: 40%;\n        opacity: 1;\n    }\n    60% {\n        right: 60%;\n        opacity: 0.8;\n    }\n    80% {\n        right: 80%;\n        opacity: 0.6;\n    }\n    100% {\n        right: 100%;\n        opacity: 0;\n    }\n}\n\n/* @media only screen and (min-width: 1025px) {\n\n} */\n\n@media only screen and (max-width: 1024px) {\n    .navbar {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        .navbar-list {\n            .list-item {\n                .nav-link {\n                    font-size: 1rem;\n                    padding: 0.6rem;\n                    width: 7rem;\n                }\n            }\n        }\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .navbar {   \n        .navbar-list {\n            position: fixed;\n            top: 10rem;\n            left: -100%;\n            flex-direction: column;\n            width: 100%;\n            text-align: center;\n            transition: all 0.3s linear;\n            .navbar-item {\n                .nav-link {\n                    width: 8rem;\n                }\n            }\n        }\n        .hamburger {\n            opacity: 1;\n        }\n\n        &.active {\n            height: 100vh;\n            flex-direction: column;\n            .navbar-list {\n                left: 0;\n                .list-item {\n                    width: 8rem;\n                    margin: 0 auto;\n                }\n            }\n\n            .hamburger {\n                .bar:nth-child(2) {\n                    opacity: 0;\n                }\n                .bar:nth-child(1) {\n                    transform: translateY(8px) rotate(45deg);\n                }\n                .bar:nth-child(3) {\n                    transform: translateY(-8px) rotate(-45deg);\n                }\n            }\n        }\n    }\n    .image-container {\n        display: none;\n    }\n\n    .footer-content {\n        display: flex;\n        justify-content: center;\n        flex-direction: row !important;\n    }\n\n    .info-list {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slides.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slides.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background-img.jpg */ "./src/assets/images/background-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-1.jpg */ "./src/assets/images/slideshow/image-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-2.jpg */ "./src/assets/images/slideshow/image-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-3.jpg */ "./src/assets/images/slideshow/image-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-4.jpg */ "./src/assets/images/slideshow/image-4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-5.jpg */ "./src/assets/images/slideshow/image-5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-6.jpg */ "./src/assets/images/slideshow/image-6.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-7.jpg */ "./src/assets/images/slideshow/image-7.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/slideshow/image-8.jpg */ "./src/assets/images/slideshow/image-8.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slideshow-container {\n  padding: 2rem;\n  width: 100%;\n  height: auto;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: 0 50%;\n}\n\n.cb-slideshow,\n.cb-slideshow:after {\n  position: relative;\n  width: 75%;\n  height: 40rem;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n  margin: 0 auto;\n}\n\n.cb-slideshow:after {\n  content: \"\";\n  /* background: transparent url(../images/pattern.png) repeat top left;  */\n}\n\n.cb-slideshow li span {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: transparent;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  z-index: 0;\n  animation: imageAnimation 48s linear infinite 0s;\n  border-radius: 12px;\n  box-shadow: 0 0 10px 2px black;\n}\n\n.cb-slideshow li div {\n  z-index: 1000;\n  position: absolute;\n  bottom: 30px;\n  left: 0px;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #fff;\n  animation: titleAnimation 48s linear infinite 0s;\n}\n\n.cb-slideshow li div h3 {\n  font-family: \"Nothing You Could Do\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 5rem;\n  padding: 0;\n  line-height: 200px;\n}\n\n.cb-slideshow li:nth-child(1) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  animation-delay: 0s;\n}\n\n.cb-slideshow li:nth-child(2) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  animation-delay: 6s;\n}\n\n.cb-slideshow li:nth-child(3) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  animation-delay: 12s;\n}\n\n.cb-slideshow li:nth-child(4) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  animation-delay: 18s;\n}\n\n.cb-slideshow li:nth-child(5) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  animation-delay: 24s;\n}\n\n.cb-slideshow li:nth-child(6) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  animation-delay: 30s;\n}\n\n.cb-slideshow li:nth-child(7) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  animation-delay: 36s;\n}\n\n.cb-slideshow li:nth-child(8) span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  animation-delay: 42s;\n}\n\n.cb-slideshow li:nth-child(1) div {\n  animation-delay: 0s;\n}\n\n.cb-slideshow li:nth-child(2) div {\n  animation-delay: 6s;\n}\n\n.cb-slideshow li:nth-child(3) div {\n  animation-delay: 12s;\n}\n\n.cb-slideshow li:nth-child(4) div {\n  animation-delay: 18s;\n}\n\n.cb-slideshow li:nth-child(5) div {\n  animation-delay: 24s;\n}\n\n.cb-slideshow li:nth-child(6) div {\n  animation-delay: 30s;\n}\n\n.cb-slideshow li:nth-child(7) div {\n  animation-delay: 36s;\n}\n\n.cb-slideshow li:nth-child(8) div {\n  animation-delay: 42s;\n}\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in;\n  }\n  8% {\n    opacity: 1;\n    animation-timing-function: ease-out;\n  }\n  17% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes titleAnimation {\n  0% {\n    opacity: 0;\n  }\n  8% {\n    opacity: 1;\n  }\n  17% {\n    opacity: 1;\n  }\n  19% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.no-cssanimations .cb-slideshow li span {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 1000px) {\n  .cb-slideshow,\n.cb-slideshow:after {\n    position: relative;\n    width: 75%;\n    height: 30rem;\n  }\n\n  .cb-slideshow li div h3 {\n    font-size: 2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/slides.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,0BAAA;AAAJ;;AAGA;;EAEI,kBAAA;EACA,UAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;AAAJ;;AAEA;EACI,WAAA;EACA,yEAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,sBAAA;EACA,4BAAA;EACA,4BAAA;EACA,UAAA;EACA,UAAA;EACA,gDAAA;EACA,mBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,aAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,gDAAA;AACJ;;AAEA;EACI,sEAAA;EACA,eAAA;EACA,UAAA;EACA,kBAAA;AACJ;;AAEA;EACI,yDAAA;EACA,mBAAA;AACJ;;AACA;EACI,yDAAA;EACA,mBAAA;AAEJ;;AAAA;EACI,yDAAA;EACA,oBAAA;AAGJ;;AADA;EACI,yDAAA;EACA,oBAAA;AAIJ;;AAFA;EACI,yDAAA;EACA,oBAAA;AAKJ;;AAHA;EACI,yDAAA;EACA,oBAAA;AAMJ;;AAJA;EACI,yDAAA;EACA,oBAAA;AAOJ;;AALA;EACI,yDAAA;EACA,oBAAA;AAQJ;;AAJA;EACI,mBAAA;AAOJ;;AALA;EACI,mBAAA;AAQJ;;AANA;EACI,oBAAA;AASJ;;AAPA;EACI,oBAAA;AAUJ;;AARA;EACI,oBAAA;AAWJ;;AATA;EACI,oBAAA;AAYJ;;AAVA;EACI,oBAAA;AAaJ;;AAXA;EACI,oBAAA;AAcJ;;AAXA;EACI;IAAK,UAAA;IAAY,kCAAA;EAgBnB;EAfE;IAAK,UAAA;IAAY,mCAAA;EAmBnB;EAlBE;IAAM,UAAA;EAqBR;EApBE;IAAM,UAAA;EAuBR;EAtBE;IAAO,UAAA;EAyBT;AACF;AAvBA;EACI;IAAK,UAAA;EA0BP;EAzBE;IAAK,UAAA;EA4BP;EA3BE;IAAM,UAAA;EA8BR;EA7BE;IAAM,UAAA;EAgCR;EA/BE;IAAO,UAAA;EAkCT;AACF;AAhCA;EACC,UAAA;AAkCD;;AA/BA;EACQ;;IAEA,kBAAA;IACA,UAAA;IACA,aAAA;EAkCN;;EA/BE;IACI,eAAA;EAkCN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');\n\n.slideshow-container {\n    padding: 2rem;\n    width: 100%;\n    height: auto;\n    background-image: url(../assets/images/background-img.jpg);\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: 0 50%;\n}\n\n.cb-slideshow,\n.cb-slideshow:after { \n    position: relative;\n    width: 75%;\n    height: 40rem;\n    top: 0px;\n    left: 0px;\n    z-index: 0; \n    margin: 0 auto;\n}\n.cb-slideshow:after { \n    content: '';\n    /* background: transparent url(../images/pattern.png) repeat top left;  */\n}\n\n.cb-slideshow li span { \n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    color: transparent;\n    background-size: cover;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    opacity: 0;\n    z-index: 0;\n    animation: imageAnimation 48s linear infinite 0s; \n    border-radius: 12px;\n    box-shadow: 0 0 10px 2px black;\n}\n\n.cb-slideshow li div { \n    z-index: 1000;\n    position: absolute;\n    bottom: 30px;\n    left: 0px;\n    width: 100%;\n    text-align: center;\n    opacity: 0;\n    color: #fff;\n    animation: titleAnimation 48s linear infinite 0s; \n}\n\n.cb-slideshow li div h3 { \n    font-family: 'Nothing You Could Do', 'Arial Narrow', Arial, sans-serif;\n    font-size: 5rem;\n    padding: 0;\n    line-height: 200px; \n}\n\n.cb-slideshow li:nth-child(1) span { \n    background-image: url(../assets/images/slideshow/image-1.jpg);\n    animation-delay: 0s; \n}\n.cb-slideshow li:nth-child(2) span { \n    background-image: url(../assets/images/slideshow/image-2.jpg);\n    animation-delay: 6s; \n}\n.cb-slideshow li:nth-child(3) span { \n    background-image: url(../assets/images/slideshow/image-3.jpg) ;\n    animation-delay: 12s; \n}\n.cb-slideshow li:nth-child(4) span { \n    background-image: url(../assets/images/slideshow/image-4.jpg) ;\n    animation-delay: 18s; \n}\n.cb-slideshow li:nth-child(5) span { \n    background-image: url(../assets/images/slideshow/image-5.jpg) ;\n    animation-delay: 24s; \n}\n.cb-slideshow li:nth-child(6) span { \n    background-image: url(../assets/images/slideshow/image-6.jpg) ;\n    animation-delay: 30s; \n}\n.cb-slideshow li:nth-child(7) span { \n    background-image: url(../assets/images/slideshow/image-7.jpg) ;\n    animation-delay: 36s; \n}\n.cb-slideshow li:nth-child(8) span { \n    background-image: url(../assets/images/slideshow/image-8.jpg) ;\n    animation-delay: 42s; \n}\n\n\n.cb-slideshow li:nth-child(1) div { \n    animation-delay: 0s; \n}\n.cb-slideshow li:nth-child(2) div { \n    animation-delay: 6s; \n}\n.cb-slideshow li:nth-child(3) div { \n    animation-delay: 12s; \n}\n.cb-slideshow li:nth-child(4) div { \n    animation-delay: 18s; \n}\n.cb-slideshow li:nth-child(5) div { \n    animation-delay: 24s; \n}\n.cb-slideshow li:nth-child(6) div { \n    animation-delay: 30s; \n}\n.cb-slideshow li:nth-child(7) div { \n    animation-delay: 36s; \n}\n.cb-slideshow li:nth-child(8) div { \n    animation-delay: 42s; \n}\n\n@keyframes imageAnimation { \n    0% { opacity: 0; animation-timing-function: ease-in; }\n    8% { opacity: 1; animation-timing-function: ease-out; }\n    17% { opacity: 1 }\n    25% { opacity: 0 }\n    100% { opacity: 0 }\n}\n\n@keyframes titleAnimation { \n    0% { opacity: 0 }\n    8% { opacity: 1 }\n    17% { opacity: 1 }\n    19% { opacity: 0 }\n    100% { opacity: 0 }\n}\n\n.no-cssanimations .cb-slideshow li span{\n\topacity: 1;\n}\n\n@media only screen and (max-width: 1000px) {\n        .cb-slideshow,\n        .cb-slideshow:after { \n        position: relative;\n        width: 75%;\n        height: 30rem;\n    }\n\n    .cb-slideshow li div h3 { \n        font-size: 2rem;\n    }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/slides.scss":
/*!********************************!*\
  !*** ./src/styles/slides.scss ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slides_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./slides.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slides.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slides_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slides_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slides_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slides_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/animation.js":
/*!**********************************!*\
  !*** ./src/scripts/animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkScrolling)
/* harmony export */ });
const checkpoint = 2750;
const footerContent = document.querySelector("[data-footer-content]");
const footerIcons =document.querySelector("[data-footer-icons]");
const footerLinks = document.querySelector("[data-footer-links]");
const footerCp = document.querySelector("[data-footer-cp]");

window.addEventListener("scroll", checkScrolling);

function checkScrolling() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > checkpoint) {
        footerCp.style.opacity = 1;
        footerIcons.style.opacity = 1;
        footerLinks.style.opacity = 1;
    } else {
        footerCp.style.opacity = 0;
        footerIcons.style.opacity = 0;
        footerLinks.style.opacity = 0;
    }
}

/***/ }),

/***/ "./src/scripts/controls.js":
/*!*********************************!*\
  !*** ./src/scripts/controls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeMenu": () => (/* binding */ closeMenu),
/* harmony export */   "mobileMenu": () => (/* binding */ mobileMenu)
/* harmony export */ });
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-list");
const navLink = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}

function mobileMenu() {
    console.log("clikcked");
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}



/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entryPoint": () => (/* binding */ entryPoint)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_slides_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/slides.scss */ "./src/styles/slides.scss");
/* harmony import */ var _scripts_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/video */ "./src/scripts/video.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./src/scripts/controls.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation */ "./src/scripts/animation.js");







function entryPoint() {
    console.log("Script is working");
    (0,_scripts_video__WEBPACK_IMPORTED_MODULE_2__.playVideo)();
}



/***/ }),

/***/ "./src/scripts/video.js":
/*!******************************!*\
  !*** ./src/scripts/video.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playVideo": () => (/* binding */ playVideo)
/* harmony export */ });
const video = document.querySelector("#balloonClip");

function playVideo() {
    console.log("video should play");
}



/***/ }),

/***/ "./src/assets/images/background-img.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/background-img.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb9bb1eaf33a6dcf0e80.jpg";

/***/ }),

/***/ "./src/assets/images/sky.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/sky.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecb8c0949d66419e9897.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-1.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-1.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e59c4b8750e73d26c2c4.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-2.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-2.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fb25e11e57cc379f3f1.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-3.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-3.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bce0498e2df8b478c155.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-4.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-4.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03a6f835bd35bbfa8760.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-5.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-5.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cc6f4c8b8bf4e80f76a.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-6.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-6.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "181c9c0e268b871ce877.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-7.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-7.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26912831e7dea093a347.jpg";

/***/ }),

/***/ "./src/assets/images/slideshow/image-8.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/slideshow/image-8.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "322cc46e5e0944a44926.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/main */ "./src/scripts/main.js");


(0,_scripts_main__WEBPACK_IMPORTED_MODULE_0__.entryPoint)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sZ0lBQWdJLDhCQUE4Qiw4RUFBOEUsd0NBQXdDLDRCQUE0Qix3QkFBd0Is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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7OztBQ3JCMEM7O0FBRTFDLHlEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlLy4vc3JjL3N0eWxlcy9zbGlkZXMuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlLy4vc3JjL3N0eWxlcy9zbGlkZXMuc2Nzcz81ZjQ4Iiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2UvLi9zcmMvc2NyaXB0cy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2UvLi9zcmMvc2NyaXB0cy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2UvLi9zcmMvc2NyaXB0cy92aWRlby5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9kdWN0LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3QtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvZHVjdC1sYW5kaW5nLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc2t5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEsIGE6YWN0aXZlLCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjY0MTk7XFxufVxcblxcbi5idG4tMiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmJ0bi0yOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FkZTRmNztcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5idG4tMjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhZGU0Zjc7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uYnRuLTI6aG92ZXIge1xcbiAgY29sb3I6ICNhZGU0Zjc7XFxufVxcbi5idG4tMjpob3Zlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYnRuLTI6aG92ZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBodG1sIHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG59ICovXFxuLnBhZ2Utd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDk0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuMnR1cm4sIHJnYmEoMTM0LCAxODcsIDIxNiwgMC44KSAzMCUsICMyZjQ4NTgpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMC45cmVtIDMlIDAgMyU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAwIDUlO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5uYXZiYXIgLm5hdmJhci1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubmF2YmFyIC5uYXZiYXItbGlzdCAubGlzdC1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ubmF2YmFyIC5uYXZiYXItbGlzdCAubGlzdC1pdGVtIGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdmJhciAubmF2YmFyLWxpc3QgLmxpc3QtaXRlbSBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm5hdmJhciAubmF2YmFyLWxpc3QgLmxpc3QtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmMjY0MTk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG59XFxuLm5hdmJhciAubmF2YmFyLWxpc3QgLmxpc3QtaXRlbTpob3Zlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG59XFxuLm5hdmJhciAuY29tcGFueS1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2YmFyIC5jb21wYW55LWxvZ28gLmxvZ28tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5hdmJhciAuY29tcGFueS1sb2dvIC5sb2dvLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG4ubmF2YmFyIC5jb21wYW55LWxvZ28gLmltYWdlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5uYXZiYXIgLmNvbXBhbnktbG9nbyAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZS1iYWxsb29uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNHJlbTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5uYXZiYXIgLmNvbXBhbnktbG9nbyAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZS1jbG91ZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgei1pbmRleDogMTA7XFxuICBhbmltYXRpb246IGNsb3VkIDRzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLm5hdmJhciAuY29tcGFueS1sb2dvIC5pbWFnZS1jb250YWluZXIgLmFsdGl0dWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwJSwgODAlKSBzY2FsZVgoLTEpO1xcbiAgYW5pbWF0aW9uOiBjbG91ZCA0cyAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi5uYXZiYXIgLmhhbWJ1cmdlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEuOHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICByaWdodDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XFxufVxcbi5uYXZiYXIgLmhhbWJ1cmdlciAuYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLm5hdmJhciAuaGFtYnVyZ2VyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4udmlkZW8tY2xpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHotaW5kZXg6IC0xMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4udmlkZW8tcmVmZXJlbmNlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbn1cXG5cXG4uaW5kZXgtcGFnZS1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjdyZW07XFxuICB0b3A6IDUwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKCM4NmJiZDgsIDAuOCk7ICovXFxufVxcblxcbi5za3ktaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWluLWhlaWdodDogNjByZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG59XFxuXFxuLmhvbWUtZXhwZXJpZW5jZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBhZGRpbmc6IDNyZW0gMXJlbSA1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3NmZmO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IHtcXG4gIGNvbG9yOiB3aGVhdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuZm9vdGVyIC5mb290ZXItY29udGVudCAuZm9vdGVyLWljb25zIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxufVxcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1saW5rcyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IC5mb290ZXItY29weXJpZ2h0cyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMi42cyBlYXNlLWluO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IC5pbmZvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxufVxcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmluZm8tbGlzdCBsaSBhIHtcXG4gIGNvbG9yOiB3aGVhdDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IC5pbmZvLWxpc3QgbGkgYTpob3ZlciB7XFxuICBjb2xvcjogI2YyNjQxOTtcXG59XFxuXFxuQGtleWZyYW1lcyBiYWxsb29uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNsb3VkIHtcXG4gIDAlIHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAyMCUge1xcbiAgICByaWdodDogMjAlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgcmlnaHQ6IDQwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHJpZ2h0OiA2MCU7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIHJpZ2h0OiA4MCU7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXG5cXG59ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgfVxcbiAgLm5hdmJhciAubmF2YmFyLWxpc3QgLmxpc3QtaXRlbSAubmF2LWxpbmsge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5uYXZiYXIgLm5hdmJhci1saXN0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwcmVtO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcbiAgfVxcbiAgLm5hdmJhciAubmF2YmFyLWxpc3QgLm5hdmJhci1pdGVtIC5uYXYtbGluayB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgfVxcbiAgLm5hdmJhciAuaGFtYnVyZ2VyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIC5uYXZiYXIuYWN0aXZlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5uYXZiYXIuYWN0aXZlIC5uYXZiYXItbGlzdCB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuICAubmF2YmFyLmFjdGl2ZSAubmF2YmFyLWxpc3QgLmxpc3QtaXRlbSB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gIC5uYXZiYXIuYWN0aXZlIC5oYW1idXJnZXIgLmJhcjpudGgtY2hpbGQoMikge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgLm5hdmJhci5hY3RpdmUgLmhhbWJ1cmdlciAuYmFyOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAubmF2YmFyLmFjdGl2ZSAuaGFtYnVyZ2VyIC5iYXI6bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcblxcbiAgLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuZm9vdGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmluZm8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7QUFOSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQU9JO0VBQ0kseUJBM0JNO0FBc0JkOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZ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SSxhQUFBO0lBQ0Esc0JBQUE7RUE3QlY7RUE4QlU7SUFDSSxPQUFBO0VBNUJkO0VBNkJjO0lBQ0ksV0FBQTtJQUNBLGNBQUE7RUEzQmxCO0VBZ0NjO0lBQ0ksVUFBQTtFQTlCbEI7RUFnQ2M7SUFDSSx3Q0FBQTtFQTlCbEI7RUFnQ2M7SUFDSSwwQ0FBQTtFQTlCbEI7O0VBbUNFO0lBQ0ksYUFBQTtFQWhDTjs7RUFtQ0U7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSw4QkFBQTtFQWhDTjs7RUFtQ0U7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQWhDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kbmF2YmFyLWZvbnQtc2l6ZTogMS4zcmVtO1xcbiRuYXZiYXItYmctY29sb3I6IGxpbmVhci1ncmFkaWVudCgwLjJ0dXJuLCByZ2JhKCM4NmJiZDgsIDAuOCkgMzAlLCAjMmY0ODU4KTtcXG4kc2VjdGlvbi1iZy1jb2xvcjogcmdiKDE3MiwgMTcyLCAyNTUpO1xcbiRuYXZiYXItZm9udC1jb2xvcjogd2hpdGU7XFxuJGhvdmVyLWNvbG9yOiAjZjI2NDE5O1xcblxcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hLCBhOmFjdGl2ZSwgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG4uYnRuLTIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTczLCAyMjgsIDI0Nyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB9XFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTczLCAyMjgsIDI0Nyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB9XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHJnYigxNzMsIDIyOCwgMjQ3KTtcXG4gICAgICAgIFxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vKiBodG1sIHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG59ICovXFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDk0JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZDogJG5hdmJhci1iZy1jb2xvcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwLjlyZW0gMyUgMCAzJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAwIDUlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgLm5hdmJhci1saXN0IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgJiAubGlzdC1pdGVtIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAkbmF2YmFyLWZvbnQtc2l6ZTtcXG4gICAgICAgICAgICAmIGEge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWZvbnQtY29sb3I7XFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjY0MTk7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmNvbXBhbnktbG9nbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgLmltYWdlLWJhbGxvb24ge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmFsbG9vbjtcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuaW1hZ2UtY2xvdWQge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjbG91ZCA0cyBsaW5lYXIgaW5maW5pdGUgO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYWx0aXR1ZGUge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4MCUsIDgwJSkgc2NhbGVYKC0xKTtcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjbG91ZCA0cyAxcyBsaW5lYXIgaW5maW5pdGUgO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMS44cmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHJpZ2h0OiAycmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gICAgICAgIC5iYXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4udmlkZW8tY2xpcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAtMTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi52aWRlby1yZWZlcmVuY2Uge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbn1cXG5cXG4uaW5kZXgtcGFnZS1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuN3JlbTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoIzg2YmJkOCwgMC44KTsgKi9cXG59XFxuXFxuLnNreS1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9za3kuanBnXFxcIik7XFxuXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcmVtO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XFxufVxcblxcbi5ob21lLWV4cGVyaWVuY2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW0gNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk0LCAxMTgsIDI1NSk7XFxuICAgIC5mb290ZXItY29udGVudCB7XFxuICAgIGNvbG9yOiB3aGVhdDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgLmZvb3Rlci1pY29ucyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hlYXQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbiAgICB9XFxuICAgIC5mb290ZXItbGlua3Mge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbjtcXG4gICAgfVxcbiAgICAuZm9vdGVyLWNvcHlyaWdodHMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIuNnMgZWFzZS1pbjtcXG4gICAgfVxcbiAgICAgICAgLmluZm8tbGlzdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgIGF7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hlYXQ7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBiYWxsb29uIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgfVxcbn0gXFxuXFxuQGtleWZyYW1lcyBjbG91ZCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAyMCUge1xcbiAgICAgICAgcmlnaHQ6IDIwJTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgNDAlIHtcXG4gICAgICAgIHJpZ2h0OiA0MCU7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICByaWdodDogNjAlO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgICByaWdodDogODAlO1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuXFxufSAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgLm5hdmJhci1saXN0IHtcXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLm5hdmJhciB7ICAgXFxuICAgICAgICAubmF2YmFyLWxpc3Qge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB0b3A6IDEwcmVtO1xcbiAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG4gICAgICAgICAgICAubmF2YmFyLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuaGFtYnVyZ2VyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5hY3RpdmUge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAubmF2YmFyLWxpc3Qge1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmhhbWJ1cmdlciB7XFxuICAgICAgICAgICAgICAgIC5iYXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmJhcjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuYmFyOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXItY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmluZm8tbGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXNob3cvaW1hZ2UtMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3NsaWRlc2hvdy9pbWFnZS0zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXNob3cvaW1hZ2UtNS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3NsaWRlc2hvdy9pbWFnZS02LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXNob3cvaW1hZ2UtOC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdGhpbmcrWW91K0NvdWxkK0RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXNob3ctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93LFxcbi5jYi1zbGlkZXNob3c6YWZ0ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogNDByZW07XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHotaW5kZXg6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNiLXNsaWRlc2hvdzphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIC8qIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCguLi9pbWFnZXMvcGF0dGVybi5wbmcpIHJlcGVhdCB0b3AgbGVmdDsgICovXFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGkgc3BhbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDA7XFxuICBhbmltYXRpb246IGltYWdlQW5pbWF0aW9uIDQ4cyBsaW5lYXIgaW5maW5pdGUgMHM7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpIGRpdiB7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBhbmltYXRpb246IHRpdGxlQW5pbWF0aW9uIDQ4cyBsaW5lYXIgaW5maW5pdGUgMHM7XFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGkgZGl2IGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90aGluZyBZb3UgQ291bGQgRG9cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCgxKSBzcGFuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBhbmltYXRpb24tZGVsYXk6IDZzO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBhbmltYXRpb24tZGVsYXk6IDEycztcXG59XFxuXFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNCkgc3BhbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxOHM7XFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDUpIHNwYW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMjRzO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg2KSBzcGFuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICBhbmltYXRpb24tZGVsYXk6IDMwcztcXG59XFxuXFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNykgc3BhbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzNnM7XFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDgpIHNwYW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTtcXG4gIGFuaW1hdGlvbi1kZWxheTogNDJzO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCgxKSBkaXYge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuXFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoMikgZGl2IHtcXG4gIGFuaW1hdGlvbi1kZWxheTogNnM7XFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDMpIGRpdiB7XFxuICBhbmltYXRpb24tZGVsYXk6IDEycztcXG59XFxuXFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNCkgZGl2IHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMThzO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg1KSBkaXYge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAyNHM7XFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDYpIGRpdiB7XFxuICBhbmltYXRpb24tZGVsYXk6IDMwcztcXG59XFxuXFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNykgZGl2IHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMzZzO1xcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg4KSBkaXYge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0MnM7XFxufVxcblxcbkBrZXlmcmFtZXMgaW1hZ2VBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcbiAgOCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG4gIDE3JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdGl0bGVBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgOCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTclIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDE5JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLm5vLWNzc2FuaW1hdGlvbnMgLmNiLXNsaWRlc2hvdyBsaSBzcGFuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuY2Itc2xpZGVzaG93LFxcbi5jYi1zbGlkZXNob3c6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMzByZW07XFxuICB9XFxuXFxuICAuY2Itc2xpZGVzaG93IGxpIGRpdiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zbGlkZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5RUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUE7RUFDSSxzRUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlEQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlEQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlEQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlEQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGQTtFQUNJLHlEQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLHlEQUFBO0VBQ0Esb0JBQUE7QUFNSjs7QUFKQTtFQUNJLHlEQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNJLHlEQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFKQTtFQUNJLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksb0JBQUE7QUFTSjs7QUFQQTtFQUNJLG9CQUFBO0FBVUo7O0FBUkE7RUFDSSxvQkFBQTtBQVdKOztBQVRBO0VBQ0ksb0JBQUE7QUFZSjs7QUFWQTtFQUNJLG9CQUFBO0FBYUo7O0FBWEE7RUFDSSxvQkFBQTtBQWNKOztBQVhBO0VBQ0k7SUFBSyxVQUFBO0lBQVksa0NBQUE7RUFnQm5CO0VBZkU7SUFBSyxVQUFBO0lBQVksbUNBQUE7RUFtQm5CO0VBbEJFO0lBQU0sVUFBQTtFQXFCUjtFQXBCRTtJQUFNLFVBQUE7RUF1QlI7RUF0QkU7SUFBTyxVQUFBO0VBeUJUO0FBQ0Y7QUF2QkE7RUFDSTtJQUFLLFVBQUE7RUEwQlA7RUF6QkU7SUFBSyxVQUFBO0VBNEJQO0VBM0JFO0lBQU0sVUFBQTtFQThCUjtFQTdCRTtJQUFNLFVBQUE7RUFnQ1I7RUEvQkU7SUFBTyxVQUFBO0VBa0NUO0FBQ0Y7QUFoQ0E7RUFDQyxVQUFBO0FBa0NEOztBQS9CQTtFQUNROztJQUVBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUFrQ047O0VBL0JFO0lBQ0ksZUFBQTtFQWtDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdGhpbmcrWW91K0NvdWxkK0RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5zbGlkZXNob3ctY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWcuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XFxufVxcblxcbi5jYi1zbGlkZXNob3csXFxuLmNiLXNsaWRlc2hvdzphZnRlciB7IFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNDByZW07XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHotaW5kZXg6IDA7IFxcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmNiLXNsaWRlc2hvdzphZnRlciB7IFxcbiAgICBjb250ZW50OiAnJztcXG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uL2ltYWdlcy9wYXR0ZXJuLnBuZykgcmVwZWF0IHRvcCBsZWZ0OyAgKi9cXG59XFxuXFxuLmNiLXNsaWRlc2hvdyBsaSBzcGFuIHsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBhbmltYXRpb246IGltYWdlQW5pbWF0aW9uIDQ4cyBsaW5lYXIgaW5maW5pdGUgMHM7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggYmxhY2s7XFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGkgZGl2IHsgXFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBhbmltYXRpb246IHRpdGxlQW5pbWF0aW9uIDQ4cyBsaW5lYXIgaW5maW5pdGUgMHM7IFxcbn1cXG5cXG4uY2Itc2xpZGVzaG93IGxpIGRpdiBoMyB7IFxcbiAgICBmb250LWZhbWlseTogJ05vdGhpbmcgWW91IENvdWxkIERvJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMDBweDsgXFxufVxcblxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDEpIHNwYW4geyBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTEuanBnKTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwczsgXFxufVxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDIpIHNwYW4geyBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTIuanBnKTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA2czsgXFxufVxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDMpIHNwYW4geyBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTMuanBnKSA7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMTJzOyBcXG59XFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNCkgc3BhbiB7IFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXNob3cvaW1hZ2UtNC5qcGcpIDtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxOHM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg1KSBzcGFuIHsgXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL3NsaWRlc2hvdy9pbWFnZS01LmpwZykgO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDI0czsgXFxufVxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDYpIHNwYW4geyBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVzaG93L2ltYWdlLTYuanBnKSA7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMzBzOyBcXG59XFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNykgc3BhbiB7IFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXNob3cvaW1hZ2UtNy5qcGcpIDtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzNnM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg4KSBzcGFuIHsgXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL3NsaWRlc2hvdy9pbWFnZS04LmpwZykgO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDQyczsgXFxufVxcblxcblxcbi5jYi1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDEpIGRpdiB7IFxcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzOyBcXG59XFxuLmNiLXNsaWRlc2hvdyBsaTpudGgtY2hpbGQoMikgZGl2IHsgXFxuICAgIGFuaW1hdGlvbi1kZWxheTogNnM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCgzKSBkaXYgeyBcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMnM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg0KSBkaXYgeyBcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxOHM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg1KSBkaXYgeyBcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNHM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg2KSBkaXYgeyBcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMHM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg3KSBkaXYgeyBcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzNnM7IFxcbn1cXG4uY2Itc2xpZGVzaG93IGxpOm50aC1jaGlsZCg4KSBkaXYgeyBcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0MnM7IFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGltYWdlQW5pbWF0aW9uIHsgXFxuICAgIDAlIHsgb3BhY2l0eTogMDsgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjsgfVxcbiAgICA4JSB7IG9wYWNpdHk6IDE7IGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuICAgIDE3JSB7IG9wYWNpdHk6IDEgfVxcbiAgICAyNSUgeyBvcGFjaXR5OiAwIH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpdGxlQW5pbWF0aW9uIHsgXFxuICAgIDAlIHsgb3BhY2l0eTogMCB9XFxuICAgIDglIHsgb3BhY2l0eTogMSB9XFxuICAgIDE3JSB7IG9wYWNpdHk6IDEgfVxcbiAgICAxOSUgeyBvcGFjaXR5OiAwIH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDAgfVxcbn1cXG5cXG4ubm8tY3NzYW5pbWF0aW9ucyAuY2Itc2xpZGVzaG93IGxpIHNwYW57XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIC5jYi1zbGlkZXNob3csXFxuICAgICAgICAuY2Itc2xpZGVzaG93OmFmdGVyIHsgXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgaGVpZ2h0OiAzMHJlbTtcXG4gICAgfVxcblxcbiAgICAuY2Itc2xpZGVzaG93IGxpIGRpdiBoMyB7IFxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNoZWNrcG9pbnQgPSAyNzUwO1xuY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mb290ZXItY29udGVudF1cIik7XG5jb25zdCBmb290ZXJJY29ucyA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWZvb3Rlci1pY29uc11cIik7XG5jb25zdCBmb290ZXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mb290ZXItbGlua3NdXCIpO1xuY29uc3QgZm9vdGVyQ3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZm9vdGVyLWNwXVwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tTY3JvbGxpbmcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1Njcm9sbGluZygpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGlmIChjdXJyZW50U2Nyb2xsID4gY2hlY2twb2ludCkge1xuICAgICAgICBmb290ZXJDcC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgZm9vdGVySWNvbnMuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIGZvb3RlckxpbmtzLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvb3RlckNwLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBmb290ZXJJY29ucy5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgZm9vdGVyTGlua3Muc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfVxufSIsImNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLWxpc3RcIik7XG5jb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xuXG5uYXZMaW5rLmZvckVhY2gobiA9PiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1lbnUpKTtcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9iaWxlTWVudSk7XG5cbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gbW9iaWxlTWVudSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWtja2VkXCIpO1xuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQge2Nsb3NlTWVudSwgbW9iaWxlTWVudX07IiwiaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3NsaWRlcy5zY3NzXCI7XG5pbXBvcnQge3BsYXlWaWRlb30gZnJvbSBcIi4uL3NjcmlwdHMvdmlkZW9cIjtcbmltcG9ydCB7Y2xvc2VNZW51LCBtb2JpbGVNZW51fSBmcm9tIFwiLi9jb250cm9sc1wiO1xuaW1wb3J0IHtjaGVja1Njcm9sbGluZ30gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XG5cblxuZnVuY3Rpb24gZW50cnlQb2ludCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNjcmlwdCBpcyB3b3JraW5nXCIpO1xuICAgIHBsYXlWaWRlbygpO1xufVxuXG5leHBvcnQge2VudHJ5UG9pbnR9OyIsImNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWxsb29uQ2xpcFwiKTtcblxuZnVuY3Rpb24gcGxheVZpZGVvKCkge1xuICAgIGNvbnNvbGUubG9nKFwidmlkZW8gc2hvdWxkIHBsYXlcIik7XG59XG5cbmV4cG9ydCB7cGxheVZpZGVvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7ZW50cnlQb2ludH0gZnJvbSAnLi9zY3JpcHRzL21haW4nO1xuXG5lbnRyeVBvaW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9