import React from 'react';
import { showAddDeck } from '../actions';
import { Link} from 'react-router';
import { connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck())
});


const Toolbar = ({ deckId, showAddDeck }) => {
    let deckTools = deckId;
    if (deckTools) {
      return (<div  className="toolbar">
    <Link className='btn' to={`/deck/${deckId}/new`}> ✚ New Card </Link>
    <Link className='btn' to={`/deck/${deckId}/study`}> Study Deck </Link>
     </div>);
    } 
        return (
        <div className="toolbar">        
            <button className="btn-main" onClick={showAddDeck}> ✚ New Deck </button>
        </div>
    )
};

export default connect(null, mapDispatchToProps)(Toolbar);