import { useState } from "react";


function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [generalInfo, setGeneralInfo] = useState({
        name: "Joe",
        email: "joe@email.com",
        tel: "123456789"
    });

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value
        })
    }

    function handleEdit() {
       setIsEditing(true);
    }

    return ( 
    <section>
        <h2>General Information</h2>
        {isEditing ? (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                id="name"
                value={generalInfo.name}
                name="name"
                onChange= {handleChange}
            />
            <label htmlFor="email">email:</label>
            <input
                type="email"
                id="email"
                value={generalInfo.email}
                name="email"
                onChange= {handleChange}
            />
            <label htmlFor="phone">phone:</label>
            <input
                type="tel"
                id="phone"
                value={generalInfo.tel}
                name="tel"
                onChange= {handleChange}
            />
            <button type="submit">Save</button>
        </form>) : (
        <>
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.tel}</p>
            <button onClick={handleEdit}>Edit</button>
        </>
        )}
    </section>
    )
}

export default GeneralInfo