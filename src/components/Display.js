import { useState } from "react"

function Display(props){
    
    const question = props.question

    

    if (props.question.question){
        // testing
        console.log(question.question)
        return <> 
            <h3>Category: {question.category.title}</h3>
            <h3>Points: {question.value}</h3>
            <h3>Question: {question.question}</h3>

            <div>
                <button className="Answer" onClick={()=> props.setShow(!props.show)}>Click to Reveal and hide Answer </button>
                {
                    props.show?<h1> {question.answer}</h1> : null
                }
                
            </div>
            
            </>
        
    }else{
        
        return <h1>Generate a question</h1>
    }

    // const questionArray = props.question? props.question: [{question: 'At Comic-Con 2011, Adam West, Burt Ward & Julie Newmar reunited for a panel on this TV'}]
    // // why cant i chain this
    // //const answer = questionArray[0].answer
    // //
    // const answerObject = questionArray[0].question
 
    // console.log(answerObject)
    
}

export default Display