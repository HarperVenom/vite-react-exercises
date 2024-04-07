import useWindowResize from "./hook";

const UseWindowResizHookTest = () => {
  const { width, height } = useWindowResize();

  return (
    <>
      <h1>Window Width: {width}</h1>
      <h1>Window Height: {height}</h1>
    </>
  );
};

export default UseWindowResizHookTest;
