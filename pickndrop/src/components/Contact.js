import React from 'react';
import "../css/contact.css";
import { useContactUsMutation } from '../services/userAuthApi';

const Contact = () => {
    const [contactUs, {isLoading}] = useContactUsMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
        }
        console.log(actualData);
        if (actualData.name && actualData.email && actualData.message){
                
            const res = await contactUs(actualData);
            console.log(res)
            if (res.data.status === "Success"){
                console.log("contact data stored")
                document.getElementById('contactform').reset();
            } 

        } else {
            console.log("all fields are required")
        }
    }
    return (
        <>
            <div className="contact-page">
                <div className="contact-us">
                    <h1 className="contact-heading">Contact Us</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt fontawesome-style"></i>
                            <p>59, Baker Street, London.</p>
                        </li>
                        <li>
                            <i className="fas fa-envelope-square fontawesome-style"></i>
                            <p>hemaratnasonar01@gmail.com</p>
                        </li>
                        <li>
                            <i className="fas fa-user-alt fontawesome-style"></i>
                            <p>Hemaratna Sonar</p>
                        </li>
                        <li>
                            <i className="fas fa-phone fontawesome-style"></i>
                            <p>+022 235689</p>
                        </li>
                    </ul>
                    <div className="icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="get-in-touch">
                <div className="left">
                    <h1 className="contact-heading">Get In Touch</h1>     
                    <p className="sub-heading">Feel free to drop us a line below !</p>
                    <form className="form" method="post" onSubmit={handleSubmit} id="contactform">
                        <input className="input" type="text" id="name" name="name" required placeholder="Enter your name"/>
                        <input className="input" type="email" id="email" name="email" required placeholder="Enter your Email"/>
                        <textarea cols="20" rows="5" className="textarea" id="message" name="message" required placeholder="Enter something here"></textarea>
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </div>
                </div>
            </div> 
        </>
    )
}

export default Contact;