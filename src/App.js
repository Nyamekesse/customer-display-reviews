import "./App.css";
import Review from "./Review";

function App() {
  return (
    <>
      <div className="title">
        <h2>Our Reviews</h2>
      </div>
      <div className="container">
        <div>
          <Review />
        </div>
      </div>
    </>
  );
}

export default App;
