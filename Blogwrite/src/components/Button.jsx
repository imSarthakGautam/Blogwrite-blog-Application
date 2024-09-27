// Reusable button component
import React from 'react'
import { Children } from 'react'

//props destructuring.. , parameter list are also assigned default values for most with '='
function Button({

    children,// represents content between Button tags
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor = "text-white",
    className='',
    //any additional props are spreaded.
    ...props 
})
{
    

    return (
        
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor}
        ${className}`}{...props}> 

            {children}

        </button>

        
    )
}

export default Button
