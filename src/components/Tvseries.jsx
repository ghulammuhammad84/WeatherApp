
import React from 'react'

const Tvseries = ({tvseries}) => {
    console.log(tvseries);
    return (
        <div>
            This is Tv series
            {tvseries.map((te)=>{
                return(
                    <div>
                        <h1>{te.title}</h1>
                        <img src={te.image_url} alt="Loading..."/>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Tvseries
