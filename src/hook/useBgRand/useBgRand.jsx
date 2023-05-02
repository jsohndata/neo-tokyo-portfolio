import { useState, useEffect } from 'react';
import bgImages from "./rand-bg.js";

export default function useBgRand() {
  const[bgImage, setBgImage] = useState('');  

  const randomIndex = Math.floor(Math.random() * bgImages.length);

  useEffect(() => {
    const randomImage = bgImages[randomIndex];
    setBgImage(randomImage);
  }, [randomIndex]);

  
  const handleBgImage = () => {
    const randomImage = bgImages[randomIndex];
    setBgImage(randomImage);
  }

  return { bgImage, handleBgImage };
}