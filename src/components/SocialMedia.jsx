import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='app__social' >
      <a href='https://www.linkedin.com/in/zaddemnizar/' >
        <div>
          <BsLinkedin />
        </div>
      </a>        
      <a href='https://github.com/zaddemnizar'>
        <div>
          <BsGithub />
        </div>
      </a>
      <a href='https://www.facebook.com'>
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  )
};

export default SocialMedia;

