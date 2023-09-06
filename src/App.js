import React from 'react';
import './css/global.min.css';
import './fonts/Roboto-Black.ttf';
import './fonts/Roboto-Bold.ttf';
import Anchor from './components/Anchor/Anchor';
import Collapsible from './components/Collapsible/Collapsible';
import Section from './components/Section/Section';
import Symbols from './components/Symbols/Symbols';
import { Row } from 'react-bootstrap';
import styles from './components/Section/Section.module.scss';

function App() {
  return (
    <body>
      <Section>
        <div className='container'>
          <div className='text-wrapper'>
            <h2>Join 2 million+ Australians finding better</h2>
            <p>
              Finder's team of 40+ experts will help you find the right choices
              in over 100 categories.
            </p>
          </div>
          <div className='list-wrapper'>
            <Symbols />
            <div className='homepageTiles'>
              <Row className={styles.tileGroup}>
                <Anchor
                  link={'https://www.finder.com.au/'}
                  icon={'credit-cards'}
                >
                  Credit Cards
                </Anchor>
                <Anchor link={'https://www.finder.com.au/'} icon={'home-loans'}>
                  Home Loans
                </Anchor>
                <Anchor
                  link={'https://www.finder.com.au/'}
                  icon={'health-insurance'}
                >
                  Health Insurance
                </Anchor>
                <Anchor link={'https://www.finder.com.au/'} icon={'car-loans'}>
                  Car Insurance
                </Anchor>
                <Anchor
                  link={'https://www.finder.com.au/'}
                  icon={'transaction-accounts'}
                >
                  High-Interest Savings
                </Anchor>
                <Anchor
                  link={'https://www.finder.com.au/'}
                  icon={'electricity'}
                >
                  <h3>Electricity &amp; Gas</h3>
                </Anchor>
                <Collapsible />
              </Row>
            </div>
          </div>
        </div>
      </Section>
    </body>
  );
}

export default App;
