import React, { Component } from "react";
import {style} from "typestyle";

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
class Footer extends Component {
  
  render() {
    const myStylea={
      paddingLeft: "5px",
      fontSize:"22px",
      textDecoration: "none",
      };

      const styleImg={
        borderStyle: "hidden",
        borderRadius:"5px",
        width:"40px",
        height:"40px",
      }
    return (
      <div className="container-1"style={{
        color: "#f1f1f1",
        textAlign: "center",
        fontFamily: "'Saira Semi Condensed', sans-serif",
        fontSize: "16px",
        backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      }}>
        <img
          id="contactimg"
          src="/images/contactlogo.png"
          width="180px"
          height="180px"
          alt="contactlogo" style={{ borderStyle: "hidden",backgroundColor: "#f1f1f1", borderRadius: "90px",textTransform: "uppercase"}}
        />
        <h3>
          <strong>Seyf Aleymi</strong>
        </h3>
        <h4> Local : Main Street </h4>
        <h4>Email Id: aleymi1337@gmail.com</h4>
        
        
        

        <a href="https://github.com/seyf-aleymi" style={myStylea}>
          <span className="icon fa fa-github" style={{ color: "antiquewhite" }}>
            <FaGithub />
            
          

export default Footer;
