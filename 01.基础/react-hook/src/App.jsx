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
      {count <= 3 ? <ClearEf /> : ""}
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

function ClearEf() {
  // 清理副作用 使用return
  const [ooz, setOoz] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => {
      setOoz(ooz + 1);
      console.log("执行添加", ooz);
    }, 500);
    return () => {
      clearInterval(timerID);
      console.log("定时器已经清理");
    };
  }, [ooz]);

  return (
    <div>
      <h2>清除副作用{ooz}</h2>
    </div>
  );
}
export default App;

