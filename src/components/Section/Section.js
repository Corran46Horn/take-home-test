import React from 'react';
import styles from './Section.module.scss';

export default function Section(props) {
  return <section className={styles.homeSection}>{props.children}</section>;
}
