// 内置组件
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
const Home = () => {
  document.title = "home";
  const navigate = useNavigate();
  // 路由跳转函数
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/about")}> about</button>
    </div>
  );
};
const About = () => {
  const navigate = useNavigate();
  document.title = "about";
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => navigate("/")}> home</button>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

