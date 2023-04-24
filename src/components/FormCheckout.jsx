import React, { useState } from "react";

export default function FormCheckout({onCheckout}) {

const [userData, setUserData] = useState({
    username: "",
    email:"",
    phone:"",
});

function handleInputChange (evt) {
const inputText = evt. target. value;
const inputName = evt. target. name;
//userData["phone"] -> userData. phone
const newUserData = { ...userData } ;
newUserData[inputName] = inputText;
setUserData (newUserData) ;
}

function onSumbit(evt){
    evt.preventDefault();
    onCheckout(userData);
}


function clearFormData(evt){
    evt.preventDefault();
    setUserData({
        username: "",
        email: "",
        phone: "",
    });
}

return (
    <>
        <h1 style={{margin:"21px"}}>Ingresa tus datos para completar la compra</h1>

        <form>
            <div className="form-group" style={{padding:"21px"}}>
                <label className="label-input" style={{padding:"11px"}} >Nombre</label>
                <input
                    value={userData.username} name="username" type="text"  required  onChange={handleInputChange}
                />
            </div>

            <div className="form-group" style={{padding:"21px"}}>
                <label className="label-input" style={{padding:"21px"}}>Email</label>
                <input
                    value={userData.email} 
                    name="email" 
                    type="email" 
                    required 
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group" style={{padding:"21px"}}>
                <label className="label-input" style={{padding:"11px"}}>Teléfono</label>
                <input
                    value={userData.phone} 
                    name="phone" 
                    type="number" 
                    required 
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={onSumbit} type="submit" style={{margin:"21px"}}>
                Crear orden 
            </button> 

            <button onClick={clearFormData} style={{margin:"11px"}}>
                Cancelar
            </button>
        </form>
    </>
);
}