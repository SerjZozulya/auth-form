import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import AuthForm from "./components/auth-form";

function App() {
    return (
        <div className="App">
            <h1>Вход</h1>
            <AuthForm/>
        </div>
    );
}

export default App;
