import { IoCheckmarkCircleSharp } from 'react-icons/io5'



const card = (props) => {
    const list = props.descriptions

    return (
      <div className={props.cardStyle}>
        <h3 className={props.titleStyle}>{props.title}</h3>
        <span className='hero-heading text-4xl sm:text-5xl font-extrabold font-inter'>{props.amount}</span>
        <div className="">
          <ul>
              {list?.map((item, index) => (                
              <li key={index} className={props.listStyle}>
                <IoCheckmarkCircleSharp /> {item}
              </li>
            ))}
          </ul>
        </div>
        <button className={props.buttonStyle}>{props.button}</button>
      </div>
    )
}

export default card