
import {  FaStar } from "react-icons/fa";
import { useState } from "react";

function StarRating({noOfStars}) {


    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleclick = (index)=>{
        setRating(index)
    }

    const handlemouseEnter = (index)=>{
        setHover(index)
    }

    const handleMouseLeave = ()=>{
        setHover(rating)
    }

    
  return (
    <div className="star-rating">
        <h1 >Rate Me! </h1>
{ 
        [...Array(noOfStars)].map((_, index) => {
            index+=1;
            return <FaStar
            key={index}

            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={()=>handleclick(index)}
            onMouseEnter={()=> handlemouseEnter(index)}
            onMouseLeave={()=> handleMouseLeave()}
            size={40}
            />
        })
}

  

    </div>
  )
}

export default StarRating