import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import { ViewPropTypes } from '../utils';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { View } from 'react-native';

class Container extends Component {
  render() {
    if (this.props.noSafeArea) {
      return Platform.OS === 'ios' ? (
        <KeyboardAvoidingView
          behavior={'padding'}
          style={{ flex: 1 }}
          ref={c => (this._root = c)}
          {...this.props}
        >
          {this.props.children}
        </KeyboardAvoidingView>
      ) : (
        <View style={{ flex: 1 }} ref={c => (this._root = c)} {...this.props}>
          {this.props.children}
        </View>
      );
    }
    return Platform.OS === 'ios' ? (
      <SafeAreaView
        style={{ flex: 1 }}
        ref={c => (this._root = c)}
        {...this.props}
      >
        <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
          {this.props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    ) : (
      <SafeAreaView
        style={{ flex: 1 }}
        ref={c => (this._root = c)}
        {...this.props}
      >
        {this.props.children}
      </SafeAreaView>
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
