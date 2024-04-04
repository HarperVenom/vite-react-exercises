import { useEffect, useState } from "react";
import Item from "./item";
import "./style.css";

const Branch = ({ object: branchObject }) => {
  const [branches, setBranches] = useState([]);
  const [items, setItems] = useState([]);
  const [thisItem, setThisItem] = useState(null);
  const [childrenRevealed, setChildrenRevealed] = useState(false);

  //Check if current branch object is actually a branch (has children)
  //or an item. Then if it is a branch, check its children whether
  //they are branches or items and add to corresponding arrays
  useEffect(() => {
    branchObject.children
      ? branchObject.children.forEach((child) => {
          child.children
            ? setBranches([...branches, child])
            : setItems([...items, child]);
        })
      : setThisItem(branchObject);
  }, []);

  if (thisItem) {
    return <Item key={thisItem.label} object={thisItem}></Item>;
  }

  return (
    <div className="branch">
      <div
        className="label"
        onClick={() => setChildrenRevealed(!childrenRevealed)}
      >
        {branchObject.label}
      </div>
      {childrenRevealed ? (
        <div className="children">
          {branches
            ? branches.map((branch) => (
                <Branch key={branch.label} object={branch} />
              ))
            : null}
          {items
            ? items.map((item) => <Item key={item.label} object={item}></Item>)
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default Branch;
