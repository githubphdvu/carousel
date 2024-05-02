import { render } from "@testing-library/react"
import Card from './Card'

it('render without crashing?(smoke test)',()=>{
    render(<Card/>)
})