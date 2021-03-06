import React from 'react';

import RightBar from './rightBar'
import LeftBar from './leftBar'
import './footer.css';


export default class Footer extends React.Component{
    render(){
        return(
            <div id='footer'>
                <LeftBar/>
                <RightBar/>    
                <footer id="bottom-menu">
                    <a href="#" className="letter"><img src="./img/letter.png" alt=""/>Have a question?</a>
                    <a href="#" className="mail">contacts@smartreviewer.com</a>
                    <a href="#"><img src="./img/fb.png" alt="faceBook"/></a>
                    <a href="#"><img src="./img/twitter.png" alt="twitter"/></a>
                    <a href="#"><img src="./img/g+.png" alt="g+"/></a>
                    <a href="#"><img src="./img/pinterest.png" alt="Pinterest"/></a>
                </footer>
            </div>
        );
    }
}
