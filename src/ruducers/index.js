import {combinReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combinReducers ({
    counter, ui
});

export default reducers;