import React from 'react';

const useScroll = (element) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {

    const onScroll = () => {
      const sectionTop = element.current.getBoundingClientRect().top;
      console.log(sectionTop);
      if (sectionTop < 480) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }

  }, [element])

  return isVisible;
}

export default useScroll;