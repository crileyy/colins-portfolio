'use client'
import Image from "next/image";
import meGif from '../../../public/images/me.gif';
import mePic from '../../../public/images/me-new.jpeg';
import { useState } from "react";
import styles from './MePicture.module.css';
import { Pause } from "react-feather";
import { Play } from "react-feather";

export const MePicture = () => {
  const [pauseGif, setPauseGif] = useState(false);

  return (
    <div className={styles['card']}>
      <div className={styles['picture-container']} onClick={() => setPauseGif(!pauseGif)}>
        {pauseGif ?
          <Image className={styles['me-picture']} src={mePic} alt="Picture of Colin Riley" /> :
          <Image unoptimized className={styles['me-picture']} src={meGif} alt="Picture of Colin Riley" />
        }
        <div className={styles['pause-wrapper']}>
          {pauseGif ?
            <Play /> :
            <Pause />
          }
        </div>
      </div>
    </div>
  );
};
