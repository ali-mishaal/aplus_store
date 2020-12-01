// dashbaord
import Default from '../components/dashboard/default'

//setting
import CategoryConfig from '../components/categoryConfig'
import ConfigSett from '../components/configsett'
import Slider from '../components/Slider'

import News from '../components/News'
import createNews from '../components/News/create'
import EditNews from '../components/News/edit'

import Informations from '../components/Informations'
import createInformation from '../components/Informations/create'
import EditInformation from '../components/Informations/edit'

import Careers from '../components/Careers'
import createCareer from '../components/Careers/create'
import EditCareer from '../components/Careers/edit'

import Services from '../components/Services'
import createService from '../components/Services/create'
import EditService from '../components/Services/edit'


//Area
import Government from '../components/Government'
import City from '../components/City'

//Products
import Category from '../components/Category'
import createCategory from '../components/Category/create'
import EditCategory from '../components/Category/edit'

import Products from '../components/Products'
import createProduct from '../components/Products/create'
import EditProduct from '../components/Products/edit'

import Attribute from '../components/Attributes'
import Measurement from '../components/Measurements'



export const routes = [
        
        { path:"/dashboard", Component:Default},

        { path:"/dashboard/setting/category-config", Component:CategoryConfig},
        { path:"/dashboard/setting/config", Component:ConfigSett},
        { path:"/dashboard/setting/slider", Component:Slider},

        { path:"/dashboard/setting/news", Component:News},
        { path:"/dashboard/setting/news/create", Component:createNews},
        { path:"/dashboard/setting/news/edit/:id", Component:EditNews},

        { path:"/dashboard/setting/informations", Component:Informations},
        { path:"/dashboard/setting/informations/create", Component:createInformation},
        { path:"/dashboard/setting/informations/edit/:id", Component:EditInformation},

        { path:"/dashboard/setting/careers", Component:Careers},
        { path:"/dashboard/setting/careers/create", Component:createCareer},
        { path:"/dashboard/setting/careers/edit/:id", Component:EditCareer},

        { path:"/dashboard/setting/services", Component:Services},
        { path:"/dashboard/setting/services/create", Component:createService},
        { path:"/dashboard/setting/services/edit/:id", Component:EditService},
        
         { path:"/dashboard/area/country", Component:Government},
        { path:"/dashboard/area/city", Component:City},
        

        { path:"/dashboard/products/categories", Component:Category},
        { path:"/dashboard/products/categories/create", Component:createCategory},
        { path:"/dashboard/products/categories/edit/:id", Component:EditCategory},

        { path:"/dashboard/products/products", Component:Products},
        { path:"/dashboard/products/products/create", Component:createProduct},
        { path:"/dashboard/products/products/edit/:id", Component:EditProduct},

        { path:"/dashboard/products/attributes", Component:Attribute},
        { path:"/dashboard/products/measurements", Component:Measurement},


        

    
]

export default routes;