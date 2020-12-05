Object.defineProperty(exports,"__esModule",{value:true});exports.Content=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Content.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _reactNativeGestureHandler=require('react-native-gesture-handler');var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _getStyle=require('../utils/getStyle');var _getStyle2=_interopRequireDefault(_getStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Content=function(_Component){_inherits(Content,_Component);function Content(){_classCallCheck(this,Content);return _possibleConstructorReturn(this,(Content.__proto__||Object.getPrototypeOf(Content)).apply(this,arguments));}_createClass(Content,[{key:'render',value:function render(){var _this2=this;var _props=this.props,children=_props.children,contentContainerStyle=_props.contentContainerStyle,padder=_props.padder,style=_props.style,isKeyboardAvoiding=_props.isKeyboardAvoiding;var containerStyle={flex:1,backgroundColor:(0,_getStyle2.default)(style).backgroundColor};var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;var ScrollViewStyled=function ScrollViewStyled(){return _react2.default.createElement(_reactNativeGestureHandler.ScrollView,_extends({keyboardShouldPersistTaps:'handled'},_this2.props,{contentContainerStyle:[{padding:padder?variables.contentPadding:undefined},contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:34}}),children);};return isKeyboardAvoiding?_react2.default.createElement(_reactNative.KeyboardAvoidingView,{behavior:_reactNative.Platform.OS==='ios'?'padding':'height',style:containerStyle,__source:{fileName:_jsxFileName,lineNumber:47}},_react2.default.createElement(ScrollViewStyled,{__source:{fileName:_jsxFileName,lineNumber:51}})):_react2.default.createElement(_reactNative.View,{style:containerStyle,__source:{fileName:_jsxFileName,lineNumber:54}},_react2.default.createElement(ScrollViewStyled,{__source:{fileName:_jsxFileName,lineNumber:55}}));}}]);return Content;}(_react.Component);Content.contextTypes={theme:_propTypes2.default.object};Content.propTypes={padder:_propTypes2.default.bool,isKeyboardAvoiding:_propTypes2.default.bool,style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])};var StyledContent=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Content',{},_mapPropsToStyleNames2.default)(Content);exports.Content=StyledContent;
//# sourceMappingURL=Content.js.map