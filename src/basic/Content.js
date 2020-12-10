import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import variable from '../theme/variables/platform';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';

class Content extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {
      children,
      contentContainerStyle,
      padder,
      style,
      disableKBDismissScroll,
      keyboardShouldPersistTaps
    } = this.props;

    const containerStyle = {
      flex: 1,
      backgroundColor: getStyle(style).backgroundColor
    };

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    return (
      <View style={containerStyle}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          ref={c => {
            this._scrollview = c;
            this._root = c;
          }}
          {...this.props}
          contentContainerStyle={[
            { padding: padder ? variables.contentPadding : undefined },
            contentContainerStyle
          ]}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

Content.propTypes = {
  padder: PropTypes.bool,
  isKeyboardAvoiding: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledContent = connectStyle(
  'NativeBase.Content',
  {},
  mapPropsToStyleNames
)(Content);

export { StyledContent as Content };
