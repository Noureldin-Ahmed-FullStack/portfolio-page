import React, { useEffect, useState } from 'react'

export default function ExtraButtons() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsDark(currentScrollPos > window.innerHeight);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  return (
    <div className={`position-fixed myPos`}>
        {isDark && <div onClick={scrollToTop} className='customBg ExtraButton my-1'><i className='fa fa-arrow-up'></i></div>}
    </div>
  )
}
