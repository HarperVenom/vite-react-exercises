import { useEffect, useState } from "react";
import Data from "./data";
import Branch from "./branch";

const TreeView = ({ data }) => {
  const [branches, setBranches] = useState(data || []);

  useEffect(() => {}, []);

  return (
    <div className="tree-view">
      {branches.map((branch) => (
        <Branch key={branch.label} object={branch}></Branch>
      ))}
    </div>
  );
};

export default TreeView;
