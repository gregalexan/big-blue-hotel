import React from 'react'

function Services() {
  return (
    <div>
        {/* <!-- Services and Facilities Section --> */}
    <section className="services" id="services">
        <div className="container-lg">
            <div className="row">
                <h2 className="services-heading text-xl text-center">
                    Services & Facilities
                </h2>
            </div>
            <div className="not-mobile-services">
                <div className="services-row">
                    <div className="services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-infinity"></i>
                            </div>
                            <h3>Facilities</h3>
                            <ul>
                                <li>Tablet</li>
                                <li>TV & WiFi</li>
                                <li>Air Conditioner</li>
                                <li>Kitchenette</li>
                                <li>Refrigerator</li>
                                <li>Electric Kettle</li>
                                <li>Toaster & Microwave</li>
                                <li>Safe-Deposit Box</li>
                                <li>Espresso Coffee with free capsules</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fab fa-500px"></i>
                            </div>
                            <h3>Additional Facilities</h3>
                            <ul>
                                <li>Breakfast Included</li>
                                <li>Heated Swimming Pool</li>
                                <li>Sunbeds by the Pool</li>
                                <li>Hot Tub / Jacuzzi</li>
                                <li>Large Garden</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Accommodation Rules</h3>
                            <ul>
                                <li>Check-In: By arrangement</li>
                                <li>Check-Out: 12:00 - 14:00</li>
                                <li>Credit / Debit Cards Accepted</li>
                                <li>Children of All Ages Accepted</li>
                                <li>Pets are NOT allowed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-services">
                <div className="mobile-services-row">
                    <div className="mobile-services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-infinity"></i>
                            </div>
                            <h3>Facilities</h3>
                            <ul>
                                <li>Tablet</li>
                                <li>TV & WiFi</li>
                                <li>Air Conditioner</li>
                                <li>Kitchenette</li>
                                <li>Refrigerator</li>
                                <li>Electric Kettle</li>
                                <li>Toaster & Microwave</li>
                                <li>Safe-Deposit Box</li>
                                <li>Espresso Coffee with free capsules</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-services-row">
                    <div className="mobile-services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fab fa-500px"></i>
                            </div>
                            <h3>Additional Facilities</h3>
                            <ul>
                                <li>Breakfast Included</li>
                                <li>Heated Swimming Pool</li>
                                <li>Sunbeds by the Pool</li>
                                <li>Hot Tub / Jacuzzi</li>
                                <li>Large Garden</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-services-row">
                    <div className="mobile-services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Accommodation Rules</h3>
                            <ul>
                                <li>Check-In: By arrangement</li>
                                <li>Check-Out: 12:00 - 14:00</li>
                                <li>Credit / Debit Cards Accepted</li>
                                <li>Children of All Ages Accepted</li>
                                <li>Pets are NOT allowed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Services and Facilities Section--> */}
    </div>
  )
}

export default Services