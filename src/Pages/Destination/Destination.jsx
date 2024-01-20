
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { Moon } from "./SubPage-moon/Moon";
import './style.css';

export default function Destination() {
  return (
    <div className="destination-page">
      <HeaderTitle 
        pageNumber='01'
        pageTitle="PICK YOUR DESTINATION"
      />
      <Moon />
    
    </div>
  )
}
