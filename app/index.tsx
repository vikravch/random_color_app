import React from 'react';
import {ThemedText} from "@/components/ThemedText";
import {RandomColorContainer} from "@/components/RandomColorContainer";

function Index() {
    return (
        <RandomColorContainer>
            <ThemedText>Hello there</ThemedText>
        </RandomColorContainer>
    );
}

export default Index;