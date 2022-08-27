import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // 不能嵌套在 if/for/其它函数中（react 按照 hooks 的调用顺序识别每一个 hook）
  const [count, setCount] = useState(0);
  const [name, setNames] = useState("zc");

  useEffect(() => {
    //   每次执行
    if (count == 3) {
      setNames("章程");
    }
    document.title = `${name}当前已点击了${count}次`;
  });
  useEffect(() => {
    // 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
    console.log("name 修改了");
  }, [name]);
  useEffect(() => {
    // 传递空数组 只会执行一次
    console.log("页面启动了");
  }, []);

  return (
    <div className="useState">
      <h2>react hook for useState {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        reduce
      </button>
    </div>
  );
}

export default App;

