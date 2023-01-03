import ContactPage from "./contact-page"
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
function Contact() {
    const [model, base_url_api] = useOutletContext();

    const nameRef = useRef('');
    const emailRef = useRef('');
    const messageRef = useRef('');

    const handleForm = async (e) =>{
        e.preventDefault();
        const data = {
            name_contact:nameRef.current.value,
            message_contact:messageRef.current.value,
            email_contact:emailRef.current.value,
        }
        console.log(data);
        // return;
        const response = await model.postContact(data);
        if(response.status===200){
            const data = await response.json();
            if(data.data===true){
                nameRef.current.value = '';
                messageRef.current.value = '';
                emailRef.current.value = '';
            }
        }
    }


  return (
    <>
    <ContactPage messageRef={messageRef} emailRef={emailRef} nameRef={nameRef} onClick={handleForm}/>
    </>
  )
}

export default Contact