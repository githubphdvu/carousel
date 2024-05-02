import { useState } from "react"
import "./Carousel.css"
import Card from "./Card"

/* Carousel: displays images and arrows to navigate through them
 * Props:
 * - title
 * - photos:array of objects [..{src,caption},..]
 * State:
 * - i:card index
 * App --> Carousel --> Card
 */
// function Carousel({title, photos}) {
//     const [i,setI] = useState(0)//initially,set i==0
//     function F() {setI(i + 1)}//Increase i by 1 (state change)

//     return (
//         <div className="Carousel">
//             <h1>{title}</h1>
//             <div className="Carousel-main">
//                 <i className="bi bi-arrow-left-circle" onClick={F}/>
//                 <Card src={photos[i].src} caption={photos[i].caption} currNum={i+1} totalNum={photos.length}/>
//                 <i className="bi bi-arrow-right-circle" onClick={F}/></div>
//         </div>
//     )
// }
function Carousel({ title, photos }) {
    const [i, setI] = useState(0)//Initially, set i == 0

    function increaseI() {
        setI(x=>(x+1)%photos.length)//Increment i by 1(with wrap-around)
    }
    function decreaseI() {
        setI(x=>(x-1+photos.length)%photos.length)//Decrement i by 1(with wrap-around)
    }
    return (
        <div className="Carousel">
            <h1>{title}</h1>
            <div className="Carousel-main">
                <i className="bi bi-arrow-left-circle" onClick={decreaseI} />
                <Card src={photos[i].src} caption={photos[i].caption} currNum={i+1} totalNum={photos.length} />
                <i className="bi bi-arrow-right-circle" onClick={increaseI} />
            </div>
        </div>
    )
}
export default Carousel
