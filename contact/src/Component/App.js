
import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from "./ContactList";
import { useState } from 'react';

function App() {
 const [contacts,setContacts] = useState([])
 const addContactHandler =(props)=>{
    console.log(props, "CtoP")
    setContacts([...contacts,props])
  }
  return (
    <div className="ui container">
<Header/>
<AddContact addContactHandler ={addContactHandler}/>
<ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
