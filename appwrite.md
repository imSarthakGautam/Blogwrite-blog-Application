
## 3.  Using Appwrite Services 
- **Services** are external modules or systems that provide specific functionality without requiring you to build it yourself. 

- We register and set up a services like `Appwrite` in our app by connecting it to your project using API keys and project IDs.

- `Appwrite` acts as a service provider that offers:
1. Authentication (login, registration)
2. Database (storing and retrieving blog posts)
3. Storage (for file upload and download)


## To use Appwrite's API 
1. Setting up `Appwrite SDK` (as per platform, For React JavaScript SDK)
```
npm install appwrite
```
__These SDKs simplify the process of making API requests by offering pre-built functions and methods to interact with various Appwrite backend features like authentication, databases, storage, cloud functions, etc., without needing to deal directly with the raw API endpoints.__

2. Initialize Appwrite Client
To interact with Appwrite services, first, we need to initialize the Appwrite client

 __[Note : The Client is like a connection between your app and Appwrite's backend. It tells your app where to send requests (like logging in a user or saving data). Without the client, your app wouldn’t know how to talk to the Appwrite server.]__


3. Using specific Services (API Endpoints)
Appwrite offers different services like _Account, Database, Storage, etc._ Each service has its own methods that can be used to perform different actions.

 __[Note: API Endpoints are specific URLs (web addresses) that your app uses to interact with a backend service like Appwrite. Think of an endpoint as a door that your app goes through to perform certain tasks.]__

4. Setting up environent varibles to avoid hardcoding  values of Appwrite endpoints or Project ID.


## Creation of Appwrite Services (folder)
- src> appwrite

### auth.js
- Here we create `auth.js`

- Inside auth.js we create class `AuthService` to manage user authentication using appwrite services.

- Here we set up `Client` (via constructor, configured using project ID and endpoints) and `Account`.

- Then we access various account methods like **account.**`create(), createEmailSession(), get(), deleteSession()` to manage login, logout,etc.

- The object of `AuthService` is exported for furhter use.
It can use methods of this class like .login, .logout,etc

**This makes frontend isolated from backend.**

### config.js
- Here we create class `Service` to manage DB and storage(bucket) related appwrite services.
- It helps to perform CRUD operations for blogs stored as documents in Appwrite DB,
- Additionally it interacts with appwrite's storage(bucket) to manage files like img used in blog post

- Here we setup `Clinet` and initilaize db services  and storage services inside constructor of class 'Service'

- Creation of methods for Blog and Bucket operations.

   [NOTE:_Buckets are used to manage files such as the `featuredImage` in each blog post. These images are stored in the Appwrite bucket have references in database_]


