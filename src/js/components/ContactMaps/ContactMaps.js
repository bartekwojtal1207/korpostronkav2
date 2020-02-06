import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const ContactMaps = () => {

    return (
        <ReactBingmaps
            bingmapKey = "AtgoirrF-zyM1W-6eej-oeFNA0aq6spIqKIJRQ3iNnH2XqSlQlrNyhWZ1lVSw_yM"
            center = {[51.1116416, 17.062197013531108]}
            pushPins = {
                [
                    {
                        "location":[51.1116416, 17.062197013531108], "option":{ color: 'black' }
                    },
                ]
            }
            mapTypeId = {"grayscale"}

        >
        </ReactBingmaps>
    )
};

export default ContactMaps;