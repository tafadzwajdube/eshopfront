import { CLEAR_ERRORS } from './types';
import axios from 'axios'

export function clearErrors() {
 
  return function (dispatch) { 
    dispatch({type:CLEAR_ERRORS})
  }
}

