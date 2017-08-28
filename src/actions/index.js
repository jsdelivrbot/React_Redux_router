import { CHANGE_AUTH } from './type';

export function authenticate(isLogin){
  return{
    type: CHANGE_AUTH,
    payload: isLogin
  };
}
