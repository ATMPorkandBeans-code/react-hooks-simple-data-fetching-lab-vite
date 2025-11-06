// create your App component here
import React from 'react'
import {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import DogImage from './components/DogImage.jsx'

function App() {

    return <div>
        <Header />
        <DogImage />
    </div>
}

export default App