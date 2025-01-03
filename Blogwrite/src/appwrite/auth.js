import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";
// Client manages communication with Appwrite
// Accoutn manages user authentication
//  ID provides unique ID for user creation

// Creating AuthService class to handle entire authentication functions
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);

        // Inside constructor:
        //  the client is configured using the endpoint and project ID from the conf.js file.
    }

    // This method creates a new user account using the Appwrite Account service
    // It takes email, pw and name as parameters
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log('Appwrite createAccount:', userAccount)

            if (userAccount) {
                // call another method :login directly
                return this.login({email, password});
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log('Error is creating account ')
            throw error;
        }
    } 

    async login({email, password}){
        try{
            let session = await this.account.createEmailPasswordSession(email, password);
            console.log('Login session from appwrite', session);
            return session
        }
        catch (error) {
            throw error;
        }
    }

    // This method fetches details of the currently logged-in user using this.account.get().
    // If an error occurs, it logs the error and returns null.
    async getCurrentUser(){
        try {
            let currentUser= await this.account.get();
            console.log('The current user', currentUser)
            return currentUser;
        }
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    //This method logs out the user by deleting all active sessions using deleteSessions('all').
    async logout(){
        try {
            await this.account.deleteSessions('all');
        }

        catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService
