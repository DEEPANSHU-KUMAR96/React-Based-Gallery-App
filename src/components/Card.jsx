import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className=' overflow-hidden rounded-xl sm:h-80 sm:w-80 md:h-80 md:w-80 lg: xl:h-60 xl:w-60'>

                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />


                </div>
                <h2 className='font-bold text-lg'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card
