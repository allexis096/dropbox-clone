import React from 'react';

import Section from './components/Section';

import GlobalStyles from './styles/GlobalStyles';
import data from './data';

function App() {
  return (
    <>
      <Section  
        variants="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section  
        variants="beige"
        title={data[1].title}
        description={data[1].description}
      />
      <Section  
        variants="blue"
        title={data[2].title}
        description={data[2].description}
      />
      <Section  
        variants="white"
        title={data[3].title}
        description={data[3].description}
      />
      <Section  
        variants="black"
        title={data[4].title}
        description={data[4].description}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
