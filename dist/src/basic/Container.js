Object.defineProperty(exports,"__esModule",{value:true});exports.Container=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Container.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _reactNativeSafeAreaContext=require('react-native-safe-area-context');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _utils=require('../utils');var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Container=function(_Component){_inherits(Container,_Component);function Container(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Container);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Container.__proto__||Object.getPrototypeOf(Container)).call.apply(_ref,[this].concat(args))),_this),_this.state={keyboardFloating:false},_this._onKeyboardWillChangeFrame=function(event){var windowWidth=_reactNative.Dimensions.get('window').width;_this.setState({keyboardFloating:event.endCoordinates.width!==windowWidth});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Container,[{key:'componentDidMount',value:function componentDidMount(){this.keyboardWillChangeFrameListener=_reactNative.Keyboard.addListener('keyboardWillChangeFrame',this._onKeyboardWillChangeFrame);}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.keyboardWillChangeFrameListener.remove();}},{key:'render',value:function render(){var _this2=this;if(this.props.noSafeArea){return _reactNative.Platform.OS==='ios'?_react2.default.createElement(_reactNative.KeyboardAvoidingView,_extends({behavior:'padding',enabled:!this.state.keyboardFloating,style:{flex:1},ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:39}}),this.props.children):_react2.default.createElement(_reactNative.KeyboardAvoidingView,_extends({behavior:'padding',enabled:!this.state.keyboardFloating,style:{flex:1},ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:51}}),this.props.children);}return _reactNative.Platform.OS==='ios'?_react2.default.createElement(_reactNativeSafeAreaContext.SafeAreaView,_extends({style:{flex:1},edges:this.props.hasBottomTabBar?['right','left','top']:['bottom','left','right','top'],ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:65}}),_react2.default.createElement(_reactNative.KeyboardAvoidingView,{enabled:!this.state.keyboardFloating,behavior:'padding',style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:77}},this.props.children)):_react2.default.createElement(_reactNativeSafeAreaContext.SafeAreaView,_extends({edges:this.props.hasBottomTabBar?['right','left','top']:['bottom','left','right','top'],style:{flex:1},ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:86}}),_react2.default.createElement(_reactNative.KeyboardAvoidingView,{behavior:'height',style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:98}},this.props.children));}}]);return Container;}(_react.Component);Container.propTypes=_extends({},_utils.ViewPropTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),noSafeArea:_propTypes2.default.bool,hasBottomTabBar:_propTypes2.default.bool});var StyledContainer=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Container',{},_mapPropsToStyleNames2.default)(Container);exports.Container=StyledContainer;
//# sourceMappingURL=Container.js.map