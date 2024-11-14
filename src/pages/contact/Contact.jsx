import React, { useState } from 'react';
import '/css/Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Contact() {
    Aos.init()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("subject", subject);
        formData.append("message", message);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                setName('');
                setEmail('');
                setPhone('');
                setSubject('');
                setMessage('');
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting the form", error);
            setResult("An error occurred while submitting the form.");
        }
    };
    return (
        <div id='contact' className='contact'>
            <div className="container">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input data-aos="fade-up"
                            onInput={(e) => setName(e.target.value)}
                            value={name}
                            required
                            type="text"
                            placeholder='Full name'
                        />
                        <input data-aos="fade-up"
                            onInput={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            type="email"
                            placeholder='Email address'
                        />
                    </div>
                    <div className="input-field">
                        <input data-aos="fade-up"
                            onInput={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            type="number"
                            placeholder='Phone number'
                        />
                        <input data-aos="fade-up"
                            onInput={(e) => setSubject(e.target.value)}
                            value={subject}
                            required
                            type="text"
                            placeholder='Subject'
                        />
                    </div>
                    <textarea data-aos="fade-up"
                        onInput={(e) => setMessage(e.target.value)}
                        value={message}
                        required
                        placeholder='Your message'
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}