import React from 'react';
import Hero from './hero.jsx';

const Lineup = React.createClass({
    propTypes: {
        combo: React.PropTypes.object.isRequired,
        onClick: React.PropTypes.func.isRequired
    },

    renderHeroes() {
        return this.props.combo.lineup.map(heroId => <Hero key={heroId} heroId={heroId}/>);
    },

    render() {
        const {combo} = this.props;

        return (
            <li className={'heroList'} onClick={this.props.onClick.bind(null, combo)}>
                <h3 className={'combo-count'} >{`${combo.count}`}</h3>
                <ul>
                    {this.renderHeroes()}
                </ul>
            </li>
        );
    }
});

export default Lineup;