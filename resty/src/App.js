import './App.scss';
import './reset.scss'
import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Form from './components/form/form.jsx';



function App() {
  return (
    <React.Fragment>
   <Header/>
   <Form/>
   <Footer/>
   </React.Fragment>
  );
}

export default App;
