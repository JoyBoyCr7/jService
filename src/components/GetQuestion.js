

function GetQuestion(props){

    const fetchQuestion = async () => {
        const response =  await fetch("http://jservice.io/api/random")
        const question =  await response.json()
        props.setQuestion(question[0])
        // to display question
        props.setShow(false)
        // testing what i get for my question
        console.log(question[0])
    }


    return(
    <button class="btn btn-secondary" onClick={fetchQuestion}>Get Question</button>
    )
}

export default GetQuestion