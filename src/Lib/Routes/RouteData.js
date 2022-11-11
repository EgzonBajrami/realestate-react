import ApartmentsPage from "../../Pages/ApartmentsPage/ApartmentsPage"
import Dashboard from "../../Pages/DashboardPage/Dashboard"
import EditApartmentPage from "../../Pages/EditApartmentPage/EditApartmentPage"
import EditHousePage from "../../Pages/EditHousePage/EditHousePage"
import EditPropertyPage from '../../Pages/EditPropertyPage/EditPropertyPage'
import HomePage from "../../Pages/HomePage/HomePage"
import HousePage from "../../Pages/HousePage/HousePage"
import Login from "../../Pages/LoginPage/Login"
import PropertyPage from "../../Pages/PropertyPage/PropertyPage"
import Register from "../../Pages/Register/Register"
import SingleApartmentPage from '../../Pages/SingleApartmentPage/SingleApartmentPage'
import SingleHousePage from "../../Pages/SingleHousePage/SingleHousePage"
import SinglePropertyPage from "../../Pages/SinglePropertyPage/SinglePropertyPage"

export const routeData = {
    public:[
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
            path:'/',
            element:<HomePage/>
        },
        {
            path:'/apartments',
            element:<ApartmentsPage/>
        },
        {
            path:'/houses',
            element:<HousePage />
        },
        {
            path:'/apartments/:id',
            element:<SingleApartmentPage/>
        },
        {
            path:'/houses/:id',
            element:<SingleHousePage/>
        },
        {
            path:'/properties',
            element:<PropertyPage />
        },
        {
            path:'/properties/:id',
            element:<SinglePropertyPage/>
        },
        {
            path:'/apartments/edit/:id',
            element:<EditApartmentPage />
        },
        {
            path:'/houses/edit/:id',
            element:<EditHousePage />
        },
        {
            path:'/properties/edit/:id',
            element:<EditPropertyPage />
        }
    ],
    private:[
        {
            path:'/dashboard',
            element:<Dashboard />
        },
      
    ]
}