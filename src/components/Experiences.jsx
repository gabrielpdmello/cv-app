import { useState } from "react";

function Experiences({ experiences, setExperiences }) {
    const [isEditing, setIsEditing] = useState(true);

    const [experienceInfo, setExperienceInfo] = useState({
        companyName: "Company Name",
        position: "Leader",
        responsabilities: "Manage team, Develop, Maintain",
        dateStart: "2020-01-01",
        dateEnd: "2025-01-01"
    })

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    };

    function handleChange(e) {
        const { name, value } = e.target;
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
        const exp = { ...experiences[index] };
        setExperienceInfo({
            companyName: exp.companyName,
            position: exp.position,
            responsabilities: exp.responsabilities,
            dateStart: exp.dateStart,
            dateEnd: exp.dateEnd
        });
        handleRemoveExperience(index);
    }

    return (<>
        {isEditing ? (<section>
            <form onSubmit={handleAddExperience}>
                <div className="cv-section-header">
                    <h2>Experience</h2>
                    <button onClick={handleSubmit}>Save</button>
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        value={experienceInfo.companyName}
                        name="companyName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        value={experienceInfo.position}
                        name="position"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="responsabilities">Responsabilities:</label>
                    <textarea
                        id="responsabilities"
                        value={experienceInfo.responsabilities}
                        name="responsabilities"
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="dateStart">Start date:</label>
                        <input
                            type="date"
                            id="dateStart"
                            value={experienceInfo.dateStart}
                            name="dateStart"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateEnd">End date:</label>
                        <input
                            type="date"
                            id="dateEnd"
                            value={experienceInfo.dateEnd}
                            name="dateEnd"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit">Add Experience</button>

                {experiences.length > 0 && (<div>
                    <h2>Added Experiences</h2>
                    {experiences.map((exp, index) => (<div key={index}>
                        <p>{exp.companyName}</p>
                        <p>{exp.position}</p>
                        <p>{exp.responsabilities}</p>
                        {exp.dateStart && exp.dateEnd && (
                            <p>From {exp.dateStart} to {exp.dateEnd}</p>
                        )}
                        <div className="button-wrapper">
                            <button onClick={() => handleRemoveExperience(index)}>Remove</button>
                            <button onClick={() => handleEditExperience(index)}>Edit Experience</button>
                        </div>
                    </div>))}
                </div>)}
            </form>
        </section>) : (<section>
            <div className="cv-section-header">
                <h2>Experience</h2>
                <button onClick={handleEdit}>Edit</button>
            </div>
            <div>
                {experiences.length > 0 ? (
                    experiences.map((exp, index) => (<div key={index}>
                        <h3>{exp.position}</h3>
                        <p>At {exp.companyName}</p>
                        <p>{exp.responsabilities}</p>
                        {exp.dateStart && exp.dateEnd && (
                            <p>From {exp.dateStart} to {exp.dateEnd}</p>
                        )}
                    </div>))
                ) : (<p>No experience information given.</p>)
                }
            </div>
        </section>)}
    </>)
}

export default Experiences