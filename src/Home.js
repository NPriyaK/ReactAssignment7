import React from "react";
import gift1 from "./gift1.jpeg";
import gift2 from "./gift2.jpeg";
import gift3 from "./gift3.jpeg";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            butttonText: 'Red'
        }
    }
    render (){
        return(
            <div className = "wrapper">
                <Card img = {gift1} title = "Perfume Gift Set" description = "Fragrance that everyone love"/>
                <Card img = {gift2} title = "Watch Gift Set" description = "Watch and wrist band for men"/>
                <Card img = {gift3} title = "Wallet Gift Set" description = "Perfect wallet gift set"/>
            </div>
        )
    }   
}
function Card(props) {
    return (
        <div className = "card">
            <div className = "card_body">
                <img src ={props.img} alt = "gift" class = "card_image"/>
                <h2 className = "card_title">{props.title}</h2>
                <p className = "card_description">{props.description}</p>
                <button className = "card_btn"> Buy Gift Set</button>
            </div>
        </div>
    )
    
}
export default Home;