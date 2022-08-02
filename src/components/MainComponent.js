import React from 'react';
import profile_pic from '../assets/image-jeremy.png';
import ellipsis from '../assets/icon-ellipsis.svg';


const Profile = ({active, handleFilter}) =>{
    return (
        <div className="dashboard__profile">
            <div className="profile__top">
             <img src={profile_pic} alt="profile" />
                <div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            
            </div>
            
            <div className="filter">
            <button onClick={() => handleFilter("daily")} className={`filter__btn ${active === 'daily' ? 'active' : '' }`}>Daily</button>
            <button onClick={() => handleFilter("weekly")} className={`filter__btn ${active === 'weekly' ? 'active' : '' }`}>Weekly</button>
            <button onClick={() => handleFilter("monthly")} className={`filter__btn ${active === 'monthly' ? 'active' : '' }`}>Monthly</button>
            </div>
        </div>
    )
}

const Cards = ({data, active}) =>{

    let current = "";
    let previous = "";
   

   const cardsJSX =  data.map((data,index) =>{

    switch (active) {
        case 'daily':
            current = data.timeframes.daily.current;
            previous = data.timeframes.daily.previous;
            break;
        case 'weekly':
            current = data.timeframes.weekly.current;
            previous = data.timeframes.weekly.previous;
            break;
        case 'monthly':
            current = data.timeframes.monthly.current;
            previous = data.timeframes.monthly.previous;
            break;
        default:
            break;
    
       
    }
        return (
            <div key={index} className="report__card">
                <div className={`report__bg ${data.css}`}></div>
                <div className="report__details">
                <div className="report__type">
                    <p>{data.title}</p>
                    <img src={ellipsis} alt="icon-ellipsis" />
                </div>
                <div className="hours__container">
                    <h1 className="hours">{current}hrs</h1>
                    <p className="previous__hours">Last Week - {previous}hrs</p>
                </div>
                
                </div>
            </div>
        )
    });

    return cardsJSX;
}

function MainComponent({data, active, handleFilter}) {
  return (
    <React.Fragment>
        <Profile active={active} handleFilter={handleFilter}/>
        <Cards data={data} active={active}/>
    </React.Fragment>
  )
}

export default MainComponent