import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './AppRoute';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import goodsReducer from './store/reducers/goodsReducer';
import roleNameReducer from './store/reducers/roleNameReducer';

const rootReducer = combineReducers({
	goods: goodsReducer,
	character: roleNameReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(	 
	<Provider store={store}>
	   <AppRoute />,
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
