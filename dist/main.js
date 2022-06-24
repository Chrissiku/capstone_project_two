/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fetchMovieLikes.js":
/*!****************************************!*\
  !*** ./src/modules/fetchMovieLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */
var fetchMovieLikes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var likedItems;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            likedItems = [];
            _context.next = 3;
            return fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes').then(function (response) {
              return response.json();
            }).then(function (res) {
              likedItems = res;
              return likedItems;
            });

          case 3:
            return _context.abrupt("return", likedItems);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchMovieLikes() {
    return _ref.apply(this, arguments);
  };
}();

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */



var likeMovie = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var allMovies, likesBtn, spans;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

          case 2:
            allMovies = _context.sent;
            likesBtn = document.querySelectorAll('.like');
            spans = document.querySelectorAll('#count-like');
            likesBtn.forEach(function (a, i) {
              var h = JSON.parse(spans[i].innerHTML);
              a.addEventListener('click', function () {
                (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allMovies[i].name);
                h += 1;
                spans[i].innerHTML = h;
              });
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function likeMovie() {
    return _ref.apply(this, arguments);
  };
}();

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
var postLike = function postLike(movies) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      item_id: movies
    })
  });
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var commentModal = document.getElementById('comment-popup');
var count = 0;
var counter = document.getElementById('count');
var moviesCards = document.getElementById('container');
var currentValue = 0;
var appId = 'jQcwh1wRBsAT8XgABb4X';
var invUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/comments");

var fetchComments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(itemId) {
    var comments, data, commentHead, commentList, noComment;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(invUrl, "?item_id=").concat(itemId));

          case 3:
            comments = _context.sent;
            _context.next = 6;
            return comments.json();

          case 6:
            data = _context.sent;
            commentHead = document.querySelector('.comm-header');
            commentList = document.querySelector('.comment-list');

            if (data.length > 0) {
              commentHead.innerHTML = "Comments(".concat(data.length, ")");
              commentList.innerHTML = '';
              data.forEach(function (comm) {
                var commentItem = "        \n        <p>".concat(comm.creation_date, " ").concat(comm.username, ": ").concat(comm.comment, "</p>\n      ");
                commentList.innerHTML += commentItem;
              });
            } else {
              commentHead.innerHTML = 'Comments(0)';
              noComment = "\n      <p>No comment on this post</p>\n      ";
              commentList.innerHTML = noComment;
            }

            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            throw new Error('Request error: ', _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function fetchComments(_x) {
    return _ref.apply(this, arguments);
  };
}();

