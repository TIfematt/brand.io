"use client"
import card from "./card"

const Pricing = () => {

  return (
    <section className="w-full sm:mx-32 flex flex-col items-center justify-center mt-36 ">
        <div>
            <h1 className='hero-heading text-4xl sm:text-6xl font-semibold font-inter max-w-3xl text-center'>Our Plans Scale With Your Product</h1>
            <p className='text-primary filter drop-shadow-lg text-center mt-4'> in virtual space through communication platforms. </p>
        </div>
        {/* card div */}
        <div className="sm:flex sm:gap-5 flex flex-col sm:flex-row gap-8  mt-20">
          {card ({
            cardStyle: 'w-88 h-128 bg-white rounded-lg flex flex-col items-center justify-center gap-10 shadow-lg',
            titleStyle: 'font-inter text-lg font-bold capitaliz mt-12',
            listStyle: 'flex items-center justify-start gap-4 mx-12',
            title:'For Starter',
            amount: '$59',
            descriptions: ['Feedback Categorization', 
                            'Features prioritization',
                            'Real-Time Collaboration',
                            'Feedback Loop Notifications',
                            'Essential Dev Tools Integrations'

                          
                          ],
            button: 'Contact Us',
            buttonStyle: 'mb-12 w-44 h-12 btn-white rounded-lg font-bold border-2 filter drop-shadow-lg'
          })}
          {card ({
            cardStyle: 'gap-10 w-88 h-128 bg-primaryCard rounded-lg flex flex-col items-center justify-center shadow-lg',
            titleStyle: 'font-inter text-lg font-bold capitaliz mt-12',
            listStyle: 'flex items-center justify-start gap-4 mx-12',
            title:'For Teams',
            amount: '$99',
            descriptions: ['Feedback Categorization', 
                            'Features prioritization',
                            'Real-Time Collaboration',
                            'Feedback Loop Notifications',
                            'Essential Dev Tools Integrations'

                          
                          ],
            button: 'Purchase Package',
            buttonStyle: 'mb-12 w-44 h-12 btn rounded-lg text-white font-bold filter drop-shadow-lg'
          })}
          {card ({
            cardStyle: 'gap-10 w-88 h-128  rounded-lg flex flex-col items-center justify-center shadow-lg',
            titleStyle: 'font-inter text-lg font-bold capitaliz mt-12',
            listStyle: 'flex items-center justify-start gap-4 mx-12',
            title:'For Company',
            amount: 'Custom',
            descriptions: ['Feedback Categorization', 
                            
                            
                            'Feedback Loop Notifications',
                            'Essential Dev Tools Integrations'

                          
                          ],
            button: 'Contact Us',
            buttonStyle: 'mb-12 w-44 h-12 btn rounded-lg text-white font-bold filter drop-shadow-lg'
          })}

        </div>


    </section>
  )
}

export default Pricing