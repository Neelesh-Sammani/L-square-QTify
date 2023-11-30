import React, { useState } from "react";
import Card from '../Card';
import Carousel from "../Carousel";
import './section.css';

const Section = ({title,data,navId}) => {
    // const API = 'https://qtify-backend-labs.crio.do';
    const [isCollapsed,setIsCollapsed] = useState(false);

    return (
        <div className="section">
            <div className="section-header">
            <h1 className="title">{title}</h1>
            <h1 className="section-toggle-btn" onClick={()=>{setIsCollapsed(!isCollapsed)}}>{isCollapsed?'Show All':'Collapse'}</h1>
            </div>
            {isCollapsed?<Carousel data={data} navId={navId} />:
            <div className="card-container">
                {data.map(cardData => <Card key={cardData.id} imgSrc={cardData.image} followersCount={cardData.follows} label={cardData.title} numOfSongs={cardData.songs?cardData.songs.length:""} />)}
            </div>}
        </div>
    )

}

export default Section;