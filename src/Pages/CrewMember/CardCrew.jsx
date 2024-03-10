import './style.css';

export const CardCrew = (props) => {
  return (
    <div>
        <ul className="card-crew">
          <li><img src={props.crewMemberImg} alt="" /></li>
          <li><h5>{props.role}</h5></li>
          <li><h1>{props.name}</h1></li>
          <li><p>{props.bio}</p></li>
        </ul>
    </div>
  )
}
