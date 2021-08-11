(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{155:function(module,__webpack_exports__,__webpack_require__){"use strict";var preact__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);__webpack_exports__.a=function Cart(_ref){var _ref$number=_ref.number,number=void 0===_ref$number?0:_ref$number;return Object(preact__WEBPACK_IMPORTED_MODULE_0__.h)("i",{class:"relative"},Object(preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",viewBox:"0 0 20 20",fill:"currentColor"},Object(preact__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})),number>0&&Object(preact__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"absolute -top-2 -right-1"},Object(preact__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"bg-red-500 rounded-full text-white font-mono leading-tight text-center w-4 h-4 text-sm block"},number)))}},457:function(module,exports,__webpack_require__){__webpack_require__(458),__webpack_require__(618),__webpack_require__(619),__webpack_require__(818),__webpack_require__(823),__webpack_require__(824),__webpack_require__(822),__webpack_require__(819),__webpack_require__(825),__webpack_require__(820),__webpack_require__(821),__webpack_require__(826),module.exports=__webpack_require__(812)},525:function(module,exports){},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(329)},812:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(329).configure)([__webpack_require__(813),__webpack_require__(814)],module,!1)}).call(this,__webpack_require__(184)(module))},813:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=813},814:function(module,exports,__webpack_require__){var map={"./components/Header/components/cart/cart.stories.js":815,"./components/Header/header.stories.js":827,"./components/Search/Search.stories.js":828};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=814},815:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Cart",(function(){return Cart}));__webpack_require__(17);var preact__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(155);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"Component/Header/Cart",component:_index__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{number:{control:"number"}},args:{number:5}};var Cart=function Cart(_ref){var args=_extends({},_ref);return Object(preact__WEBPACK_IMPORTED_MODULE_1__.h)(_index__WEBPACK_IMPORTED_MODULE_2__.a,args)};Cart.parameters=Object.assign({storySource:{source:"({ ...args }) => <CartComponent {...args} />"}},Cart.parameters)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(24),__webpack_require__(6),__webpack_require__(50),__webpack_require__(803),__webpack_require__(804),__webpack_require__(49),__webpack_require__(805),__webpack_require__(806),__webpack_require__(807);var client_api=__webpack_require__(835),esm=__webpack_require__(5),parameters=(__webpack_require__(808),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Header",(function(){return header_stories_Header}));__webpack_require__(17);var preact_module=__webpack_require__(3),match=__webpack_require__(437),cart=__webpack_require__(155),components_Header=function Header(_ref){var _ref$cartItems=_ref.cartItems,cartItems=void 0===_ref$cartItems?0:_ref$cartItems;return Object(preact_module.h)("header",{class:"flex justify-between border-b bg-white pb-1"},Object(preact_module.h)(match.Link,{href:"/",class:"flex"},Object(preact_module.h)("img",{src:"/assets/icons/favicon-32x32.png"}),Object(preact_module.h)("h1",{class:"text-black"},"Preact App")),Object(preact_module.h)(cart.a,{number:cartItems}))};function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"Component/Header",component:components_Header,argTypes:{cartItems:{control:"number"}}};var header_stories_Header=function Header(_ref){var args=_extends({},_ref);return Object(preact_module.h)(components_Header,args)};header_stories_Header.parameters=Object.assign({storySource:{source:"({ ...args }) => <HeaderComponent {...args} />"}},header_stories_Header.parameters)},828:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Search",(function(){return Search_stories_Search}));__webpack_require__(17);var preact_module=__webpack_require__(3),hooks_module=(__webpack_require__(817),__webpack_require__(6),__webpack_require__(12),__webpack_require__(9),__webpack_require__(20),__webpack_require__(16),__webpack_require__(14),__webpack_require__(15),__webpack_require__(13),__webpack_require__(7),__webpack_require__(25),__webpack_require__(48));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var components_Search=function Search(_ref){var _ref$onInput=_ref.onInput,onInput=void 0===_ref$onInput?Function.prototype:_ref$onInput,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,_useState2=_slicedToArray(Object(hooks_module.j)(defaultValue),2),value=_useState2[0],setValue=_useState2[1],inputRef=Object(hooks_module.i)(null),handleShortcut=Object(hooks_module.a)((function(event){event.ctrlKey&&"k"===event.key&&(inputRef.current.focus(),event.preventDefault())}),[inputRef]);return Object(hooks_module.d)((function(){return window.addEventListener("keydown",handleShortcut),function(){return window.removeEventListener("keydown",handleShortcut)}}),[handleShortcut]),Object(preact_module.h)("span",{class:"border-b-2 py-2 flex max-w-max items-center group"},Object(preact_module.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Object(preact_module.h)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})),Object(preact_module.h)("input",{type:"text",placeholder:"Quick Search",ref:inputRef,class:"focus-visible:outline-none",value:value,onInput:function handleInput(e){var newValue=e.target.value;setValue(newValue),onInput(newValue)}}),Object(preact_module.h)("span",{class:"hidden sm:block border rounded-md text-sm font-sans text-gray-400 leading-5 py-0.5 px-1.5 group-focus-within:invisible"},"Ctrl K"))};function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"Component/Search",component:components_Search,argTypes:{defaultValue:{control:!1},onInput:{action:"input"}}};var Search_stories_Search=function Search(_ref){var args=_extends({},_ref);return Object(preact_module.h)(components_Search,args)};Search_stories_Search.parameters=Object.assign({storySource:{source:"({ ...args }) => <SearchComponent {...args} />"}},Search_stories_Search.parameters)}},[[457,2,3]]]);