import React, {useContext} from 'react';
import {ThemedText} from "@/components/ThemedText";
import {RandomColorContainerContext} from "@/components/RandomColorContainer";

export default function TextMainScreen() {
    const {currentColor} = useContext(RandomColorContainerContext)
    return (
        <ThemedText>Hello there {currentColor}</ThemedText>
    );
}