import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './Cat'

class App extends Component {

  render() {
    return <React.Fragment>
      <div className="App">
        <header>
          <h1>Ты сегодня покормил кота?</h1>
        </header>
        <main className="cat_wrap">
          <Cat header="Сказочное заморское яство" title="Нямушка" description="с фуа-гра" portions="10 порций"present="мышь в подарок" weight="0,5" subInfo="Чего сидишь? Порадуй котэ, купи." disable={false}/>
        <Cat header="Сказочное заморское яство" title="Нямушка" description="с рыбой" portions="40 порций" present="2 мыши в подарок" weight="2" subInfo="Головы щучьи с чесноком да свежайшая сёмгушка." disable={false} />
        <Cat header="Сказочное заморское яство" title="Нямушка" description="с курой" portions="100 порций" present="5 мышей в подарок" weight="5" subInfo="Печалька, с курой закончился." disable={true}/>
        </main>
      </div>
    </React.Fragment>
  }
}

export default App;
