import { useState } from "react";

function Experiences({experiences, setExperiences}) {
    const [isEditing, setIsEditing] = useState(true);

    const [experienceInfo, setExperienceInfo] = useState({
        companyName: "Company Name",
        position: "Leader",
        responsabilities: "Manage team, Develop, Maintain",
        dateStart: "2020-01-01",
        dateEnd: "2025-01-01"
    })

    function handleSubmit(e){
        e.preventDefault();
        setIsEditing(false);
    };

    function handleChange(e) {
        const {name, value} = e.target;
        setExperienceInfo({
            ...experienceInfo,
            [name]: value
        });
    };

    function handleEdit() {
       setIsEditing(true);
    };

    function handleAddExperience(e) {
        e.preventDefault();
        if (experienceInfo.companyName && experienceInfo.position) {
            setExperiences([...experiences, experienceInfo])
            setExperienceInfo({
                companyName: "",
                position: "",
                responsabilities: [],
                dateStart: "",
                dateEnd: ""
            });
        }
    };

    function handleRemoveExperience(index) {
        const newExperiences = [...experiences];
        newExperiences.splice(index, 1);
        setExperiences(newExperiences);
    };

    function handleEditExperience(index) {
        const exp = {...experiences[index]};
        setExperienceInfo({
            companyName: exp.companyName,
            position: exp.position,
            responsabilities: exp.responsabilities,
            dateStart: exp.dateStart,
            dateEnd: exp.dateEnd
        });
        handleRemoveExperience(index);
    }

    return ( 
    <section>
        <h2>Experience</h2>
        {isEditing ? (
        <form onSubmit={handleAddExperience}>
            <label htmlFor="companyName">Company Name:</label>
            <input 
                type="text"
                id="companyName"
                value={experienceInfo.companyName}
                name="companyName"
                onChange= {handleChange}
                required
            />
            <label htmlFor="position">Position:</label>
            <input
                type="text"
                id="position"
                value={experienceInfo.position}
                name="position"
                onChange= {handleChange}
                required
            />
            <label htmlFor="responsabilities">Responsabilities:</label>
            <textarea
                id="responsabilities"
                value={experienceInfo.responsabilities}
                name="responsabilities"
                onChange={handleChange}
            />
            <label htmlFor="dateStart">Start date:</label>
            <input
                type="date"
                id="dateStart"
                value={experienceInfo.dateStart}
                name="dateStart"
                onChange= {handleChange}
            />
            <label htmlFor="dateEnd">End date:</label>
            <input
                type="date"
                id="dateEnd"
                value={experienceInfo.dateEnd}
                name="dateEnd"
                onChange= {handleChange}
            />
            <button type="submit">Add Experience</button>
            <button onClick={handleSubmit}>Save</button>

            {experiences.length > 0 && (
                <div>
                    <h2>Added Experiences</h2>
                    {experiences.map((exp, index) => (
                        <div key={index}>
                            <p>{exp.companyName}</p>
                            <p>{exp.position}</p>
                            {exp.dateStart && exp.dateEnd && (
                                <p>{exp.dateStart} to {exp.dateEnd}</p>
                            )}
                            <button onClick={() => handleRemoveExperience(index)}>Remove</button>
                            <button onClick={() => handleEditExperience(index)}>Edit Experience</button>
                        </div>
                    ))}
                </div>
            )}
        </form>) : (
        <div>
            {experiences.length > 0 ? (
                experiences.map((edu, index) => (
                    <div key={index}>
                        <p>{edu.companyName}</p>
                        <p>{edu.position}</p>
                        {edu.dateStart && edu.dateEnd && (
                            <p>{edu.dateStart} to {edu.dateEnd}</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No experience information given.</p>
            )}
            
            <button onClick={handleEdit}>Edit</button>
        </div>
        )}
    </section>
    )
}

export default Experiences