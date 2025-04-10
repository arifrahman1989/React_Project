import {useState} from 'react';
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from "qrcode.react";
import '../CSS/test.css';


 function Test() {
  const [url, setUrl] = useState("");

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
        <div>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <br/>
          <input
            type="text"
            value={url}
            className='inputSize'
            onChange={qrCodeEncoder}
            placeholder="input URL"
          />
          <br/>
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
          <br/>
          <br/>
          <Link to='/' className='btn btn-success'>Back</Link>
        </form>  
      </div>
    </div>
  )
}
export default Test;

//https://hackernoon.com/how-to-build-a-qr-code-generator-in-react