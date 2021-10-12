import React from 'react'

const Func = props => {
    console.log(props)
    return(
        <div>
         <h1>Hello {props.name}.Your grade is {props.grade}
          </h1>
            {props.children}
    </div>
    )
}

export default Func