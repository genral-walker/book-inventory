
import React, { ReactElement } from 'react'
import './App.scss';
import Header from './Header/Header';
import Nav from './Nav/Nav';



interface Props {

}


const App: React.FC<Props> = (): ReactElement => {
  return (
    <>
      <Nav />
      <Header />
    </>
  )
}

export default App;

