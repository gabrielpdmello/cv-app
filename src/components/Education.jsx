import { useState } from "react";

function Education({educations, setEducations}) {
    const [isEditing, setIsEditing] = useState(true);

    const [educationInfo, setEducationInfo] = useState(
        {
            institution: "Univer",
            degree: "IT",
            dateStart: "2020-01-01",
            dateEnd: "2025-01-01"
        }
    );

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    };

    function handleChange(e) {
        const {name, value} = e.target;
        setEducationInfo({
            ...educationInfo,
            [name]: value
        });
    };

    function handleEdit() {
       setIsEditing(true);
    };

    function handleAddEducation(e) {
        e.preventDefault();
        if (educationInfo.institution && educationInfo.degree) {
            setEducations([...educations, educationInfo])
            setEducationInfo({
                institution: "",
                degree: "",
                dateStart: "",
                dateEnd: ""
            });
        }
    };

    function handleRemoveEducation(index) {
        const newEducations = [...educations];
        newEducations.splice(index, 1);
        setEducations(newEducations);
    };

    function handleEditEducation(index) {
        const edu = {...educations[index]};
        setEducationInfo({
            institution: edu.institution,
            degree: edu.degree,
            dateStart: edu.dateStart,
            dateEnd: edu.dateEnd
        });
        handleRemoveEducation(index);
    }

    return ( 
    <section>
        <h2>Education</h2>
        {isEditing ? (
        <form onSubmit={handleAddEducation}>
            <label htmlFor="institution">School / University:</label>
            <input 
                type="text"
                id="institution"
                value={educationInfo.institution}
                name="institution"
                onChange= {handleChange}
                required
            />
            <label htmlFor="degree">Degree:</label>
            <input
                type="text"
                id="degree"
                value={educationInfo.degree}
                name="degree"
                onChange= {handleChange}
                required
            />
            <label htmlFor="dateStart">Start date:</label>
            <input
                type="date"
                id="dateStart"
                value={educationInfo.dateStart}
                name="dateStart"
                onChange= {handleChange}
            />
            <label htmlFor="dateEnd">End date:</label>
            <input
                type="date"
                id="dateEnd"
                value={educationInfo.dateEnd}
                name="dateEnd"
                onChange= {handleChange}
            />
            <button type="submit">Add Education</button>
            <button onClick={handleSubmit}>Save</button>

            {educations.length > 0 && (
                <div>
                    <h2>Added Educations</h2>
                    {educations.map((edu, index) => (
                        <div key={index}>
                            <p>{edu.degree}</p>
                            <p>{edu.institution}</p>
                            {edu.dateStart && edu.dateEnd && (
                                <p>{edu.dateStart} to {edu.dateEnd}</p>
                            )}
                            <button onClick={() => handleRemoveEducation(index)}>Remove</button>
                            <button onClick={() => handleEditEducation(index)}>Edit Education</button>
                        </div>
                    ))}
                </div>
            )}
        </form>) : (
        <div>
            {educations.length > 0 ? (
                educations.map((edu, index) => (
                    <div key={index}>
                        <p>{edu.degree}</p>
                        <p>{edu.institution}</p>
                        {edu.dateStart && edu.dateEnd && (
                            <p>{edu.dateStart} to {edu.dateEnd}</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No education information given.</p>
            )}
            
            <button onClick={handleEdit}>Edit</button>
        </div>
        )}
    </section>
    )
}

export default Education