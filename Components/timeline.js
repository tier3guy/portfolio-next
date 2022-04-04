import React from 'react';
import styles from '../styles/time.module.css';

const timeline = () => {
  return (

    <>
    <section class={styles.timeline}>
      <ol>
        <li>
          <div>
            <time>2018</time> Passed out my matrics with a bad result of 74% from Gyan Bharati Vidyapith, Kolkata, IN.
          </div>
        </li>
        <li>
          <div>
            <time>2020</time> Got mine Higher secondary degree in Science @86% scholar.
          </div>
        </li>
        <li>
          <div>
            <time >2020</time> Finally the day came when I reached engineering college to pursue my bachelor's degree in Information Technology.
          </div>
        </li>
        <li>
          <div>
            <time>2020</time> GSSoC'20 Participation
          </div>
        </li>
        <li>
          <div>
            <time>2021</time> GSSoC'21 Mentor
          </div>
        </li>
        
        <li></li>
      </ol>
      
    </section>
    </>
  )
}

export default timeline;