import React from 'react';



const Footer = () => {
    return (
        <div className='footer' style={{position:'fixed', bottom:'0'}}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-auto'>
                        <p style={{color:'white'}}>This is Nice Restorent @ Copyright 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
