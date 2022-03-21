import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
const About = ()=> {
    // here some logic
    const history = useHistory();
    const [userName,setUserName] = useState("");
    
    useEffect(() => {         
      }, [])

    
  return (
    <div >
        <h1>AboutPage!!!</h1>
    </div>
  );
}

export default About;