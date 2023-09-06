import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import styles from './Anchor.module.scss';
import { Col } from 'react-bootstrap';

export default function Anchor(props) {
  return (
    <Col className={styles.tile} sm='6' md='4' lg='2'>
      <a href={props.link}>
        <svg className={styles.tileIcon}>
          <use xlinkHref={`#${props.icon}`}></use>
        </svg>
        <div className={styles.tileTitle}>
          <h3>{props.children}</h3>
        </div>
      </a>
    </Col>
  );
}
