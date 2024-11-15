
- Vite as react bundler
- Appwrite : Backend as a service
- Appwrite Setup

- Setting up environment variables: 
- Create .env at project root 

    **Notes :**
    - setting up environment variables, 
    - prefixes matters : VITE_ to let browser know env variables
    - import.meta. for accessing env variables


- redux toolkit for state management.  
    **Notes :Redux Toolkit configuration**
    - Configure store
    - configure slice : authSlice

    - wrap the entire application to allow access of Redux store for the component tree via `Provider`


# React Blog Application

This project is a React-based blog application that leverages modern tools and libraries like Redux Toolkit, React Router, and Appwrite to manage posts, user authentication, and dynamic content creation.

---

## **Table of Contents**
1. [Features](#features)
2. [Packages Used](#packages-used)
3. [Setup Instructions](#setup-instructions)
4. [Folder Structure](#folder-structure)
5. [Routes](#routes)
6. [Usage](#usage)
7. [Contributing](#contributing)

---

---

## **Packages Used**
### **1. @reduxjs/toolkit**
- Manages global state efficiently using slices and reducers.

### **2. react-redux**
- Connects the Redux store to React components.

### **3. react-router-dom**
- Handles routing for pages like Home, Login, Signup, and Posts.

### **4. @tinymce/tinymce-react**
- Provides a WYSIWYG editor for rich text content in blog posts.

### **5. html-react-parser**
- Safely parses and displays dynamic HTML content in the app.

### **6. react-hook-form**
- Simplifies form handling and validation.

### **7. appwrite**
- Backend-as-a-service for user authentication, database storage, and file management.

---

## **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install @reduxjs/toolkit react-redux react-router-dom @tinymce/tinymce-react html-react-parser react-hook-form appwrite
   ```

3. Set up Appwrite:
   - Configure a database, authentication, and file storage in your Appwrite project.
   - Add the Appwrite credentials to your project’s configuration file.

4. Run the app:
   ```bash
   npm start
   ```

---

## **Folder Structure**
```
src/
├── components/
│   ├── AuthLayout.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── RTE.jsx
│   └── Select.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── AllPosts.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   └── Post.jsx
├── redux/
│   ├── store.js
│   ├── slices/
│   │   └── postSlice.js
│   └── authSlice.js
├── appwrite/
│   └── config.js
└── App.jsx
```

---

## **Routes**
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);
```


---


## **Contributing**
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch and create a pull request.

--- 

This README provides a comprehensive overview of the project, its dependencies, setup process, and functionality. Adjust the details to match your specific configuration and goals.







