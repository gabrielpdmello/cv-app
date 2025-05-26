import {useState} from 'react';

function Sample() {
    const [personalInfo, setPersonaInfo] = useState({
        name: "Joe", email: "joe@email.com", tel: "123456789"
    });

    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const {name, value} = e.target;
        setPersonaInfo({
            ...personalInfo,
            [name]: value
        })

    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }
    
    return ( 
    <div>
        {isEditing ? (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                id="name"
                value={personalInfo.name}
                name="name"
                onChange= {handleChange}
            />
            <label htmlFor="email">email:</label>
            <input
                type="email"
                id="email"
                value={personalInfo.email}
                name="email"
                onChange= {handleChange}
            />
            <label htmlFor="phone">phone:</label>
            <input
                type="tel"
                id="phone"
                value={personalInfo.tel}
                name="tel"
                onChange= {handleChange}
            />
            <button type="submit">Submit</button>
        </form>) : (
            <div>
                <h1>{personalInfo.name}</h1>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.tel}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
        )
        }
        
    </div>
    )
        
        
}

export default Sample