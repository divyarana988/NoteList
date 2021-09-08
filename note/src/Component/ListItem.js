import React from 'react'

const ListItem = (props) => {
    console.log("PROP:", props);
    return (
        <div>
            <h3>{props.note.body}</h3>
        </div>
    )
}

export default ListItem
