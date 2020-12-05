/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';

class Header extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const { style } = this.props;

    return (
      <View>
        <View
          style={{
            backgroundColor: getStyle(style).backgroundColor
          }}
          ref={c => (this._root = c)}
          {...this.props}
        />
      </View>
    );
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledHeader = connectStyle(
  'NativeBase.Header',
  {},
  mapPropsToStyleNames
)(Header);
export { StyledHeader as Header };
