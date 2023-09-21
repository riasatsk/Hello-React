import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Content>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            expedita iste eos incidunt maiores quisquam officia odio quo,
            eligendi dolores architecto. Magni officia commodi magnam velit
            error, repudiandae molestiae totam?
          </p>
        </Content>
      </div>
    </div>
  );
}
