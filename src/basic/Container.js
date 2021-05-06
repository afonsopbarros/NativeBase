import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Platform } from 'react-native';
import {
  SafeAreaView,
  SafeAreaFrameContext
} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import { ViewPropTypes } from '../utils';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Container extends Component {
  render() {
    if (this.props.noSafeArea) {
      return Platform.OS === 'ios' ? (
        <SafeAreaFrameContext.Consumer>
          {frame => (
            <KeyboardAvoidingView
              behavior={'padding'}
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
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
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
  noSafeArea: PropTypes.bool
};

const StyledContainer = connectStyle(
  'NativeBase.Container',
  {},
  mapPropsToStyleNames
)(Container);

export { StyledContainer as Container };
