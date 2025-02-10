// components/LanguageSwitcher.js

import React from 'react';
import { useRouter } from 'next/router';

function LanguageSwitcher() {
  const router = useRouter();
  const currentLanguage = router.pathname.startsWith('/greek') ? 'greek' : 'english';
  console.log("Current Language: ", currentLanguage)


  // Function to switch language
  const handleLanguageSwitch = () => {
    const currentPath = router.pathname;
    console.log("Current Path: ", currentPath)
    if (currentLanguage === 'greek') {
      console.log("GREEK")
      // Remove `/greek` from the path
      router.push(currentPath.replace('/greek', '/'));
    } else {
      console.log("ENGLISH")
      // Add `/greek` to the path
      router.push(`/greek${currentPath}`);
    }
  };

  return (
    <div onClick={handleLanguageSwitch} className='language-switcher'>
      <span
        style={{
          color: 'white',
          fontSize: '10px',
          fontWeight: 'normal',
          fontStyle: 'italic'
        }}
      >
        {currentLanguage === 'greek' ? 'EN' : 'GR'}
      </span>
    </div>
  );
}

export default LanguageSwitcher;
