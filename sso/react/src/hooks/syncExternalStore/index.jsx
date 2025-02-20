import { useStorage } from './syncExternalStore';
const UseStorage = () => {
  const [val, setVal] = useStorage('data', 1);
  return (
    <>
      <h3>{val}</h3>
      <button onClick={() => setVal(val + 1)}>设置val</button>
    </>
  );
};

export default UseStorage;
