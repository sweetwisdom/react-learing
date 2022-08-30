// 内置组件
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
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

