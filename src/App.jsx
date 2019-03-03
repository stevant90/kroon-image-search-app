import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/store';

import MainContainer from './Components/MainContainer';

const App = () => (
    <Provider store={store}>
        <MainContainer />
    </Provider>
);

export default App;