import { useState, useEffect } from 'react';
import bgImages from "./rand-bg.js";

export default function useBgRand() {
  const[bgImage, setBgImage] = useState('');  

  useEffect(() => {
    const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
    setBgImage(randomImage);

    document.querySelector(".top-scene-container").style.backgroundImage=
      `url(${process.env.PUBLIC_URL+"/images/"+bgImage}`
  
  }, [bgImage]);  

  const handleBgImage = () => {
    const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
    setBgImage(randomImage);
  }

  return { bgImage, handleBgImage };
}