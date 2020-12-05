import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      isKeyboardAvoiding
    } = this.props;

    const containerStyle = {
      flex: 1,
      backgroundColor: getStyle(style).backgroundColor
    };

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    const ScrollViewStyled = () => (
      <ScrollView
        {...this.props}
        contentContainerStyle={[
          { padding: padder ? variables.contentPadding : undefined },
          contentContainerStyle
        ]}
      >
        {children}
      </ScrollView>
    );

    return (
      <SafeAreaView style={containerStyle}>
        {isKeyboardAvoiding ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <ScrollViewStyled />
          </KeyboardAvoidingView>
        ) : (
          <ScrollViewStyled />
        )}
      </SafeAreaView>
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
