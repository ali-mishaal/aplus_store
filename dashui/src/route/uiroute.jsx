// dashbaord
import Home from '../UiComponent/home'
import Category from '../UiComponent/category'
import Product from '../UiComponent/product'




export const uiroutes = [
        { path:"/", Component:Home},
        { path:"/category/:id", Component:Category},
        { path:"/product/:id", Component:Product},
]

export default uiroutes;