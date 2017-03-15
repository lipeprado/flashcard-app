import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {addDeck, showAddDeck, hideAddDeck } from '../actions.js';
import { Link } from 'react-router';





const mapStateToProps = ({decks, addingDeck}) => ({
        decks,
        addingDeck,
        name: 'Filipe'
    });


const mapDispatchToProps = dispatch => ({
     addDeck: name =>   dispatch(addDeck(name)),
     showAddDeck: () => dispatch(showAddDeck()),
     hideAddDeck: () => dispatch(hideAddDeck())
})




const Sidebar = React.createClass({
    componentDidUpdate(){
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render() {
        let props = this.props
        return (
            <div className="sidebar">
                <h2>All Decks {this.props.name}</h2>
                <ul>
                    {props .decks.map((deck, i) => 
                        <li key={i}>
                        <Link to={`/deck/${deck.id}`}>
                        {deck.name}</Link> </li>)}

                </ul>
                {props.addingDeck && <input className="inp-add" ref='add' onKeyPress={this.createDeck} />}
            </div>
        );
    },

    createDeck(e){
        if(e.which !== 13) return;

        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);