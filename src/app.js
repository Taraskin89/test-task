import React from 'react';

import Header from './components/header/header';
import Content from './components/content';
import Footer from './components/footer/footer';
import './index.css';

export default class App extends React.Component{

    render(){
        return(
            <div className='main'>
                <Header/>
                <Content data="loadMore.json"/>
                <Footer/>
            </div>
        );
    }
}
