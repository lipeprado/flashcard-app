import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';
reducers.routing = routerReducer;
import App from './components/App';
import VisibleCards from './components/VisibleCards';

import * as localStore from './localStorage';


const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);

const routes = ( 
    
    <Route path='/' component={App}>
        <Route path='/deck/:deckId' component={VisibleCards} ></Route>
    </Route>
    
    );



function run (){
    let state = store.getState();

    localStore.set(state, ['decks', 'cards']);
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
            
               {routes}

            </Router>
        </Provider>,
document.getElementById('root'));

}

run();
store.subscribe(run);

