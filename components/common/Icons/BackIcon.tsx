import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

interface BackIconProps {
  size?: number;
  color?: string;
}

export const BackIcon: React.FC<BackIconProps> = ({
  size = 24,
  color = 'white',
}) => {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 19l-7-7 7-7"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default BackIcon;
