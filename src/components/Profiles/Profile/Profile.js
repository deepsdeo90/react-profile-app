import React from 'react';
import './Profile.css';

const  getRatingStars = (avgrating)=>{
           //round to nearest half
           avgrating = Math.round(avgrating*2)/2;
           let rating = [];
             // Append all the filled whole stars
           for (var i = avgrating; i >= 1; i--)
              rating.push(<span key={i} className="RatingStar FullStar"></span>);
         
           // If there is a half a star, append it
           if (i === .5) rating.push(<span  key={i} className="RatingStar HalfStar"></span>);
         
           // Fill the empty stars
           for (let i = (5 - avgrating); i >= 1; i--)
             rating.push(<span  key={5+i} className="RatingStar EmptyStar"></span>);
     return rating;      
}
const Profile = (props)=>{
     const avgrating = props.profile.averageRating;
     const rating = getRatingStars(avgrating); 
     
    return (<article>
    <img src={props.profile.profile_picture} alt="ULTIMATE CHEESY CRUST PIZZA" />
    <div className="Profile">
            <h3>{props.profile.name}</h3>
            <div className="Author">{props.profile.title}</div>
            <div className="Location">{props.profile.address.city}, {props.profile.address.state}</div>
            <div className="ProfileBottom">
                    <div className="RatingBox">
                    {rating}   
                            
                    </div>       
                <button>view profile</button>
            </div>
    </div>
        
        </article>)
 }
    

export default Profile;
