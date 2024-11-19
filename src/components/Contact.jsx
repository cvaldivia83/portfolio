import React from 'react';
import useScroll from '../hooks/useScroll';


export default function Contact() {
  const contactSection = React.useRef();
  const visible = useScroll(contactSection);

  return (
    <div className={`contact ${visible && 'visible'}`} id='contact' ref={contactSection}>
      <h2 className='contact-title'>What&#39;s Next?</h2>

      <h2 className="contact-cto">Get In Touch</h2>

      <div className="contact-invitation">
        <p className="contact-para">I am currently exploring new job opportunities and would love to connect with anyone who might have insights or openings in their organization. </p>
        <p className="contact-para">If you are aware of any opportunities or would simply like to say hi, please feel free to reach out.</p>
      </div>

      <div className="contact-container">

        <a href="https://www.linkedin.com/in/carla-cabrera-valdivia/?locale=en_US" className="contact-box" target='_blank' rel='noreferrer'>
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="mailto:valdivia.carla@gmail.com" className="contact-box" target='_blank' rel='noreferrer'>
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  )
}
