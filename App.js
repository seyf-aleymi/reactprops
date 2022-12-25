/*
Create a project using create-react-app.
Create a profile folder under src.
Create a profile component under /profile.
The profile component gets data (fullName, bio, profession) as props, and gets image as children props,
and the function handleName functions as a prop that sends an alert message with the name of the profile user.
Define the default props for Profile component. 
Use PropsType to check props.  
Use inline style.
*/
import React from "react";
import Header from "./Components/Profile/Header";
//import "./style.css";
//import Loaders from './Profile/Component/Loaders'
import Footer from './Components/Profile/Footer';
import FullName from "./Components/Profile/FullName";
import Bio from "./Components/Profile/Bio";
import Profession from "./Components/Profile/Profession";
//import HandleName from './Profile/Component/HandleName'

function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
    <header id="home">
    <Header/>
    </header>
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Self-Profile </h1>
    {/*  And invoking the <FullName/> component… */}
      <FullName firstName="dalila" lastName="Chouaya">
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",}} id="about">
      <Bio FullName="Dalila CHOUAYA" Age="28" Gender="Female" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"  />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
    </body>
    <footer id="contact">
      <Footer/>
      </footer>

    </>
  );
}
export default App;
