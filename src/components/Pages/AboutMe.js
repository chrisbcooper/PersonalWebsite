import React, {useState} from 'react';
import profilePic from '../../img/Me/profile-pic.jpeg';

function AboutMe() {

  const Text = () => (
    <div className='aboutme-words'>
        <div className='aboutme-description' >
        <p>Hi! I'm Christopher, and I'm currently a sophomore studying Computer Science at The University of Southern California</p>
          <p></p>
          <p> I am passionate about
          Software Engineering, but I am open to all kinds of paths. </p>
          <p></p>
          <p>
          When I'm not coding I'm usually playing basketball or just spending time with friends and family.
          I am currently looking for a Software Engineering Internship
          for Summer 2021.
          </p>
          <p></p>
          <p>Here are some technologies that I enjoy using:</p>
          <div className="inner-grid">
          <div className='aboutme-list'>C++</div>
          <div className='aboutme-list'>Java</div>
          <div className='aboutme-list'>Swift</div>
          <div className='aboutme-list'>HTML/CSS/JS</div>
          <div className='aboutme-list'>Reactjs</div>
          <div className='aboutme-list'>Nodejs</div>
          </div>
          </div>
          </div>
  );

  const Im = () => (
    <div>
          <span className='helper'></span>
          <img src={profilePic} alt=''  className='profile-pic' />
          </div>
  );


  return (
    <div className='font' id='aboutme'>
      <h1>About me</h1>
        <div className='aboutme-grid'>
          <Im />
          <Text />
        </div>
    </div>
  );
}

export default AboutMe;
