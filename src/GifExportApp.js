import React, { StrictMode, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }></AddCategory>
            <hr></hr>
           
          <ol>
              <StrictMode>
                { 
                categories.map( (category) => (
                    <GridGif
                    key={ category }
                     category={ category }
                     ></GridGif>
                ))

                }
                </StrictMode>
          </ol>
        </>
    );
}

export default GifExpertApp