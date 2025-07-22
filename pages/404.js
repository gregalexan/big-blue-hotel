import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

function CustomNotFound() {
  return (
    <>
        <Head>
            <title>Big Blue Hotel | Not Found</title>
            <meta charSet="UTF-8" />
            <meta name="language" content="en"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Confirmation of Ownership */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            
            <meta name="description" content="Big Blue Hotel | Something went wrong!" />
            
            <Link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
            <div className='container-lg'>
                <div className='not-found'>
                    <h1>
                        Something went wrong!
                    </h1>
                    <p>
                        Don't worry! Just navigate to the <a href='/'>Home Page</a>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustomNotFound