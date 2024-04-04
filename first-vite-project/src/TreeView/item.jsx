import { useState } from "react";

const Item = ({ object: itemObject }) => {
  const [object, setObject] = useState(itemObject);
  return (
    <div className="item">
      {itemObject ? <div className="label">{object.label}</div> : null}
    </div>
  );
};

export default Item;
