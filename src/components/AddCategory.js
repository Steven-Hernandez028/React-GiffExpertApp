import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({ setCategories }) => {

    

    const [inputValue, setinputValue] = useState("")

    const handleInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )

   
}

