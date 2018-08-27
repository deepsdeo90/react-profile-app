import React from 'react';
import  './Profiles.css';
import Profile from './Profile/Profile';

const Profiles = (props)=>{
    let profileData;
    if(props.profiles.length){
        profileData= <div className="Profiles">
        {
            props.profiles.map((profile,index)=>
                <Profile profile={profile} key={index} />
            )
        }
        </div>
    }else{
        profileData=<h1>No Records Found</h1>;
        
    }
    return profileData
    
}

export default Profiles;