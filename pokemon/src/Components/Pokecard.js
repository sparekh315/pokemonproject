import React, {Component} from 'react';
import './pokecard.css';

const poke_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        let imgSrc = `${poke_api}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h2>{this.props.name}</h2>
                <img src={imgSrc} alt={this.props.name}/>
                <h3>{this.props.type}</h3>
                <h3>{this.props.experience}</h3>

            </div>
        )
    };
};


export default Pokecard;