import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

  portBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '1000px',
    height: '1600px',
    margin: '0 0 50px 0',
    padding: '20px',
  },
  small: {
    '@media (max-width: 1000px)': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    }
  },
  tile: {
    display: 'flex',
    flexDirection: 'column',
    height: '750px',
    padding: '0 30px 10px 30px',
    margin: '50px',
    boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
  },
  tileImage: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '750px',
    padding: '0 30px 10px 30px',
    margin: '50px',
    boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
  },
  iframe: {
    height: '50%',
    width: '100%',
    margin: '50px 0 0 0',
  },
  text: {
    fontFamily: 'Titillium Web',
  },
  h1: {
    fontWeight: '700',
  },
  img: {
    height: '50%',
    width: '100%',
    margin: '50px 0 0 0',
  },
  imgSmall: {
    '@media (max-width: 1000px)': {
      height: '30%',
      width: '100%',
      margin: '50px 0 0 0',
    }
  },
})

export default function Portfolio () {


  return (
    <div className={css(styles.portBox, styles.small)}>
      <div className={css(styles.tile)}>
        <iframe className={css(styles.iframe)} src="https://www.youtube.com/embed/YB0p-BcuDZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <h1 className={css(styles.text, styles.h1)}>Front End Design</h1>
        <h3 className={css(styles.text)}>React | Express | MySQL | Jest | AWS | Webpack | Babel</h3>
        <p className={css(styles.text)}>
          - Emulated LuluLemon product page with a focus on visual aesthetics and interactive functionality <br />
          - Implemented Agile Test Driven Development using Jest and Mocha to validate functionality while scaling and implementing new application features<br />
          - Employed a service oriented architecture allowing for modularity and enterprise agility
        </p>
      </div>
      <div className={css(styles.tile)}>
        <iframe className={css(styles.iframe)} src="https://www.youtube.com/embed/tMMsx7RgTxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <h1 className={css(styles.text, styles.h1)}>Mobile Fitness App</h1>
        <h3 className={css(styles.text)}>React Native | Expo | MongoDB | Express | NodeJS | Firebase</h3>
        <p className={css(styles.text)}>
          - Conceptualized, designed and built an interactive mobile fitness app with React Native<br />
          - Created a responsive interface that tracked workout duration and upon completion stored workout data to the user's profile<br />
          - Authenticated users with Firebase Authentication to produce a unique user environment
        </p>
      </div>
      <div className={css(styles.tileImage)}>
        <img className={css(styles.img, styles.imgSmall)} src={"https://sanchezdotdev.s3-us-west-1.amazonaws.com/CacheNginXMax.png"}/>
        <h1 className={css(styles.text, styles.h1)}>System Design</h1>
        <h3 className={css(styles.text)}>MongoDB | PostgreSQL | AWS | NGINX | Redis | K6 | Loader</h3>
        <p className={css(styles.text)}>
        - Designed, stress tested and scaled an e-commerce app to handle production level volume<br />
        - Balanced load across five t2 micro servers and implemented data caching with NginX to increase throughput from 600 to 8700 requests per second while maintaining an average latency of 115 ms and an error rate below 1%<br />
        - Administered stress testing using loader.io to validate decisions behind schema design, database choice, and caching technology for a data set of 10 million primary records<br />
        - Benchmarked and optimized MongoDB and PostgreSQL using Indexing to produce query times of 5ms and 8ms respectively
        </p>
      </div>
    </div>
  );
}