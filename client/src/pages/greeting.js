import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Greeting() {
  return (
    <div>
      Hello potential customer.
      <Link to="/register"><Button type="link">Register</Button></Link><br/>
      <Link to="/login"><Button type="link">Login</Button></Link>
    </div>
  )
}
