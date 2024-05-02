import { render, fireEvent } from "@testing-library/react"
import Carousel from "./Carousel"
import TEST_IMAGES from "./_testCommon.js"

it('render without crashing?(smoke test)',()=>{
    render(<Carousel title={'abc'} photos={TEST_IMAGES}/>)
})

it("works when click right arrow",()=>{
    const { container } = render(<Carousel title="abc" photos={TEST_IMAGES}/>)
    // expect first image to show, but not the second
    expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument()
    expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument()

    fireEvent.click(container.querySelector(".bi-arrow-right-circle"))//simulation:click right arrow

    // expect second image to show, but not the first
    expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument()
    expect(container.querySelector('img[alt="testing image 2"]')).toBeInTheDocument()
})
