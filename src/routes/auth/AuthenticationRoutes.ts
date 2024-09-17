import express, {Request,Response} from "express";


const authRoutes = express.Router();


authRoutes.get('/',(req:Request,res:Response)=>{
    res.json({
        "author":"Priyanshu",
        "value":"Welcome to Nodejs"
    })
});




/**
 * Modified route types
 */
/* Define the routes for the CRUD operations using router.route() */
// router.route('/users')
//   .get(getUsers); // Read: Get all users

// router.route('/create')
//    .post(createUser); // Create: Create a new user  

// router.route('/users/:id')
//   .patch(updateUser) // Update: Update a user by ID
//   .delete(deleteUser);




export {authRoutes};
