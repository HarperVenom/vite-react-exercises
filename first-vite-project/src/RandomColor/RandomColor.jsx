import { useEffect, useState } from 'react';
import './style.css'

const RandomColor = () => {
    const [backgroundColor, setColor] = useState('white');
    const [colorType, setColorType] = useState('rgb');
    
    function generateColor() {
        if (colorType === 'rgb') {

            let color = [0, 0, 0];
            color = color.map(() => Math.round(Math.random()*255));
            setColor(`rgb(${color[0]},${color[1]},${color[2]})`);

        } else if (colorType === 'hex'){

            const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
            let color = '#';
            for (let i = 0; i < 6; i++){
                color += hexValues[Math.floor(Math.random() * hexValues.length)]
            }
            setColor(color);
        }
    }

    useEffect(() => {
        generateColor();
    }, [colorType])

    return ( <div className="wrapper" style={{backgroundColor}}>
        <div className="color-types">
            <button className="rgb" onClick={()=>setColorType('rgb')}>RBD Color</button>
            <button className="hex" onClick={()=>setColorType('hex')}>HEX Color</button>
        </div>
        <button className='generate' onClick={generateColor}>Generate Color</button>

        <div className="color">
            <h3 className='type'>{colorType}</h3>
            <h1 className='value'>{backgroundColor}</h1>
        </div>
        
    </div> );
}
 
export default RandomColor;