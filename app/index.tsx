import React from 'react';
import {ThemedText} from "@/components/ThemedText";
import {RandomColorContainer} from "@/components/RandomColorContainer";
import TextMainScreen from "@/components/TextMainScreen";
import TextMainList from "@/components/TextMainList";

export default function Index() {
    return (
        <RandomColorContainer>
            <TextMainScreen/>
            {/*Open this component to show history of previous colors*/}
            {false && <TextMainList/>}
        </RandomColorContainer>
    );
}
