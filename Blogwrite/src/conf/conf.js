const conf ={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default conf

/*
a configuration object conf that stores various settings for your Appwrite project, such as URLs, project IDs, bucket IDs, database IDs, and collection IDs.
 These values are pulled from environment variables (using import.meta.env in Vite), which helps manage sensitive data or project-specific configurations.
*/