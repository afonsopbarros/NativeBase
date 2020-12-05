import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
        automaticallyAdjustContentInsets="false"
        keyboardShouldPersistTaps="handled"
        {...this.props}
        contentContainerStyle={[
          { padding: padder ? variables.contentPadding : undefined },
          contentContainerStyle
        ]}
      >
        {children}
      </ScrollView>
    );

    return isKeyboardAvoiding ? (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={containerStyle}
      >
        <ScrollViewStyled />
      </KeyboardAvoidingView>
    ) : (
      <View style={containerStyle}>
        <ScrollViewStyled />
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
