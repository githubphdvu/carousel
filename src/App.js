import "./App.css"
import Carousel from "./Carousel"
import photos from "./photos.js"//In real life,data come from an AJAX call

const App=()=>//App component,renders Carousel component.Props:none,State:none
    <div className="App">
        <Carousel title={"Shells from far-away beaches"} photos={photos} />
    </div>
export default App
