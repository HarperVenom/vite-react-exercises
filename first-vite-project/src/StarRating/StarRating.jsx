import { useState } from "react";
import './style.css'

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);  

    return ( <div className="star-container">
            {[...Array(10)].map((_,index) => {
                index++;

                return (<div 
                    key={index}
                    className={'star ' + (index <= (hover || rating) ? 'active' : '')}
                    onMouseOver={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    onClick={() => setRating(index)}>
                    *</div>)
            })}
        </div>);
}
 
export default StarRating;