var postComment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(itemId) {
    var username, comment, response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = document.querySelector('.username');
            comment = document.querySelector('.usermassage');

            if (!(username.value !== '' || comment.value !== '')) {
              _context2.next = 19;
              break;
            }

            _context2.prev = 3;
            _context2.next = 6;
            return fetch(invUrl, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                item_id: itemId,
                username: username.value,
                comment: comment.value
              })
            });

          case 6:
            response = _context2.sent;
            data = response.text();

            if (!response.ok) {
              _context2.next = 13;
              break;
            }

            username.value = '';
            comment.value = '';
            fetchComments(itemId);
            return _context2.abrupt("return", data);

          case 13:
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](3);
            throw new Error('Request error: ', _context2.t0);

          case 18:
            return _context2.abrupt("return", true);

          case 19:
            return _context2.abrupt("return", false);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 15]]);
  }));

  return function postComment(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var closePopupModal = function closePopupModal() {
  var closeIcon = document.querySelector('#close');
  closeIcon.addEventListener('click', function (e) {
    e.preventDefault();
    commentModal.style.display = 'none';
  });
};

var showCommentModal = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var arr, commentBtns;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

          case 2:
            arr = _context3.sent;
            commentBtns = document.querySelectorAll('.comment-btn');
            commentBtns.forEach(function (commentBtn) {
              var btnId = commentBtn.getAttribute('id');
              var movieDetails = arr[btnId];
              commentBtn.addEventListener('click', function () {
                fetchComments(btnId);
                var modal = "          \n      <div class=\"comment-modal\">\n      <button type=\"button\" id=\"close\" class=\"close-comment-bn\">\n        <i class=\"fa-solid fa-xmark\"></i>\n      </button>\n      <div class=\"card-details\">\n        <img src=\"".concat(movieDetails.image.original, "\" alt=\"Card original image\" />\n        <h3>").concat(movieDetails.name, "</h3>\n        <ul class=\"more-info\">\n          <li>\n            <span><strong> Language </strong>: ").concat(movieDetails.language, "</span>\n            <span><strong> Genre </strong>: ").concat(movieDetails.genres, "</span>\n          </li>\n          <li>\n            <span><strong> Runtime </strong>: ").concat(movieDetails.runtime, " minutes</span>\n            <span><strong> premiered </strong>: ").concat(movieDetails.premiered, "</span>\n          </li>\n        </ul>\n        <p class=\"summary\">").concat(movieDetails.summary, "</p>\n        <div class=\"card-comment\">\n          <h3 class=\"comm-header\"></h3>\n          <div class=\"comment-area\">\n            <div class=\"comment-list\">\n            </div>\n            <form autocomplete=\"off\" id=\"comment-form\">\n              <input type=\"text\" class=\"username\" name=\"name\" id=\"name\" placeholder=\"Your name\"/>\n              <textarea name=\"message\" class=\"usermassage\" id=\"\" cols=\"30\" rows=\"5\" placeholder=\"Your Insight\" ></textarea>\n              <button class=\"new-comment\" id=\"").concat(btnId, "\" type=\"button\">Comment</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n      ");
                commentModal.innerHTML = modal;
                commentModal.style.display = 'block';
                closePopupModal();
                var cmntBtn = document.querySelector('.new-comment');
                cmntBtn.addEventListener('click', function () {
                  postComment(btnId);
                });
              });
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function showCommentModal() {
    return _ref3.apply(this, arguments);
  };
}(); // Render all Movies card


var renderMovies = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var arr;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

          case 2:
            arr = _context4.sent;
            arr.slice(0, 10).forEach(function (movie) {
              (0,_fetchMovieLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (res) {
                currentValue = res;
                var assignLike = 0;
                var like = currentValue.filter(function (element) {
                  return element.item_id === movie.name;
                });

                if (like.length === 0) {
                  assignLike = 0;
                } else {
                  assignLike = like[0].likes;
                }

                moviesCards.innerHTML += "\n        <div class=\"main-card\" id=\"".concat(arr.indexOf(movie), "\">\n          <img src=\"").concat(movie.image.medium, "\" alt=\"").concat(movie.name, "\" />\n          <div class=\"list-movies\">\n            <h2 class=\"title\">", "".concat(movie.name.substring(0, 15)), "</h2>\n            <div>\n              <button type=\"button\" class=\"like\"><i class=\"fa-solid fa-thumbs-up\"></i><span id=\"count-like\">").concat(assignLike, "</span></button>\n            </div>\n          </div>\n          <div class=\"card-text\">        \n            <p>", "".concat(movie.summary.substring(0, 80), " ..."), "</p>\n          </div>\n            <button type=\"button\" class=\"comment-btn\" id=\"").concat(arr.indexOf(movie), "\">Read more & comments</button>\n        </div>");
                showCommentModal();
              });
              count += 1;
            });
            counter.innerText = "(".concat(count * 2, ")");
            counter.style.color = 'red';

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function renderMovies() {
    return _ref4.apply(this, arguments);
  };
}();

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */
var fetchFromApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var moviesArray;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            moviesArray = [];
            _context.next = 3;
            return fetch('https://api.tvmaze.com/shows?page=1').then(function (response) {
              return response.json();
            }).then(function (response) {
              moviesArray = response;
            });

          case 3:
            return _context.abrupt("return", moviesArray);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchFromApi() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchFromApi);

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_960_720.png\");\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  background: rgba(0, 0, 0, 0.911);\r\n  box-shadow: 3px 3px 3px rgba(99, 96, 96, 0.719);\r\n  z-index: 1;\r\n}\r\n\r\nheader a.logo {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  background: rgba(255, 0, 0, 0.5);\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-radius: 50px 0 50px 0;\r\n}\r\n\r\nheader nav {\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul li {\r\n  width: 40%;\r\n  background: rgb(48, 46, 46);\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul li:hover,\r\nheader nav ul li:focus {\r\n  background: rgb(90, 87, 87);\r\n}\r\n\r\nheader nav ul li a {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nheader nav ul li:hover > a {\r\n  color: rgba(238, 119, 119, 0.822);\r\n  font-weight: 500;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.719);\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .main-card {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.432);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .main-card img {\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  /* display: none; */\r\n}\r\n\r\nmain section.container .main-card .list-movies {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .main-card .list-movies h2 {\r\n  font-size: 20px;\r\n  color: rgb(235, 143, 143);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i:hover,\r\nmain section.container .main-card .list-movies div button i:focus {\r\n  color: rgba(243, 78, 78, 0.973);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .main-card .card-text {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .main-card .card-text p {\r\n  color: #fff;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .main-card .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\nmain section.container .main-card .comment-btn:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\n/* COMMENT POPUP */\r\n\r\nsection.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(1, 1, 26, 0.7);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.comment-popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: rgba(0, 0, 0, 0.466);\r\n  border: 2px solid rgba(25, 238, 25, 0.849);\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: rgba(233, 97, 97, 0.39);\r\n  border: 2px solid #fff;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn:hover,\r\nsection.comment-popup .comment-modal .close-comment-bn:focus {\r\n  background-color: rgba(255, 0, 0, 0.932);\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details h3 {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.493);\r\n  padding: 20px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span strong {\r\n  color: green;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: rgb(20, 11, 11);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  background-color: rgba(124, 104, 104, 0.363);\r\n  color: #fff;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: rgba(172, 134, 134, 0.938);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n/* Desktop media query */\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav {\r\n    width: auto;\r\n  }\r\n\r\n  header nav ul {\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    gap: 20px;\r\n  }\r\n\r\n  header nav ul li {\r\n    width: auto;\r\n    background: none;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n  }\r\n\r\n  header nav ul li:hover,\r\n  header nav ul li:focus {\r\n    background: rgb(90, 87, 87);\r\n  }\r\n\r\n  header nav ul li a {\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  main section.container {\r\n    margin: 120px auto;\r\n  }\r\n\r\n  section.comment-popup .comment-modal {\r\n    width: 60%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn {\r\n    width: 40px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn i {\r\n    font-size: 30px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details img {\r\n    width: 80%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details .more-info {\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: auto;\r\n    text-align: left;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-image: url(\"https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_960_720.png\");\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  background: rgba(0, 0, 0, 0.911);\r\n  box-shadow: 3px 3px 3px rgba(99, 96, 96, 0.719);\r\n  z-index: 1;\r\n}\r\n\r\nheader a.logo {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  background: rgba(255, 0, 0, 0.5);\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-radius: 50px 0 50px 0;\r\n}\r\n\r\nheader nav {\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul li {\r\n  width: 40%;\r\n  background: rgb(48, 46, 46);\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul li:hover,\r\nheader nav ul li:focus {\r\n  background: rgb(90, 87, 87);\r\n}\r\n\r\nheader nav ul li a {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nheader nav ul li:hover > a {\r\n  color: rgba(238, 119, 119, 0.822);\r\n  font-weight: 500;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.719);\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .main-card {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.432);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .main-card img {\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  /* display: none; */\r\n}\r\n\r\nmain section.container .main-card .list-movies {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .main-card .list-movies h2 {\r\n  font-size: 20px;\r\n  color: rgb(235, 143, 143);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .main-card .list-movies div button i:hover,\r\nmain section.container .main-card .list-movies div button i:focus {\r\n  color: rgba(243, 78, 78, 0.973);\r\n}\r\n\r\nmain section.container .main-card .list-movies div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .main-card .card-text {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .main-card .card-text p {\r\n  color: #fff;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .main-card .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\nmain section.container .main-card .comment-btn:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\n/* COMMENT POPUP */\r\n\r\nsection.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(1, 1, 26, 0.7);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.comment-popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: rgba(0, 0, 0, 0.466);\r\n  border: 2px solid rgba(25, 238, 25, 0.849);\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: rgba(233, 97, 97, 0.39);\r\n  border: 2px solid #fff;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.comment-popup .comment-modal .close-comment-bn:hover,\r\nsection.comment-popup .comment-modal .close-comment-bn:focus {\r\n  background-color: rgba(255, 0, 0, 0.932);\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details h3 {\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.493);\r\n  padding: 20px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .more-info li span strong {\r\n  color: green;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.comment-popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: rgb(20, 11, 11);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  background-color: rgba(124, 104, 104, 0.363);\r\n  color: #fff;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: rgba(172, 134, 134, 0.938);\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(38, 100, 38, 0.548);\r\n  color: rgba(243, 78, 78, 0.973);\r\n  border: 1px solid green;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: green;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n/* Desktop media query */\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav {\r\n    width: auto;\r\n  }\r\n\r\n  header nav ul {\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    gap: 20px;\r\n  }\r\n\r\n  header nav ul li {\r\n    width: auto;\r\n    background: none;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n  }\r\n\r\n  header nav ul li:hover,\r\n  header nav ul li:focus {\r\n    background: rgb(90, 87, 87);\r\n  }\r\n\r\n  header nav ul li a {\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  main section.container {\r\n    margin: 120px auto;\r\n  }\r\n\r\n  section.comment-popup .comment-modal {\r\n    width: 60%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn {\r\n    width: 40px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .close-comment-bn i {\r\n    font-size: 30px;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details img {\r\n    width: 80%;\r\n  }\r\n\r\n  section.comment-popup .comment-modal .card-details .more-info {\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: auto;\r\n    text-align: left;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var body = document.querySelector("body");
body.addEventListener("click", function () {
  (0,_modules_likeFeature_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxL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QUNBOztBQUNBOztBQUNBOztBQUVBd0UsZ0VBQVk7QUFDWixJQUFNcEQsSUFBSSxHQUFHZixRQUFRLENBQUMrQixhQUFULENBQXVCLE1BQXZCLENBQWI7QUFFQWhCLElBQUksQ0FBQ0wsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtFQUNuQ2IsbUVBQVM7QUFDVixDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9tb2R1bGVzL2ZldGNoTW92aWVMaWtlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9tb2R1bGVzL2xpa2VGZWF0dXJlLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL21vZHVsZXMvbGlrZXNBcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9zcmMvbW9kdWxlcy9wYWdlQm9keS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9tb2R1bGVzL3JlbmRlck1vdmllcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZV9wcm9qZWN0X3R3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmVfcHJvamVjdF90d28vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NhcHN0b25lX3Byb2plY3RfdHdvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5jb25zdCBmZXRjaE1vdmllTGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGxpa2VkSXRlbXMgPSBbXTtcclxuICBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iajMzT0VRWDM0UlB3b0dlSjhlSi9saWtlcycsXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGxpa2VkSXRlbXMgPSByZXM7XHJcbiAgICAgIHJldHVybiBsaWtlZEl0ZW1zO1xyXG4gICAgfSk7XHJcbiAgcmV0dXJuIGxpa2VkSXRlbXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaE1vdmllTGlrZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgZmV0Y2hGcm9tQXBpIGZyb20gJy4vcmVuZGVyTW92aWVzLmpzJztcclxuaW1wb3J0IHBvc3RMaWtlIGZyb20gJy4vbGlrZXNBcGkuanMnO1xyXG5cclxuY29uc3QgbGlrZU1vdmllID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFsbE1vdmllcyA9IGF3YWl0IGZldGNoRnJvbUFwaSgpO1xyXG5cclxuICBjb25zdCBsaWtlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XHJcbiAgY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY291bnQtbGlrZScpO1xyXG4gIGxpa2VzQnRuLmZvckVhY2goKGEsIGkpID0+IHtcclxuICAgIGxldCBoID0gSlNPTi5wYXJzZShzcGFuc1tpXS5pbm5lckhUTUwpO1xyXG5cclxuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHBvc3RMaWtlKGFsbE1vdmllc1tpXS5uYW1lKTtcclxuICAgICAgaCArPSAxO1xyXG4gICAgICBzcGFuc1tpXS5pbm5lckhUTUwgPSBoO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaWtlTW92aWU7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5jb25zdCBwb3N0TGlrZSA9IChtb3ZpZXMpID0+IHtcclxuICBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iajMzT0VRWDM0UlB3b0dlSjhlSi9saWtlcycsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IG1vdmllcyxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZTtcclxuIiwiaW1wb3J0IGZldGNoRnJvbUFwaSBmcm9tICcuL3JlbmRlck1vdmllcy5qcyc7XG5pbXBvcnQgZmV0Y2hNb3ZpZUxpa2VzIGZyb20gJy4vZmV0Y2hNb3ZpZUxpa2VzLmpzJztcblxuY29uc3QgY29tbWVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtcG9wdXAnKTtcbmxldCBjb3VudCA9IDA7XG5jb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XG5jb25zdCBtb3ZpZXNDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmxldCBjdXJyZW50VmFsdWUgPSAwO1xuXG5jb25zdCBhcHBJZCA9ICdqUWN3aDF3UkJzQVQ4WGdBQmI0WCc7XG5jb25zdCBpbnZVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vY29tbWVudHNgO1xuXG5jb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goYCR7aW52VXJsfT9pdGVtX2lkPSR7aXRlbUlkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb21tZW50cy5qc29uKCk7XG4gICAgY29uc3QgY29tbWVudEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbS1oZWFkZXInKTtcbiAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb21tZW50SGVhZC5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtkYXRhLmxlbmd0aH0pYDtcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKChjb21tKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gYCAgICAgICAgXG4gICAgICAgIDxwPiR7Y29tbS5jcmVhdGlvbl9kYXRlfSAke2NvbW0udXNlcm5hbWV9OiAke2NvbW0uY29tbWVudH08L3A+XG4gICAgICBgO1xuICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gY29tbWVudEl0ZW07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudEhlYWQuaW5uZXJIVE1MID0gJ0NvbW1lbnRzKDApJztcbiAgICAgIGNvbnN0IG5vQ29tbWVudCA9IGBcbiAgICAgIDxwPk5vIGNvbW1lbnQgb24gdGhpcyBwb3N0PC9wPlxuICAgICAgYDtcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IG5vQ29tbWVudDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBlcnJvcjogJywgZXJyKTtcbiAgfVxufTtcblxuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm1hc3NhZ2UnKTtcblxuICBpZiAodXNlcm5hbWUudmFsdWUgIT09ICcnIHx8IGNvbW1lbnQudmFsdWUgIT09ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW52VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS50ZXh0KCk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBmZXRjaENvbW1lbnRzKGl0ZW1JZCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGVycm9yOiAnLCBlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBjbG9zZVBvcHVwTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb21tZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93Q29tbWVudE1vZGFsID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcnIgPSBhd2FpdCBmZXRjaEZyb21BcGkoKTtcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgoY29tbWVudEJ0bikgPT4ge1xuICAgIGNvbnN0IGJ0bklkID0gY29tbWVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgbW92aWVEZXRhaWxzID0gYXJyW2J0bklkXTtcbiAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmV0Y2hDb21tZW50cyhidG5JZCk7XG4gICAgICBjb25zdCBtb2RhbCA9IGAgICAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1tb2RhbFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZVwiIGNsYXNzPVwiY2xvc2UtY29tbWVudC1iblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxzXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZURldGFpbHMuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiQ2FyZCBvcmlnaW5hbCBpbWFnZVwiIC8+XG4gICAgICAgIDxoMz4ke21vdmllRGV0YWlscy5uYW1lfTwvaDM+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IExhbmd1YWdlIDwvc3Ryb25nPjogJHttb3ZpZURldGFpbHMubGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz4gR2VucmUgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5nZW5yZXN9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz4gUnVudGltZSA8L3N0cm9uZz46ICR7bW92aWVEZXRhaWxzLnJ1bnRpbWV9IG1pbnV0ZXM8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48c3Ryb25nPiBwcmVtaWVyZWQgPC9zdHJvbmc+OiAke21vdmllRGV0YWlscy5wcmVtaWVyZWR9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPiR7bW92aWVEZXRhaWxzLnN1bW1hcnl9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb21tZW50XCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiY29tbS1oZWFkZXJcIj48L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIi8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGNsYXNzPVwidXNlcm1hc3NhZ2VcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRcIiA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1jb21tZW50XCIgaWQ9XCIke2J0bklkfVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICBjb21tZW50TW9kYWwuaW5uZXJIVE1MID0gbW9kYWw7XG4gICAgICBjb21tZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjbG9zZVBvcHVwTW9kYWwoKTtcblxuICAgICAgY29uc3QgY21udEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY29tbWVudCcpO1xuICAgICAgY21udEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9zdENvbW1lbnQoYnRuSWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gUmVuZGVyIGFsbCBNb3ZpZXMgY2FyZFxuY29uc3QgcmVuZGVyTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcnIgPSBhd2FpdCBmZXRjaEZyb21BcGkoKTtcbiAgYXJyLnNsaWNlKDAsIDEwKS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIGZldGNoTW92aWVMaWtlcygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY3VycmVudFZhbHVlID0gcmVzO1xuICAgICAgbGV0IGFzc2lnbkxpa2UgPSAwO1xuXG4gICAgICBjb25zdCBsaWtlID0gY3VycmVudFZhbHVlLmZpbHRlcihcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaXRlbV9pZCA9PT0gbW92aWUubmFtZSxcbiAgICAgICk7XG4gICAgICBpZiAobGlrZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXNzaWduTGlrZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ25MaWtlID0gbGlrZVswXS5saWtlcztcbiAgICAgIH1cbiAgICAgIG1vdmllc0NhcmRzLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNhcmRcIiBpZD1cIiR7YXJyLmluZGV4T2YobW92aWUpfVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHttb3ZpZS5uYW1lfVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbW92aWVzXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7YCR7bW92aWUubmFtZS5zdWJzdHJpbmcoMCwgMTUpfWB9PC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlrZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdGh1bWJzLXVwXCI+PC9pPjxzcGFuIGlkPVwiY291bnQtbGlrZVwiPiR7YXNzaWduTGlrZX08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxwPiR7YCR7bW92aWUuc3VtbWFyeS5zdWJzdHJpbmcoMCwgODApfSAuLi5gfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudC1idG5cIiBpZD1cIiR7YXJyLmluZGV4T2YoXG4gICAgbW92aWUsXG4gICl9XCI+UmVhZCBtb3JlICYgY29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgIHNob3dDb21tZW50TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvdW50ICs9IDE7XG4gIH0pO1xuXG4gIGNvdW50ZXIuaW5uZXJUZXh0ID0gYCgke2NvdW50ICogMn0pYDtcbiAgY291bnRlci5zdHlsZS5jb2xvciA9ICdyZWQnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTW92aWVzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmNvbnN0IGZldGNoRnJvbUFwaSA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgbW92aWVzQXJyYXkgPSBbXTtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTEnKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbW92aWVzQXJyYXkgPSByZXNwb25zZTtcclxuICAgIH0pO1xyXG4gIHJldHVybiBtb3ZpZXNBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoRnJvbUFwaTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzIzLzE3LzMzL2N1cnRhaW4tMTI3NTIwMF85NjBfNzIwLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTExKTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoOTksIDk2LCA5NiwgMC43MTkpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEubG9nbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgNTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0OCwgNDYsIDQ2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIsXFxyXFxuaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoOTAsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIgPiBhIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIzOCwgMTE5LCAxMTksIDAuODIyKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDE4MHB4IGF1dG87XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgcm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcblxcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMjM1LCAxNDMsIDE0Myk7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyBkaXYgYnV0dG9uIGkge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmdiYSgyNDMsIDc4LCA3OCwgMC45NzMpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNhcmQtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jYXJkLXRleHQgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTAwLCAzOCwgMC41NDgpO1xcclxcbiAgY29sb3I6IHJnYmEoMjQzLCA3OCwgNzgsIDAuOTczKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT01NRU5UIFBPUFVQICovXFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDI2LCAwLjcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNSwgMjM4LCAyNSwgMC44NDkpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgOTcsIDk3LCAwLjM5KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuOmhvdmVyLFxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45MzIpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBoMyB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OTMpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHNwYW4gc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTEsIDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNCwgMTA0LCAxMDQsIDAuMzYzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE3MiwgMTM0LCAxMzQsIDAuOTM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzgsIDEwMCwgMzgsIDAuNTQ4KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0MywgNzgsIDc4LCAwLjk3Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgbWVkaWEgcXVlcnkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpOmhvdmVyLFxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgODcsIDg3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gc2VjdGlvbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDEyMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxtR0FBbUc7QUFDckc7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywrQ0FBK0M7RUFDL0MsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNC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O0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzIzLzE3LzMzL2N1cnRhaW4tMTI3NTIwMF85NjBfNzIwLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTExKTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoOTksIDk2LCA5NiwgMC43MTkpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEubG9nbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgNTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0OCwgNDYsIDQ2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIsXFxyXFxuaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoOTAsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGk6aG92ZXIgPiBhIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIzOCwgMTE5LCAxMTksIDAuODIyKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDE4MHB4IGF1dG87XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgcm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcblxcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMjM1LCAxNDMsIDE0Myk7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLm1haW4tY2FyZCAubGlzdC1tb3ZpZXMgZGl2IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5saXN0LW1vdmllcyBkaXYgYnV0dG9uIGkge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmdiYSgyNDMsIDc4LCA3OCwgMC45NzMpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmxpc3QtbW92aWVzIGRpdiBidXR0b24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5tYWluLWNhcmQgLmNhcmQtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jYXJkLXRleHQgcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTAwLCAzOCwgMC41NDgpO1xcclxcbiAgY29sb3I6IHJnYmEoMjQzLCA3OCwgNzgsIDAuOTczKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAubWFpbi1jYXJkIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT01NRU5UIFBPUFVQICovXFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDI2LCAwLjcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNSwgMjM4LCAyNSwgMC44NDkpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgOTcsIDk3LCAwLjM5KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuOmhvdmVyLFxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45MzIpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBoMyB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OTMpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkgc3BhbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHNwYW4gc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTEsIDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNCwgMTA0LCAxMDQsIDAuMzYzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE3MiwgMTM0LCAxMzQsIDAuOTM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzgsIDEwMCwgMzgsIDAuNTQ4KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0MywgNzgsIDc4LCAwLjk3Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgbWVkaWEgcXVlcnkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpOmhvdmVyLFxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgODcsIDg3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gc2VjdGlvbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDEyMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbi5jb21tZW50LXBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4gaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24uY29tbWVudC1wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uLmNvbW1lbnQtcG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXHJcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgcmVuZGVyTW92aWVzIGZyb20gXCIuL21vZHVsZXMvcGFnZUJvZHkuanNcIjtcclxuaW1wb3J0IGxpa2VNb3ZpZSBmcm9tIFwiLi9tb2R1bGVzL2xpa2VGZWF0dXJlLmpzXCI7XHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aXBsZS1lbXB0eS1saW5lcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXHJcblxyXG5yZW5kZXJNb3ZpZXMoKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGxpa2VNb3ZpZSgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImZldGNoTW92aWVMaWtlcyIsImxpa2VkSXRlbXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJmZXRjaEZyb21BcGkiLCJwb3N0TGlrZSIsImxpa2VNb3ZpZSIsImFsbE1vdmllcyIsImxpa2VzQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BhbnMiLCJmb3JFYWNoIiwiYSIsImkiLCJoIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hbWUiLCJtb3ZpZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsIml0ZW1faWQiLCJjb21tZW50TW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImNvdW50IiwiY291bnRlciIsIm1vdmllc0NhcmRzIiwiY3VycmVudFZhbHVlIiwiYXBwSWQiLCJpbnZVcmwiLCJmZXRjaENvbW1lbnRzIiwiaXRlbUlkIiwiY29tbWVudHMiLCJkYXRhIiwiY29tbWVudEhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29tbWVudExpc3QiLCJsZW5ndGgiLCJjb21tIiwiY29tbWVudEl0ZW0iLCJjcmVhdGlvbl9kYXRlIiwidXNlcm5hbWUiLCJjb21tZW50Iiwibm9Db21tZW50IiwiRXJyb3IiLCJwb3N0Q29tbWVudCIsInZhbHVlIiwidGV4dCIsIm9rIiwiY2xvc2VQb3B1cE1vZGFsIiwiY2xvc2VJY29uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0NvbW1lbnRNb2RhbCIsImFyciIsImNvbW1lbnRCdG5zIiwiY29tbWVudEJ0biIsImJ0bklkIiwiZ2V0QXR0cmlidXRlIiwibW92aWVEZXRhaWxzIiwibW9kYWwiLCJpbWFnZSIsIm9yaWdpbmFsIiwibGFuZ3VhZ2UiLCJnZW5yZXMiLCJydW50aW1lIiwicHJlbWllcmVkIiwic3VtbWFyeSIsImNtbnRCdG4iLCJyZW5kZXJNb3ZpZXMiLCJzbGljZSIsIm1vdmllIiwiYXNzaWduTGlrZSIsImxpa2UiLCJmaWx0ZXIiLCJlbGVtZW50IiwibGlrZXMiLCJpbmRleE9mIiwibWVkaXVtIiwic3Vic3RyaW5nIiwiaW5uZXJUZXh0IiwiY29sb3IiLCJtb3ZpZXNBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=