
import React, { Component } from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { IconContext } from "react-icons";

    class Profession extends Component {
        render() { 
  return (
    <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
  
    <div class="card bg-dark text-white">
  <img src="./images/working.jpg" class="card-img" alt="..."/>
  
  <div class="card-img-overlay">
    <FaUserGraduate />
    <h5 class="card-title"><b>Profession</b></h5>
    <p class="card-text">I am currently a student at GO My Code Academy,looking for a new opportunity as a software Developper.
    I have some experience in development in C / C++,Motivated, curious, ambitious, always looking to improve my skills.</p>

    <p class="card-text"><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>
    
  </div>
</div>
    </IconContext.Provider>
  );
}}
export default Profession;
