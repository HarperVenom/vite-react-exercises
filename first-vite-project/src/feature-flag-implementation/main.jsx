import { useContext } from "react";
import FeatureFlagsState, { FeatureFlagsContext } from "./Context";
import ShowFilterSearch from "../FilterSearch/main";
import ShowLightDarkMode from "../LightDarkMode/index";
import ShowRandomColor from "../RandomColor/RandomColor";

const FeatureFlagsComponent = () => {
  const { loading, error, enabledFlags } = useContext(FeatureFlagsContext);
  const components = [
    {
      key: "showFilterSearch",
      component: <ShowFilterSearch></ShowFilterSearch>,
    },
    {
      key: "showLightDarkMode",
      component: <ShowLightDarkMode></ShowLightDarkMode>,
    },
    { key: "showRandomColor", component: <ShowRandomColor></ShowRandomColor> },
  ];

  console.log(enabledFlags);

  return (
    <div className="container">
      <h1>All enabled Features</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : enabledFlags ? (
        components.map((component) =>
          enabledFlags[component.key] ? component.component : null
        )
      ) : null}
    </div>
  );
};

export default FeatureFlagsComponent;
