import React, {PropsWithChildren, useCallback, useState} from 'react';
import {Pressable, StyleSheet} from "react-native";
import {generateNewColor} from "@/services";

type RandomColorContainerContextType = {
    currentColor: string,
    setCurrentColor: ( currentColor: string ) => void,
    colorsHistoryList: string[],
}

export const RandomColorContainerContext =
    React.createContext<RandomColorContainerContextType>({
        currentColor: '#ffffff',
        setCurrentColor: (_:string) => {},
        colorsHistoryList: []
})

export const RandomColorContainer: React.FC<PropsWithChildren> =
    ({children}) => {
        const [randomColor, setRandomColor] =
            useState<string>(generateNewColor());
        const [colorsHistoryList, setColorsHistoryList] =
            useState<string[]>([]);
        const randomGenerateHandler = useCallback(
            () => {
                const newColor = generateNewColor();
                setColorsHistoryList([newColor, ...colorsHistoryList]);
                setRandomColor(newColor);
            }, [colorsHistoryList]
        )
        return (
            <RandomColorContainerContext.Provider value={{
                currentColor: randomColor,
                setCurrentColor: setRandomColor,
                colorsHistoryList: colorsHistoryList
            }}>
                <Pressable
                    style={[styles.container, {
                        backgroundColor: randomColor,
                    }]}
                    onPress={randomGenerateHandler}>
                    {children}
                </Pressable>
            </RandomColorContainerContext.Provider>
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