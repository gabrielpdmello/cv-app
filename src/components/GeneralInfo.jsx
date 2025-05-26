import { useState } from "react";


function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [generalInfo, setGeneralInfo] = useState({
        name: "Joe",
        email: "joe@email.com",
        tel: "123456789",
        address: "123 street, city, country"
    });

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value
        })
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <>
            {isEditing ? (<section>
                <form onSubmit={handleSubmit}>
                    <div className="cv-section-header">
                        <h2>General Information</h2>
                        <button type="submit">Save</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={generalInfo.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={generalInfo.email}
                                name="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={generalInfo.tel}
                                name="tel"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={generalInfo.address}
                            name="address"
                            onChange={handleChange}
                        />
                    </div>
                </form></section>) : (
                <section>
                    <div className="cv-section-header">
                        <h2>General Information</h2>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                    <h2>{generalInfo.name}</h2>
                    <p>{generalInfo.email} / {generalInfo.tel}</p>
                    <p>{generalInfo.address}</p>
                </section>
            )}
        </>
    )
}

export default GeneralInfo