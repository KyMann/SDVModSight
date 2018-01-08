import React from 'react';
import ReactDOM from 'react-dom'; //imports are bundled into the bundle.js file
import Table from './table'; //this is an element
import 'main/resources/static/css/styles.css'; //importing it allows it to be compressed

ReactDOM.render(
    <div>
        <Table number={1} openSeats={[1,2]}/> //we can use table components as elements with jsx
        <Table number={2} openSeats={[1,2,3]}/>
    </div>
    document.getElementById('content')
);