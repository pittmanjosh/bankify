import ctx from '../context';
import {useContext} from 'react';

export default function useAlert() {
  const {msg,type,heading,reset} = useContext(ctx);

  return {msg,type,heading,reset};
}

export function useSetAlert(msg,type,heading = "") {
  const {createAlert} = useContext(ctx);

  createAlert(msg,type,heading);
}