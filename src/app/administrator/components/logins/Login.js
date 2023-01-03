import { useContext } from 'react';
import Model from "../../services/Login";
import AdministratorContext from '../../context/AdministratorContxt';
import LoginForm from './login-form';
import { useRef, useState, useEffect } from "react";
import {
  useOutletContext,
  useNavigate,
  Link,
  useParams,
} from "react-router-dom";


function Login() {
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const { api, base_url } = useContext(AdministratorContext);
  const model = new Model(api);

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      username_user: usernameRef.current.value,
      password_user: passwordRef.current.value,
    };
    if (data.username_user === '' || data.password_user === '') {
      setMessage('Tous les champs sont requis');
      return;
    }

    let response = await model.connect(data);

    if (response.status === 200) {
      // Navigator(`/administrator/diapos/list`);
      const data = await response.json();
      if(data.success===true){
        window.location.href = '/administrator/diapos/list';
      }else{
        setMessage('An error occured');
      }
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };



  return (
    <>
      <LoginForm message={message} onHandleForm={handleForm} usernameRef={usernameRef} passwordRef={passwordRef} onChangePwd={(e) => { setMessage(''); return passwordRef.current = e.target }} onChangeUser={(e) => { setMessage(''); return usernameRef.current = e.target }} />
    </>
  )
}

export default Login