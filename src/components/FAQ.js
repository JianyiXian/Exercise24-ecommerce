import Signin from "./Signin"

const questions = [
    { id: 'flush-collapseOne', key: '1', title: 'I do not remember my password', content: 'You can find in the login page, where there is a reset password button' },
    { id: 'flush-collapseTwo', key: '2', title: 'How can I create an account?', content: 'You can find in the sign button on the top left' },
    { id: 'flush-collapseThree', key: '3', title: 'What is the delivery hours?', content: 'We will delivery the next day you ordered' },
    { id: 'flush-collapseFour', key: '4', title: 'How much time it takes to deliver the order?', content: 'It takes about four days to delivery the order, if you want a quick delivery, please click the quick delivery when checks out' }
]

const FAQ = () => {
    return (
        <div className="container w-25 mt-5">
            <Signin />
            <div className='accordion accordion-flush' id='accordion'>
                {
                    questions.map(question => (
                        <AccordianItems key={question.key} id={question.id} title={question.title} content={question.content} />
                    ))
                }
            </div>
        </div>


    )
}


const AccordianItems = (props) => {
    return (

        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button className='accordion-button collapsed shadow-none' type='button' data-bs-toggle='collapse'
                    data-bs-target={'#' + props.id} aria-expanded='false' aria-controls={props.id}>{props.title}</button>
            </h2>
            <div id={props.id} className='accordion-collapse collapse' data-bs-parent='#accordion'>
                <div className='accordion-body'>
                    {props.content}
                </div>
            </div>
        </div>

    )
}

export default FAQ;