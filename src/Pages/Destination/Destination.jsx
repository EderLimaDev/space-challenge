
import { Outlet } from "react-router-dom";
import { DestinationNav } from "../../components/DestinationNav/DestinationNav";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import './style.css';

export default function Destination() {
  return (
    <div className="destination-page">
      <HeaderTitle 
        pageNumber='01'
        pageTitle="PICK YOUR DESTINATION"
      />
      <DestinationNav />
      <Outlet />

    </div>
  )
}
