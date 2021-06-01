import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Platform,
  Keyboard,
  Dimensions
} from 'react-native';
import {
  SafeAreaView,
  SafeAreaFrameContext
} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import { ViewPropTypes } from '../utils';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Container extends Component {
  state = {
    keyboardFloating: false
  };
  componentDidMount() {
    this.keyboardWillChangeFrameListener = Keyboard.addListener(
      'keyboardWillChangeFrame',
      this._onKeyboardWillChangeFrame
    );
  }

  componentWillUnmount() {
    this.keyboardWillChangeFrameListener.remove();
  }

  _onKeyboardWillChangeFrame = event => {
    const windowWidth = Dimensions.get('window').width;
    this.setState({
      keyboardFloating: event.endCoordinates.width !== windowWidth
    });
  };
  render() {
    if (this.props.noSafeArea) {
      return Platform.OS === 'ios' ? (
        <SafeAreaFrameContext.Consumer>
          {frame => (
            <KeyboardAvoidingView
              behavior={'padding'}
              enabled={!this.state.keyboardFloating}
              style={{
                flex: 1,
                height: Platform.OS === 'ios' ? frame.height : frame.height - 20
              }}
              ref={c => (this._root = c)}
              {...this.props}
            >
              {this.props.children}
            </KeyboardAvoidingView>
          )}
        </SafeAreaFrameContext.Consumer>
      ) : (
        <SafeAreaFrameContext.Consumer>
          {frame => (
            <View
              style={{
                flex: 1,
                height: Platform.OS === 'ios' ? frame.height : frame.height - 20
              }}
              ref={c => (this._root = c)}
              {...this.props}
            >
              {this.props.children}
            </View>
          )}
        </SafeAreaFrameContext.Consumer>
      );
    }
    return Platform.OS === 'ios' ? (
      <SafeAreaFrameContext.Consumer>
        {frame => (
          <SafeAreaView
            style={{
              flex: 1,
              height: Platform.OS === 'ios' ? frame.height : frame.height - 20
            }}
            edges={
              this.props.hasBottomTabBar
                ? ['right', 'left', 'top']
                : ['bottom', 'left', 'right', 'top']
            }
            ref={c => (this._root = c)}
            {...this.props}
          >
            <KeyboardAvoidingView
              enabled={!this.state.keyboardFloating}
              behavior={'padding'}
              style={{ flex: 1 }}
            >
              {this.props.children}
            </KeyboardAvoidingView>
          </SafeAreaView>
        )}
      </SafeAreaFrameContext.Consumer>
    ) : (
      <SafeAreaFrameContext.Consumer>
        {frame => (
          <SafeAreaView
            edges={
              this.props.hasBottomTabBar
                ? ['right', 'left', 'top']
                : ['bottom', 'left', 'right', 'top']
            }
            style={{
              flex: 1,
              height: Platform.OS === 'ios' ? frame.height : frame.height - 20
            }}
            ref={c => (this._root = c)}
            {...this.props}
          >
            {this.props.children}
          </SafeAreaView>
        )}
      </SafeAreaFrameContext.Consumer>
    );
  }
}

Container.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  noSafeArea: PropTypes.bool,
  hasBottomTabBar: PropTypes.bool
};

const StyledContainer = connectStyle(
  'NativeBase.Container',
  {},
  mapPropsToStyleNames
)(Container);

export { StyledContainer as Container };
