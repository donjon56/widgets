import React, {useState} from 'react';
import DropDown from '../dropdown/DropDown';
import Convert from './Convert';

// API KEY: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM



const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'French',
        value: 'fr'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <DropDown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    );
};

export default Translate;