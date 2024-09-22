# Blog_App

## Installing the dependencies :
```
npm i @reduxjs/toolkit react-redux react-router-dom @tinymce/tinymce-react html-react-parser react-hook-form appwrite
```

appwrite,
tinymce. 
html-react-parser, 
react-hook-forms

## Setting up environment variables: 
- Create .env at project root 

## Using Appwrite Services 
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
2. Initialize Appwrite Client
To interact with Appwrite services, first, we need to initialize the Appwrite client

_[Note :The Client is like a connection between your app and Appwrite's backend. It tells your app where to send requests (like logging in a user or saving data). Without the client, your app wouldn’t know how to talk to the Appwrite server.]_


3. Using specific Services (API Endpoints)
Appwrite offers different services like _Account, Database, Storage, etc._ Each service has its own methods that can be used to perform different actions.

_[Note: API Endpoints are specific URLs (web addresses) that your app uses to interact with a backend service like Appwrite. Think of an endpoint as a door that your app goes through to perform certain tasks.]_

4. Setting up environent varibles to avoid hardcoding  values of Appwrite endpoints or Project ID.

## Creation of Conf / configuration
- here we create `conf.js`
- Conf stores the values of all environment variables in form of js object

## Creation of Appwrite Services (folder)
- src> appwrite
- Here we create `auth.js`

- Inside auth.js we create class `AuthService` to manage user authentication using appwrite services.

- Here we set up Client and Account (via constructor, configured using project ID and endpoints)

- Then we access various account methods like **account.**`create(), createEmailSession(), get(), deleteSession()` to manage login, logout,etc.

- The object of `AuthService` is exported for furhter use.
It can use methods of this class like .login, .logout,etc

**This makes frontend isolated from backend.**