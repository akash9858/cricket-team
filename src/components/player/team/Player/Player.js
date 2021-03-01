import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
import Button from 'react-bootstrap/Button';

const Player = (props) => {
    const { name, image,avgScore, bodySize, price, country} = props.player;
    const handelTeam = props.handelTeam;
    
    return (
        <div className="playerDiv">
            <div className="display" >
                <img src={image} alt="" srcset="" />
                <h5>Player Name: {name} </h5>
                <p>Average Score: {avgScore}</p>
                <p>Body Size: {bodySize}</p>
                <p>Country: {country}</p>
                <h5>Price: $ {price}</h5>
                <Button variant="primary" onClick={()=>handelTeam(props.player)}> <FontAwesomeIcon icon={faUserPlus} />Select for team</Button>{''}
            </div>
        </div>
    );
};

export default Player;