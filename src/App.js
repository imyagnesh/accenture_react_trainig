import React from 'react';
import style from './appStyle'

const App = ({name, caption}) => {
    return (<>
        <h1 style={style.h1}>{name}</h1>
        <h2 style={style.h2}>{caption}</h2>
    </>);
}

export default App;