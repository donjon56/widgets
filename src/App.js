import React, {useState} from 'react';
import Accordion from './widgets/accordion/Accordion';
import Search from './widgets/search/Search';
import DropDown from './widgets/dropdown/DropDown';
import Translate from './widgets/translate/Translate';
import Route from './widgets/Route';
import Header from './widgets/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fron end javascript framework'
  },
  {
    title: 'Why user React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: "The color Red",
    value: "red"  
  },
  {
    label: "The color Blue",
    value: "blue"  
  },
  {
    label: "The color Green",
    value: "green"  
  }
];
function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header/>
      <Route path="/"><Accordion items={items}/></Route>
      <Route path="/list"><Search/></Route>
      <Route path="/dropdown">
        <DropDown 
          label="Select a color" 
          options={options} 
          selected={selected} 
          onSelectedChange={setSelected}/>
      </Route>
      <Route path="/translate"><Translate/></Route>
    </div>
  );
}

export default App;
