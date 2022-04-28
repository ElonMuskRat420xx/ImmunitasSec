import React, { useState } from 'react';
import data from '../Search/Data';


function LoadMoreCards() {

  const[cardNumber , setCardNumber]=useState(2);
  const loadmore = () => {
  setCardNumber(cardNumber + cardNumber);
 }
 const slice = data.cardData.slice(0,cardNumber);

  return (
<section>
  {slice.map((item, index)=>{
return(
<>
<div key={index}>
<h1>{item.title}</h1>
<p>{item.desc}</p>
</div>
</>
);
})}

<button onClick={()=> loadmore()}>Load More</button>

</section>

    )
}

export default LoadMoreCards