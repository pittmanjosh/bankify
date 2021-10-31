import { useContext } from 'react';
import ctx from '../context';
import {PAGES} from '../data/constants';

export default function Content() {
  const { page } = useContext(ctx);

  return (PAGES[page]|| null)
}
