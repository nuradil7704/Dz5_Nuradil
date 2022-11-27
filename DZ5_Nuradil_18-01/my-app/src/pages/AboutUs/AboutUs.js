import React, {useState} from "react";
import AboutText from "../AboutText/AboutText";

function AboutUs () {
    const [text, setText] = useState(true);

    const hideText = () => {
        setText(!text)
    }

    return (
        <>
            <button onClick={hideText}>кнопка</button>
            {
                text === true
                    ?
                    <AboutText/>
                    :
                    ""
            }
            </>
    )
}

export default AboutUs;