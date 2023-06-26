import { Navigate } from 'react-router-dom'
import HomePage from './HomePage';

export default function Checkout() {
  const isLogin = false;
  return ( isLogin ? <HomePage /> : <Navigate to={'/login'}/>)
}
