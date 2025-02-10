import Image from 'next/image'
import React from 'react'

function LocationPageHelp({ title, imagePath1, altTag1, p1, p2, imagePath2, altTag2, desktop }) {
  return (
    <div className="tour">
      <div className="container">
        <h3>{title}</h3>
        <div className="tour-content">
          <div className="tours-grid">
            {desktop ? (
              <>
                <div className="tour-photos-row">
                  <div className="tour-photos-column">
                    <Image 
                      src={imagePath1}
                      alt={altTag1}
                      width={100}
                      height={100}
                      layout="responsive"
                      priority={true}
                      placeholder='blur'
                      blurDataURL={imagePath1}
                    />
                  </div>
                </div>
                <div className="tour-text">
                  <p className="text-md text-center">
                    {p1}
                  </p>
                </div>
                {p2 && (
                  <div className="tour-text">
                    <p className="text-md text-center">
                      {p2}
                    </p>
                  </div>
                )}
                {imagePath2 && (
                  <div className="tour-photos-row">
                    <div className="tour-photos-column">
                      <Image 
                        src={imagePath2}
                        alt={altTag2}
                        width={100}
                        height={100}
                        layout="responsive"
                        priority={true}
                        placeholder='blur'
                        blurDataURL={imagePath2}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="tour-photos-row">
                  <div className="tour-photos-column">
                    <Image 
                      src={imagePath1}
                      alt={altTag1}
                      width={100}
                      height={100}
                      layout="responsive"
                      priority={true}
                      placeholder='blur'
                      blurDataURL={imagePath1}
                    />
                  </div>
                </div>
                <div className="tour-text">
                  <p className="text-md text-center">
                    {p1}
                  </p>
                </div>
                {imagePath2 && (
                  <div className="tour-photos-row">
                    <div className="tour-photos-column">
                      <Image 
                        src={imagePath2}
                        alt={altTag2}
                        width={100}
                        height={100}
                        layout="responsive"
                        priority={true}
                        placeholder='blur'
                        blurDataURL={imagePath2}
                      />
                    </div>
                  </div>
                )}
                {p2 && (
                  <div className="tour-text">
                    <p className="text-md text-center">
                      {p2}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationPageHelp;
