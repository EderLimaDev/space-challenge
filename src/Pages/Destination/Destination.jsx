import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import imagemBg from "../../assets/destination/background-destination-desktop.jpg"


export default function Destination() {
  return (
    <div>
      <HeaderTitle 
        pageNumber='01'
        pageTitle="PICK YOUR DESTINATION"
        backgroundImg={imagemBg}
      />
    </div>
  )
}
