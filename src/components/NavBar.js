import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

const NavBar = () => {
    const {clientCount} = useContext(SocketContext);
  return (
    <div>{clientCount}</div>
  )
}

export default NavBar
