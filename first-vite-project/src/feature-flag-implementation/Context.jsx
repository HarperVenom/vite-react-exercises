import { createContext, useEffect, useState } from "react";
import featureFlagsDataCall from "./data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagsState = ({ children }) => {
  const [enabledFlags, setFeatureFlags] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagsDataCall();
      //const data = await response.json();

      //console.log(response);
      setFeatureFlags(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, error, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagsState;
