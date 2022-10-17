/* 
---------------------------------
Basic Context API setup
---------------------------------
1. context API: Share auth state with other components across the application
2. Create an userContext
3. ContextProvider with passed children
4. Set the userContext in the index.js
5. Now to consume the context: export the AuthContext from UserContext
6. Now available to use anywhere: use useContext hook
*/

/* 
Auth Integration
1. use getAuth by passing the app from firebase config
*/