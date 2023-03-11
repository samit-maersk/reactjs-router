import React from "react";
import { useParams } from 'react-router-dom';

const Contact = () => {
    let { contactId } = useParams();
    return (
        <h1>Contact {contactId}</h1>
    )
}

export default Contact;