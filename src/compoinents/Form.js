import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather} className="form">
            <div>
                <input
                    type='text'
                    placeholder='city'
                    name='city'
                />
                
                <input
                    type='text'
                    placeholder='country'
                    name='country'
                />
            </div>
            <input type="Submit" />
        </form>
    )
}

export default Form; 