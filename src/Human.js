function Human(props){
    return(
        <div>
            <h1>Hello World</h1>
            <h2>I am {props.name}, I am {props.age} years old, and I live in {props.locaton}</h2>
            <h4>My hobbies are {props.hobby}</h4>
            <p>If I had a million dollars, I would {props.prompt}</p>
        </div>
    )
}

export default Human;