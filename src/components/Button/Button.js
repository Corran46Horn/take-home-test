import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  return (
    <div className={props.className}>
      <div className={styles.btnWrapper}>
        <a className={styles.btn} onClick={props.onClick}>
          {props.children}
        </a>
      </div>
    </div>
  );
}
