import React from 'react';

function FormFeedback(props) {
    const feedback = props.feedback
    
    // conditional rendering (zeige das div unten nur an, wenn formFeedback einen Wert hat)
    if(feedback) {
        return (
            <div style={{ 
                backgroundColor: feedback.status === "error" ? "red" : "green", 
                color: "white",
                margin: 10,
                padding: 15,
            }}
            >
                {feedback.message}
            </div>
        )
    } else {
        // leeres React.Fragement ---> wird in luft aufgelöst
        return <></>
    }
}

export default FormFeedback;