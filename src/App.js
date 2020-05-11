import React from 'react';
// import logo from './logo.svg';
import Card from '../src/Card/Card';
import Header from '../src/Header/Header';
import './App.css';

function App() {
  const title = {
    one: 'Supervisor',
    two: 'Team Builder',
    three: 'Karma',
    four: 'Calculator'
  };

  const desc = {
    one: 'Monitors activity to identify project roadblocks',
    two: 'Scans our talent network to create the optimal team for your project',
    three: 'Regularly evaluates our talent to ensure quality',
    four: 'Uses data from past projects to provide better delivery estimates'
  };

  const img = {
    one: '../../images/icon-supervisor.svg',
    two: '../../images/icon-team-builder.svg',
    three: '../../images/icon-karma.svg',
    four: '../../images/icon-calculator.svg'
  };

  const style = {
    colorOne: 'var(--primary-cyan)',
    colorTwo: 'var(--primary-red)',
    colorThree: 'var(--primary-orange)',
    colorFour: 'var(--primary-blue)'
  };

  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='container'>
        <Card
          title={title.one}
          desc={desc.one}
          img={img.one}
          color={style.colorOne}
        />
        <div className='inner-container'>
          <Card
            title={title.two}
            desc={desc.two}
            img={img.two}
            color={style.colorTwo}
          />
          <Card
            title={title.three}
            desc={desc.three}
            img={img.three}
            color={style.colorThree}
          />
        </div>
        <Card
          title={title.four}
          desc={desc.four}
          img={img.four}
          color={style.colorFour}
        />
      </div>
    </div>
  );
}

export default App;
