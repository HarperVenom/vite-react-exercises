import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

const QRCodeGenerator = () => {
  const [codeValue, setCodeValue] = useState(null);
  const [input, setInput] = useState();

  return (
    <div className="container">
      <div className="input-container">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setCodeValue(input)}>Generate</button>
      </div>
      {codeValue ? (
        <QRCode id="qr-code-value" value={codeValue}></QRCode>
      ) : null}
    </div>
  );
};

export default QRCodeGenerator;
