import React, {useCallback} from 'react'
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PostForm({post}) {


    // useForm hook to initialize form's feilds

    const {register, handleSubmit, watch, setValue,
         control, getValues}=useForm({

            defaultValues:{ 
                //either new or from post object
                title: post?.title || "",
                slug: post?.slug || "",
                content: post?.content || '',
            },
         })
    const navigate=useNavigate()
    
    const userData=useSelector((state)=> {
        console.log(`State: ${JSON.stringify(state, null, 2)}`)
        return state.auth.userData
    })

    const submit = async(data)=>{

        console.log('User Data:', userData);
        if (!userData || !userData.$id) {
            console.error('User ID is missing!');
            return; // Exit the function if userId is not available
        }

        // Check if post exists: EDIT MODE
        if (post){

            //1. Image handling
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]):null

            //if new image is uploaded---> removing old image 
            if (file){
                appwriteService.deleteFile(post.featuredImage);
            }

            //2.  Post update
            // Form data is sent to appwrite to update existing post, waits 
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                // if new image was uploaded, add to new post data
                featuredImage: file ? file.$id : undefined,

            });

            if (dbPost){
                navigate(`/post/${dbPost.$id}`);
            } 


        } 
        // POST DOESN'T EXIST PREVIOUSLY : CREATE MODE
        else {
            //Image upload
            const file = await appwriteService.uploadFile(data.image[0]);

            //Post Creation 
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                // redirect if post is created.
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } 
        }              
    };

        const slugTransform = useCallback((value) => {
            if (value && typeof value === "string"){
                return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, "-");

                    console.log("inside slugTransform")
                }
        
            return "";
        }, []);

            //When you type something into the Title input,
            // the form is "watching" this field for any changes
        
        React.useEffect(() => {
                const subscription = watch((value, { name }) => {
                    if (name === "title") {
                        setValue("slug", slugTransform(value.title), { shouldValidate: true });
                        console.log("inside watch title to slug")
                    }
                });
        
                return () => subscription.unsubscribe();
        }, [watch, slugTransform, setValue]);

        
    
    return (
        <>
         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">

                {/* Title Input */}
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                {/* SLUG - INPUT */}

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}

                    // on Input is for manual updating set values
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
            
        </>
    )

                
}