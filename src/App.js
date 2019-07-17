import React from 'react';
import './common/style.scss';
import {Provider} from 'react-redux'
import Router from './routes/routes';
import thunk from 'redux-thunk';


import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer/index";


const store = createStore(rootReducer, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }

}

export default App;
