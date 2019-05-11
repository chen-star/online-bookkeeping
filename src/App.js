import React from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList'

const items = [
    {
        "id": 1,
        "title": "去云南旅游",
        "price": 2000,
        "date": "2019-03-05",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "outcome"
        }
    },
    {
        "id": 2,
        "title": "吃全聚德",
        "price": 160,
        "date": "2019-04-03",
        "category": {
            "id": 1,
            "name": "餐饮",
            "type": "outcome"
        }
    }
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <PriceList items={items}
                       onModifyItem={(item) => {
                           alert(item.id)
                       }}
                       onDeleteItem={(item) => {
                           alert(item.id)
                       }}
            />
        </div>
    );
}

export default App;
