const  AppRoutes = [
    {
        path:'/',
        element:<SignIn/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/admin',
        element:<AdminProtectedRoute><AdminDashboard/></AdminProtectedRoute>
    },
    {
        path:'/user',
        element: <UserProtectedRoute><UserDashboard/></UserProtectedRoute>
    },
    {
        path:'/*',
        element:<Navigate to='/'/>
    }
]

export default AppRoutes