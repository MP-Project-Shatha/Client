# Client

➤ Server side: https://github.com/MP-Project-Shatha

➤ Deployment: https://Deployment

➤ While running Frontend: http://localhost:3000

➤ While running locally: http://localhost:5000

➤ Trello: https://trello.com/

➤ Slides: https://Slides


## User Stories

- **Register:** Register for access to allow it to use the website.
- **Login:** As a `user` i can login to the website so i can see my calories and exercise.
- **Logout:** As a `user` i can logout from my page.
- **Add weight and height:** As a `user` can add weight and height to calculate the right calories  for `user`.
- **User Exercises:** As a `user` l can see exercies for weight and target.
- **User water requirment:** Calculation for the requirment for wieght and height.
- **Add Exercises:**  As a `admin` i can add exercises for users. 

 ## user profile:

- **See my profile**
- **See the exit point**
 - **Look at the state of exercises**

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | homePage           | public `<Route>`           | Home page                                                    |
| `/Register`        | RegisterPage           |anon only `<AnonRoute>`     |Registration form, after activating the account, go to the login page |
| `/Login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/Like`     | like exercises    | user only `<PrivateRoute>` | Shows all exit points in a list                              |
| `/Activated` | Verify that the account is active or not   | user only `<PrivateRoute>` | Confirm activation to enter the site to save rights
| `/Forget` | Forget password page                  | user only `<PrivateRoute>` | If the password is forgotten, it will be set again after sending a link |
| `/Rest` | To set the password | user only `<PrivateRoute>` | If the password is forgotten, it will be set from restpassword                             |
| `/Exercises` |exercises page                  | user only `<PrivateRoute>` | Many exercises  
| `/Search` |   Search for exercises                | user only `<PrivateRoute>` |   Search for exercises    
| `/UserPage` | Profile                | user only `<PrivateRoute>` | Review of exercises and measurements    
| `/Advices` |  Advices for user               | user only `<PrivateRoute>` | After user enter information
| `/Active` |  For user             | user only `<PrivateRoute>` | For exercises


## Components
- Register
- Login
- Like
- Activated
- Forget
- Rest
- Exercises
- Search
- UserPage
- Advices
- Active
- Navbar

## UML
![UMLFRONT-PM](https://user-images.githubusercontent.com/92248175/146686631-2a612f9f-c6ff-4c2d-9811-520617fd0867.png)


## Wirframes
![1](https://user-images.githubusercontent.com/92248175/146723241-953895b8-5a1b-47ec-924d-eaad218bc410.png)


![2](https://user-images.githubusercontent.com/92248175/146723249-d2d8bb58-4bf3-4323-8b51-4db289ac7618.png)


![3](https://user-images.githubusercontent.com/92248175/146723258-02cd7ef4-7d5a-4635-bb03-0a17c196d433.png)


![4](https://user-images.githubusercontent.com/92248175/146724545-4bde900c-890a-4ae9-840f-f251821b2a1a.png)


