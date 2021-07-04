import React from 'react';
import {
    View, Text
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
    hasCheckBox?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = true,
    ...rest
}: Props) {
    const { secondary50, secondary70, heading, secondary85, secondary40 } = theme.colors;
    return (
        <RectButton {...rest}>
            <LinearGradient
                colors={[secondary50, secondary70]}
                style={styles.container}>
                <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                colors={[checked ? secondary85  : secondary50, secondary40]}>
                    { hasCheckBox &&
                    <View style={checked ? styles.checked : styles.notChecked} />
                    }
                    <Icon width={48} height={48} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}