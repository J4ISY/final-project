import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    function closeForm() {
        document.querySelector(".overlay-contact-form").style.display = "none";
        document.querySelector("body").style.backgroundColor = "unset"
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_u9gywzj',
                'template_7fd4f08',
                form.current,
                '32Bn_OArA_Nq373q5')
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Mail został wysłany!")
                },
                (error) => {
                    console.log(error.text);
                    alert("Błąd, mail nie został wysłany.")
                });
    };

    function validCloseForm() {
        if(this.sendForm === true){
            document.querySelector(".overlay-contact-form").style.display = "none";
            document.querySelector("body").style.backgroundColor = "unset"
        }
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <span className="contact-close" onClick={closeForm}>X</span>
                <h4 className="contact-form-title">Skontaktuj się ze mną</h4>

                <label htmlFor="contact-name"></label>
                <input type="text" className="contact-name contact-input" name="user_name" id="contact-name"
                       placeholder="Imię"
                       required/>

                <label htmlFor="phone-number"></label>
                <input type="tel" className="phone-number contact-input" name="user_phone" id="phone-number"
                       placeholder="Telefon kontaktowy (Opcjonalne)"/>

                <label htmlFor="contact-mail"></label>
                <input type="email" className="contact-mail contact-input" name="user_email" id="contact-mail"
                       placeholder="E-mail"
                       required/>

                <textarea name="message" id="" cols="30" rows="10" className="contact-text"
                          placeholder="Treść wiadomości.." required></textarea>

                <input type="submit" onClick={validCloseForm} className="contact-form-submit" value="Wyślij"/>
            </form>
        </>
    );
}

export default Contact;
