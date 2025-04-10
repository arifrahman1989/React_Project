// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { List } from "@fluentui/react-northstar";


// update the component state by setState

// class About extends Component {
//     constructor() {
//         super();
//         this.state = {
//             message: 'Wellcome to React'
//         };
//         this.buttonClick = this.buttonClick.bind(this);
//     }
//     buttonClick() {
//         this.setState({
//             message: 'Update this Message'
//         });
//     }
//     render() {
//         return (
//             <div className='container'>
//                 <h2>{this.state.message}</h2>
//                 <button onClick={this.buttonClick}>Click</button>
//                 <br />
//                 <br />
//                 <Link to='/' className='btn btn-success'>Back</Link>
//             </div>
//         );
//     }
// }
// export default About;

// Data feching on https://pixabay.com

// Bellow this code QR code example
// import React from 'react';
// import NewYear from './NewYearTime';
// import { useState, useRef } from 'react';
// import {QRCodeCanvas} from 'react-qr-code';
// import '../CSS/about.css';



// function About() {
//     const [url, setUrl] = useState('');
//     const qrRef = useRef();

//     const downloadQRCode = (e) => {
//         e.preventDefault();
//         let canvas = qrRef.current.querySelector('canvas');
//         let image = canvas.toDataURL('image/png');
//         let anchor = document.createElement('a');
//         anchor.download = 'qr-code.png';
//         document.body.appendChild(anchor);
//         anchor.click();
//         document.body.removeChild(anchor);
//         setUrl('');
//     }


//     const qrCodeEncoder = (e) => {
//         var qrcode = (
//             <QRCodeCanvas id='qrCode' value={url} size={300} bgColor={'purple'} level={'H'} />
//         );
//     }

//     return (
//         <div className='qrcode__container'>
//             <div ref={qrRef}>{qrcode}</div>
//             <div className='input__group'>
//                 <form onSubmit={downloadQRCode}>
//                     <lebel>Enter URL</lebel>
//                     <input
//                     type='text'
//                     value={url}
//                     onChange={qrCodeEncoder}
//                     placehoder=''
//                     />
//                     <button type='submit' disabled={!url}>
//                         Download QR code
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default About


// This is Data fetching

// import React, { Component } from 'react';
// import axios from 'axios'
// import NewYear from './NewYearTime';

// class About extends Component{
//     constructor(props){
//         super();
//         this.state = {Weather: 'Not a Result'}

//     };
    
//     componentDidMount = () => {
//         axios.get('/Test1').then(response =>{
//             console.log(response);
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <button>Get Result</button>
//                 <p>This is wether:{this.state.Weather}</p>
//             </div>

//         )
//     }
// }
// export default About;

import React from 'react';


export default function About() {
  return (
    <div>
      <h3>This is About Page.</h3>
    </div>
  )
}


