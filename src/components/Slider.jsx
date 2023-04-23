import styled from 'styled-components'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import { useRef } from 'react'
const Slide = styled.div`
    ::-webkit-scrollbar{display: none ;}
`

const Slider = ({images}) => {
    const slideRef = useRef(null)
    const toLeft =  () => {
        let slide = slideRef.current
        slide.scrollTo( slide.scrollLeft - slide.clientWidth, 0)
    }
    const toRight = () => {
        let slide = slideRef.current
        slide.scrollTo( slide.scrollLeft + slide.clientWidth, 0)
    }
    return (
        <div className="relative rounded-xl w-full overflow-hidden flex items-center">
            <button onClick={toLeft}className='bg-[rgba(255,255,255,.5)] rounded m-2 absolute text-[#2d2d2d] text-[2rem] p-2'><IoIosArrowBack /></button>
            <Slide ref={slideRef} className="snap-mandatory snap-x scroll-smooth flex flex-col flex-wrap  overflow-x-scroll w-full aspect-[16/8]">
                {images.map((img, idx)=>{
                    return(
                        <img key={idx} src={img} alt="slide" className="snap-center rounded-xl w-full h-full object-cover" />
                    )
                })}
            </Slide>
            <button onClick={toRight}className='bg-[rgba(255,255,255,.5)] rounded m-2 absolute right-0 text-[#2d2d2d] text-[2rem] p-2'><IoIosArrowForward /></button>
        </div>
        
    )
}
export default Slider