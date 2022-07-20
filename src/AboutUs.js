import React from "react";
import pic1 from "./pic1.jpeg";
import pic2 from "./pic2.jpeg";
class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <h3>
                Who are We?
                </h3>
                <h4>
                Shop Hallmark for the biggest selection of greeting cards, Christmas ornaments, 
                gift wrap, home decor and gift ideas to celebrate holidays, birthdays and other special occasions 
                </h4>
                <p>Buy Online, pick up today. Curbside pickup available for selected stores</p>
                <h3>Our Founder and CEO:</h3>
                <div className = "wrapper">
                <Card img = {pic1} title = "Doanld J.Hall" description = "Founder and President"/>
                <Card img = {pic2} title = "Mike Perry" description = "CEO"/>
                </div>
                
            </div>
            
        )
    }
}

function Card(props) {
    return (
        <div className = "card">
            <div className = "card_body">
                <img src ={props.img} alt = "gift" class = "human_image"/>
                <h2 className = "card_title">{props.title}</h2>
                <p className = "card_description">{props.description}</p>
            </div>

        </div>
    )
    
}

export default AboutUs;