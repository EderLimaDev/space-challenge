import './Style.css';

export default function HeaderTitle(props) {
  return (
    <div className='titleMain'>
      <div className='mainText'>
        <h5><strong>{props.pageNumber}</strong></h5>
        <h5>{props.pageTitle}</h5>
      </div>
    </div>
  )
}
