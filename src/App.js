import logo from './logo.svg';
import './App.css';
import Header from './pages/header/header';
import Content from './pages/contents/content';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Content />
    </Fragment>
  );
}

export default App;
