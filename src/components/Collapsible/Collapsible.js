import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import Anchor from '../Anchor/Anchor';
import Button from '../Button/Button';
import { Row } from 'react-bootstrap';
import styles from './Collapsible.module.scss';

export default function Collapsible() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick() {
    setExpanded(!isExpanded);
  }
  console.log(isExpanded);
  return (
    <Row className={styles.collapsed}>
      <div className={styles.stubborn} {...getCollapseProps()}>
        <Anchor link={'https://www.finder.com.au/'} icon={'personal-loans'}>
          Personal Loans
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'mobile-plans'}>
          Mobile Plans
        </Anchor>
        <Anchor
          link={'https://www.finder.com.au/'}
          icon={'broadband-nbn-plans'}
        >
          Broadband &amp; NBN
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'super-funds'}>
          Super Funds
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'share-trading'}>
          Share Trading
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'life-insurance'}>
          Life Insurance
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'home-loans'}>
          Home Insurance
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'travel-money'}>
          Travel Insurance
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'travel-deals'}>
          Travel Deals
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'bitcoin'}>
          Crypto
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'car-loans'}>
          Car Loans
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'pet-insurance'}>
          Pet Insurance
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'savings-accounts'}>
          Transaction Accounts
        </Anchor>
        <Anchor
          link={'https://www.finder.com.au/'}
          icon={'intl-money-transfers'}
        >
          Money Transfers
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'shopping-deals'}>
          Shopping Deals
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'internet-tv'}>
          Streaming
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'business-banking'}>
          Business Insurance
        </Anchor>
        <Anchor link={'https://www.finder.com.au/'} icon={'short-term-loans'}>
          Short Term Loans
        </Anchor>
      </div>
      <Button
        className={isExpanded ? 'chevron' : 'normal-chevron'}
        {...getToggleProps({ onClick: handleOnClick })}
      >
        {isExpanded ? 'Show less categories' : 'Show more categories'}
      </Button>
    </Row>
  );
}
