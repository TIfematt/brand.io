
const Pricing = () => {

  const card = (props) => {
    return (
      <div className='bg-yellow-600 price-card rounded-sm flex items-center justify-center'>
        <h3>{props.title}</h3>
        <span>{props.amount}</span>
        <div className="">
          <ul>
            <li>{props.desc}</li>
          </ul>
        </div>
        <button className={props.buttonStyle}>{props.button}</button>
      </div>
    )
  }

  return (
    <section className="">
        <div>
            <h1>Our Plans Scale With Your Product</h1>
            <p> in virtual space through communication platforms. </p>
        </div>
        {/* card div */}
        <div>
          <card 
            title='For Starter'
            amount='$59'
          />
        </div>


    </section>
  )
}

export default Pricing