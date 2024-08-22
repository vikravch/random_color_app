import React, {useCallback, useContext} from 'react';
import {FlatList, Pressable, View} from "react-native";
import {RandomColorContainerContext} from "@/components/RandomColorContainer";
import {ThemedText} from "@/components/ThemedText";

export default function TextMainList() {
    const { colorsHistoryList, setCurrentColor } = useContext(RandomColorContainerContext);
    const onClickOnItenHandler = useCallback((item: string)=>{
        setCurrentColor(item);
    },[setCurrentColor])
    return (
        <FlatList data={colorsHistoryList} renderItem={
            ({item})=>{
                return (
                    <Pressable onPress={()=>onClickOnItenHandler(item)}>
                        <ThemedText>{item}</ThemedText>
                    </Pressable>
                );
            }}/>
    );
}
