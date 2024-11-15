import conf from '../conf/conf'
import { Client,Account, Databases, ID , Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);

        this.databases= new Databases(this.client);
        this.bucket = new Storage(this.client);
        //In Appwrite (and many other services),
        // buckets and storage refer to a way of handling and managing files,
        // such as images, videos, documents, and other data that are not directly stored in the database
        // (like blog posts or user profiles).
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        //all these attributes are part of document (article) defined in appwrite

        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                // data
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error){
            console.log( "appwrite service :: createPost :: error", error);
        }
    
    }

    //Learn about access methods of these parameters...
    // difference between (a,b,c) and (a, {b,c})

    async updatePost(slug, {title, content, featuredImage, status}){
        try{

            return await this.databases.updateDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug,
                //  data
                 {
                    title,
                    content,
                    featuredImage,
                    status,
                 }
                 )
            
        }catch (error){
            console.log( "appwrite service :: updatePost :: error", error);
        }

    }

    async deletePost(slug){
        try{

            return await this.databases.deleteDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug,
            )
            return true
            
        }catch (error){
            console.log( "appwrite service :: deletePost :: error", error);
            return false
        }

    }

    async getPost(slug){
        try{

            let getPost= await this.databases.getDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug,
            )
            console.log('Get Post from appwrite',getPost)
            return getPost;
    
            
        }catch (error){
            console.log( "appwrite service :: getPost :: error", error);
            return false
        }

    }

    async getPosts(queries= [Query.equal("status", "active")]){
        try{

            let getPosts= await this.databases.listDocuments(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 queries,
            )
            console.log(getPosts)
            //que: are posts in form of arrays ?
            return getPosts;
    
            
        }catch (error){
            console.log( "appwrite service :: getPost :: error", error);
            return false
        }

    }

    // --|  FILE UPLOAD SERVICE |--

    async uploadFile(file){
        try{
            const session = await this.account.get(); // Check if user is logged in
            if (session) {

            return await this.bucket.createFile(

                //uploads file to specific bucket identified by :
                conf.appwriteBucketId,
                // generating unique fileId for each file
                ID.unique(), 
                //actual file you want to upload : img, doc
                file, 
            )
            } else {
                console.error("User not authenticated");
                return false;
            }

        }catch (error){
            console.log( "appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){

        try{

            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )

        }catch (error){
            console.log( "appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){

        //fetches preview of the file : maybe thumbnail of image.
        return this.bucket.getFilePreview(

            //references the bucket 
            conf.appwriteBucketId,
            fileId
        )

    }

}



const service = new Service()
export default service

// DB > collections > Documents > [ attrobutes: title, content, userid]