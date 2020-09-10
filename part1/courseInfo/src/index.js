import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Content from './components/content';
import Total from './components/total';





const App = () => {
  
    return (
      <div>
       <Header  />
        <Content/>
       <Total/>
      </div>
      
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
