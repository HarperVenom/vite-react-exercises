import { useState } from "react";
import data from "./data";
import './style.css';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiSelectionOn, setMultiSelectionOn] = useState(false);
    const [selectedList, setSelectedList] = useState([]);

    function switchSelectionType() {
        setMultiSelectionOn(!multiSelectionOn);
        document.querySelector('.multiple').classList.toggle('active')
        document.querySelector('.single').classList.toggle('active');
    }

    function handleSelection(dataItem) {
        if (multiSelectionOn) {
            let newArray = [...selectedList];

            if (newArray.includes(dataItem)){
                newArray = selectedList.filter(item => item !== dataItem)
            } else
                newArray.push(dataItem);

            setSelectedList(newArray);
        } else setSelected(selected && selected.id === dataItem.id 
                ? null
                : dataItem);
    }

    function canShow(dataItem) {
        return multiSelectionOn 
            ? selectedList.includes(dataItem)
            : selected && selected.id === dataItem.id
    }

    return (
        <div className="wrapper">
            <button className="switch" onClick={switchSelectionType}>
                <span className="single active">Single Selection</span>
                /<span className="multiple">Multiple Selection</span>
                Switch
            </button>
            {
            data && data.length > 0 ? data.map((dataItem) =>
                <div key={dataItem.id} className="question-block"
                    onClick={() => handleSelection(dataItem)}>
                    <div className="question">{
                        dataItem.question
                    }</div>
                    {canShow(dataItem) ?
                        <div className="answer">
                            {dataItem.answer}
                        </div> : null
                    }
                </div>
            ) : <div>No Data Found</div>
        }
        </div>
    );
}

export default Accordion;