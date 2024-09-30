// Real-Time Text Editor
//integrating TinyMCE 

import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

// to integrate uncontrolled components like TinyMCE into the form state.
import { Controller } from 'react-hook-form'

export function RTE({
    name,
    control,// pass on control --const {control}=useForm()
    label,
    defaultValue=""
    }) {
    

    return (
    
           

        <div className='w-full'> 
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            {/* Controller responsible for linking TinyMCE editor to form using control prop */}

            <Controller
            name={ name || 'content'}
            control={control} //Tells react-hook-form to manage this field's state
            render ={ ( {feild : {onChange}}) => {
                //what do you want to render : i/p feild, editor here..

                //rendering TINYMCE editor here
                <Editor
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}

                // When users type or edit content, onEditorChange is triggered.
                onEditorChange={onChange}
                // The onChange method inside the render function is provided by React Hook Form,
                // and it ensures that whenever content in the TinyMCE editor changes,
                // the form state is updated accordingly
                />
             } }

             />

        </div>
  )
}

/*
Notes:
Controlled Components and Uncontrolled Components:

A controlled component in React is a form element (e.g., <input>, <textarea>, etc.) where React fully controls its value. 
In this case, the form element's value is stored in the component’s state, and updates to the value are handled by React through event handlers.

An uncontrolled component in React is a form element where the value is controlled by the DOM itself, not by React state.
 You don't control its value through state or props, and instead access the current value when needed, typically using refs.


 The control prop is an object provided by React Hook Form to manage form elements' state. It keeps track of form data, validation,
  and any interaction with the form inputs, making sure that the form behaves as expected.
*/
