import React from "react"


function NameList() {
    const names = ["Anvar", 'Ali', 'Ahmadboy', 'Xabibulloh']

    return (
        <>
        <ul>
            {names.map( (names, index) => (
                <li key={index}>{names}</li>
            ))}
        </ul>
        </>
    )
}


function List() {
    const names = ["Anvar", 'Ali', 'Ahmadboy', 'Xabibulloh']

    return (
        <>
            <ul>
                {names.map( (names, index) => (
                    <li key={index}>
                        <button onClick={ () => alert(names)}>click</button>
                    </li>
                    )

                )}
            </ul>
        </>
    )
            }

export default List

