import firstMemberImage from "../../assets/crew/image-douglas-hurley.webp"
import secondMemberImage from "../../assets/crew/image-mark-shuttleworth.webp"
import thirdMemberImage from "../../assets/crew/image-victor-glover.webp"
import fourthMemberImage from "../../assets/crew/image-anousheh-ansari.webp"

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "./Style.css";
import { CardCrew } from "./CardCrew";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

export default function Crew() {
  const [firstMember, setFisrtMember] = useState({});
  const [secondMember, setSecondMember] = useState({});
  const [thirdMember, setThirdMember] = useState({});
  const [fourthMember, setFourthMember] = useState({});

  useEffect(() => {
    function getJsonData() {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => atualizarNomes(data.crew));
    }
    getJsonData();
  }, []);

  function atualizarNomes(names) {
    setFisrtMember({
      ...firstMember,
      name: names[0].name,
      role: names[0].role,
      bio: names[0].bio

    });
    setSecondMember({
      ...secondMember,
      name: names[1].name,
      role: names[1].role,
      bio: names[1].bio,
    });
    setThirdMember({
      ...thirdMember,
      name: names[2].name,
      role: names[2].role,
      bio: names[2].bio,
    });
    setFourthMember({
      ...fourthMember,
      name: names[3].name,
      role: names[3].role,
      bio: names[3].bio,
    });
    
  }
  return (
    <div className="crew-page">
      <HeaderTitle pageNumber="02" pageTitle="MEET YOUR CREW" />
      <Swiper
        className="swiper-component"
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <CardCrew
            crewMemberImg={firstMemberImage}
            name={firstMember.name}
            bio={firstMember.bio}
            role={firstMember.role}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCrew
          crewMemberImg={secondMemberImage}
            name={secondMember.name}
            bio={secondMember.bio}
            role={secondMember.role}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCrew
            crewMemberImg={thirdMemberImage}
            name={thirdMember.name}
            bio={thirdMember.bio}
            role={thirdMember.role}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCrew
            crewMemberImg={fourthMemberImage}
            name={fourthMember.name}
            bio={fourthMember.bio}
            role={fourthMember.role}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
