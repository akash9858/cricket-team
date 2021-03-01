import './Team.css'
const Team = (props) => {
    
    const team = props.team;
    const totalCost = team.reduce((sum, player) => sum + player.price,0);
    const totalPlayerName = team.reduce((sum, player) => sum +" "+player.name,"");

    return (
        <div className="mainTeam">
            <h4> This is Team member: {team.length}</h4>
            <h4> This is Team cost: ${totalCost}</h4>
            <p>{totalPlayerName}</p>
            {/* <ul>
                {player.map(players => <li>{players.name}</li>) }
            </ul> */}
            
        </div>
    );
};

export default Team;