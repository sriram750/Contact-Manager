import React from "react";
import userimg from "../images/user.png";
const ContactCard = (props) =>{
    const {id,name,email}=props.contact
    return(
        <div className="item" style={{display:"flex",columnGap:"6px"}}>
            <img className="ui avatar imager" src={userimg} alt="userimg" style={{width:"35px",height:"35px"}}></img>
            <div content="content">
                <div className="Header">{name}</div>
                <div> {email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
        </div>
    );
}
export default ContactCard;