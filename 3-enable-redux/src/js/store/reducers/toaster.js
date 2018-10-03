import { createReducer } from '../utils';
import {
  SET_PRISTINE,
  DISMISS_TOAST,
} from '../actions';

/* eslint object-curly-newline: 0 */
const setPristine = (state, { payload: { data } } ) => ({
  data,
});

export default createReducer({ data: [] }, {
  [SET_PRISTINE]: setPristine,
  [DISMISS_TOAST]: () => {},
});