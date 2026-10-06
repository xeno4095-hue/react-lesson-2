import React, {useState} from "react"

function Les() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    return (
        <>
        <div>
            <input type="text" value={name}
            onChange={ event => setName(event.target.value)}
            placeholder="Введите свое имя"
            />
            <input type="number" value={age}
            onChange={ event => setAge(event.target.value)}
            placeholder="Введи возраст"
            />
        </div>
            <p>Привет {name ? name : "Ghost"} {age ? age : "none"}</p>
        </>
    )
}


function SimpleForm() {
    const [name, setName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        alert(`вы ввели имя: ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="ведите имя"/>
            <button type="submit">click</button>
        </form>
    )
}
export default SimpleForm