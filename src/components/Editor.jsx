import { useState } from "react";

import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experiences from "./Experiences";

function Editor() {
    const [educations, setEducations] = useState([]);

    const [experiences, setExperiences] = useState([]);
    
    return (
        <div>
            <h1>CV Editor</h1>
            <GeneralInfo/>
            <Education
                educations={educations}
                setEducations={setEducations}
            />
            <Experiences 
                experiences={experiences}
                setExperiences={setExperiences}
            />
        </div>
    )
}

export default Editor