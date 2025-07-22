import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

function Confirmation() {
  return (
    <>
        <Head>
            <title>Big Blue Hotel | Αίτημα Κράτησης</title>
            <meta charSet="UTF-8" />
            <meta name="language" content="el"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Confirmation of Ownership */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            
            <meta name="description" content="Big Blue Hotel | Αίτημα Κράτησης" />
            
            <Link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
            <div className='container-lg'>
                <div className='not-found'>
                <h1 style={{color: '#4891ff'}}>
                        Επιτυχία!
                    </h1>
                    <p>
                        Λάβαμε το αίτημα κράτησης σας και θα έρθουμε σε επαφή μαζί σας στην επόμενη ώρα!
                    </p>
                    <p>
                        Μεταβείτε στην <a href='/'>Κεντρική Σελίδα</a>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Confirmation