import React from 'react'
import { useEffect,useState } from 'react'
import {useSetAlert} from '../hooks/useAlert';

export default function AllData() {
  const [data,setData] = useState(null);

  useEffect(()=>{
    var requestOptions = { method: 'GET', redirect: 'follow' };
    
    fetch("/backdoor", requestOptions)
      .then(response => response.text())
      .then(result => setData(JSON.stringify(result)))
      .catch(error => {
        setData('');
      });
  })
  

  return <div>{data ? data : "loading..."}</div>
}
