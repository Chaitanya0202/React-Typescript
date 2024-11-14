
import React from 'react';
import FocusInput from './typescript/FocosInput';
import Functions from './typescript/Functions';
import InterfaceAndTypes from './typescript/InterfaceAndTypes';
import States from './typescript/States';
import Main from './typescript/genric-components/Main';


const App: React.FC = () => {
    const name: string = 'dondu';
    return (
        <>
            <InterfaceAndTypes name={name} age={23} />
            <InterfaceAndTypes name={name} />
            <States/>
            <FocusInput/>
            <Main/>
            <Functions/>
        </>
    );
}

export default App;
