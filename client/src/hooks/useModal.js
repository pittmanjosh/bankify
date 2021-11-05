import {useState} from 'react';

export default function useModal(transaction,account) {
  const [show, setShow] = useState(false);

  const close = () => setShow(false);

  const open = () => setShow(true);
  

  return {
    show,
    open,
    close,
    transaction,
    account
  };
}
