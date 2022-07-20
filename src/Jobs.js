import React from "react";
import manager from "./job1.jpeg";
import customercare from "./job2.jpeg";
import tech from "./job3.jpeg"
import employees from "./title"

class Jobs extends React.Component{
    render(){
        return( 
            <div>
                <h3>
                    Our Career Opportunities
                </h3>
      {employees.map((employee) => {
        const list = (
          <>
            <ul>
              <li>Id: {employee.id}</li>
              <li>Name: {employee.name}</li>
              <li>City: {employee.city}</li>
            </ul>
            <hr />
          </>
        );
        return list;
      })}        
            <div>
                
                <div className = "wrapper">
                <Card img = {manager} title = "Store Manager" description = ""/>
                <Card img = {customercare} title = "Customer Suppport" description = ""/>
                <Card img = {tech} title = "Software Developer" description = ""/>
                </div>
            </div> 
        </div> 
        )
    }
}

function Card(props) {
    return (
        <div className = "card">
            <div className = "card_body">
                <img src ={props.img} alt = "job" class = "card_image"/>
                <h2 className = "card_title">{props.title}</h2>
                <p className = "card_description">{props.description}</p>
                <button className = "job_btn"> Apply here</button>
            </div>
        </div>
    )    
}


  
export default Jobs;