import React, {PropsWithChildren, useCallback, useState} from 'react';
import {Pressable, StyleSheet} from "react-native";
import {generateNewColor} from "@/services";

export const RandomColorContainer: React.FC<PropsWithChildren> =
    ({children}) => {
        const [randomColor, setRandomColor] =
            useState<string>(generateNewColor());
        const randomGenerateHandler = useCallback(
            () => setRandomColor(generateNewColor()), []
        )
        return (
            <Pressable
                style={[styles.container, {
                    backgroundColor: randomColor,
                }]}
                onPress={randomGenerateHandler}>
                {children}
            </Pressable>
        );
    }

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }
})