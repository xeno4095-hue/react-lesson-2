import React, {useEffect, useState} from "react";

function Inst() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error("ошибка при загрузке данных");
                }
                return response.json();
            })
            .then(res => {
                setUsers(res);
                setLoading(false);
            })
            .catch(err => {
                setError("ошибка при загрузке данных");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }


    if (errors) {
        return (
            <h1>"ошибка при вводе данных"</h1>
        )
    }


    return (
        <>
            <ul>
                {users.map((posts) => (
                    <li className="Op" key={posts.title}>{posts.body}, {posts.id}</li>
                ))}
            </ul>
        </>
    )
}

export default Inst