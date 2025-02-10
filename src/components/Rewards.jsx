import Image from 'next/image'
import React from 'react'

function Rewards({isGreek}) {
  return (
    <div>
        {/* <!-- Rewards Section --> */}
    <section className="rewards" id="rewards">
        <div className="container-sm">
            <div className="row">
                {isGreek ? (
                    <h2 className="rewards-heading text-xl text-center">
                        Πρόσφατα Βραβεία
                    </h2>
                ) : (
                    <h2 className="rewards-heading text-xl text-center">
                        Latest Rewards
                    </h2>
                )}
                
            </div>
            <div className="rewards-row">
                <div className="rewards-column">
                    <Image 
                        src="/assets/images/images2/Reward1.png"
                        alt='Big Blue Hotel in Amaliapolis has earned many rewards including Top Hotel in Amaliapolis for 2023'
                        width={100}
                        height={100}
                        layout='responsive'
                    />
                </div>
                <div className="rewards-column">
                    <Image 
                        src="/assets/images/images2/Reward2.png"
                        alt='Big Blue Hotel in Amaliapolis has earned plenty of awards such as Top Hotel in Amaliapolis with private swimming pool'
                        width={100}
                        height={100}
                        layout='responsive'
                    />
                </div>
                <div className="rewards-column">
                    <Image 
                        src="/assets/images/images2/Reward5.png"
                        alt='Big Blue Hotel - Big Blue Hotel Amaliapolis - Hotel Amaliapolis - Hotel Almyros - Book Amaliapolis - Big Blue Hotel prices - Big Blue Hotel Almyros - Hotel Volos - Almyros - Big Blue hotel booking'
                        width={100}
                        height={100}
                        layout='responsive'
                    />
                </div>
                <div className="rewards-column">
                    <Image 
                        src="/assets/images/images2/Reward3.png"
                        alt='Big Blue Hotel - Big Blue Hotel Amaliapolis - Hotel Amaliapolis - Hotel Almyros - Book Amaliapolis - Big Blue Hotel prices - Big Blue Hotel Almyros - Hotel Volos - Almyros - Big Blue hotel booking'
                        width={100}
                        height={100}
                        layout='responsive'
                    />
                </div>
                <div className="rewards-column">
                    <Image 
                        src="/assets/images/images2/Reward4.png"
                        alt='Big Blue Hotel - Big Blue Hotel Amaliapolis - Hotel Amaliapolis - Hotel Almyros - Book Amaliapolis - Big Blue Hotel prices - Big Blue Hotel Almyros - Hotel Volos - Almyros - Big Blue hotel booking'
                        width={100}
                        height={100}
                        layout='responsive'
                    />
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Rewards Section --> */}
    </div>
  )
}

export default Rewards