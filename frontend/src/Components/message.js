import React from 'react'
import {Alert} from 'react-bootstrap'

const Message = ({children, variant}) => {
    return (
        <div>
            <Alert variant={variant}>
                {children}
            </Alert>
        </div>
    )
}

export default Message
