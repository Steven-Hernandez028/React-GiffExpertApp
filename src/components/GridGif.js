import React from 'react'

import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GridGif = ({ category }) => {


      const {data:images, loading} =  useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__fadeInDown"> {category} </h3>
        
        { loading && <p className="load animate__animated animate__flash">Loading</p>}
        <div className='card-grid'>
           

            <ol>
                {images.map(datas => (
                    <GifGridItem
                        key={datas.id}
                        {...datas}
                    />
                ))
                }
            </ol>
        </div>
        </>

    )
}
