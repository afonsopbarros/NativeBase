import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import { ViewPropTypes } from '../utils';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { SafeAreaView } from 'react-native-safe-area-context';

class Container extends Component {
  render() {
    return (
      <SafeAreaView ref={c => (this._root = c)} {...this.props}>
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
  ])
};

const StyledContainer = connectStyle(
  'NativeBase.Container',
  {},
  mapPropsToStyleNames
)(Container);

export { StyledContainer as Container };
