import React from "react"

function Professor (node){
    console.log('from Professor', node)
    return(
        <div className="Professor">
            <p>Concentration: {node.node.concentration}</p>
            <p>Name: {node.node.name}</p>
        </div>
    )
}

export default Professor