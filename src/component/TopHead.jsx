import React, { useState } from 'react';
import '../App.css';



function TopHead() {

    const [frontSize, setFrontSize] =useState(100);

    const decreaseFontSize = () =>{
        const newFontSize = frontSize - 10;
        setFrontSize(newFontSize);
        document.body.style.fontSize = `${newFontSize}%`;
    };
    
    const increaseFontSize = () =>{
        const newFontSize = frontSize + 10;
        setFrontSize(newFontSize >= 0 ?  newFontSize:0);
        document.body.style.fontSize = `${newFontSize >=0 ? newFontSize :0}%`;
    };
    
    const resetFontSize = () => {
        setFrontSize(100);
        document.body.style.frontSize = `${100}%`;
    };
    

    return (
        <div className="top_head">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 top-acess">
                        <div className="pull-right">
                            <ul id="example1">
                                <li>Skip to Content:</li>
                                <li className="icon">
                                    <a href="#main-nav" title="Skip to Content">
                                        <img src="image/icon/skip-icon.png" alt="Skip to Content" />
                                    </a>
                                </li>
                                <li>Font Size:</li>
                                <li>
                                    <a href="#" title="Decrease Font Size" onClick={() => decreaseFontSize()}>
                                        <img src="image/icon/decrease-font-size.png" alt="Normal Font Size" title="Decrease Font Size" className="fsz_z" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Normal Font Size" onClick={() => resetFontSize('')} className="">
                                        <img src="image/icon/standard-view.png" alt="Normal Font Size" title="Normal Font Size" className="fsz_z" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Increase Font Size" onClick={() => increaseFontSize()}>
                                        <img src="image/icon/increase-text-size.png" alt="Normal Font Size" title="Increase Font Size" className="fsz_z" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHead;
