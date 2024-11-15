//creating a reusuable component Input 
//using forwarddRef hook and useId

import React, {useId} from 'react'



const Input = React.forwardRef( function Input({
        label, // labels for i/p feilds like name, email
        type= 'text',
        className='',
        labelcss='', 
        ...props
}, ref
//first parameter, 2nd param= ref
  ) 
  {
        const id= useId()

        return (
            
                <div className="w-full">
                    {label && < label 
                            className={`inline-block mb-1 pl-1 font-semibold text-lg text-left ${labelcss}`}
                            htmlFor={id}>
                              {label}
                    </label>
                    }

                    <input
                        type={type} 
                        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 


                        ref = {ref} //the ref is passed to input feild 


                        {...props}
                        id={id}
                    />
       
                </div>
            
        )
    }
)

export default Input


//Notes:
/*

1. forwardRef
Sometimes, you have a component (like an input box) that’s inside another component,
and you still want to access that input from the parent component.
To do that, React provides a function called forwardRef.


parent componet----ref---> child component

React.forwardRef(   (props, ref)  =>{ 
    return <input {...props} ref={ref}/>
})

i.e react.forwardRef bhitra function expression is passed.

*/
