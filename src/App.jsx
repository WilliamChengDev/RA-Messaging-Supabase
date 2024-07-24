import './App.css';
import Feed from './assets/Feed';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to={`/comments/`}>comments</Link>
    </div>
  )
}