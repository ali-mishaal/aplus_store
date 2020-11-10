// dashbaord
import Default from '../components/dashboard/default'

//Config
import CategoryConfig from '../components/categoryConfig'
import ConfigSett from '../components/configsett'


//Area
import Government from '../components/Government'
import City from '../components/City'

//Products
import Category from '../components/Category'
import Attribute from '../components/Attributes'
import Measurement from '../components/Measurements'


export const routes = [
        { path:"/dashboard/default", Component:Default},

        { path:"/setting/category-config", Component:CategoryConfig},
        { path:"/area/country", Component:Government},

        { path:"/area/city", Component:City},
        { path:"/setting/config", Component:ConfigSett},

        { path:"/products/categories", Component:Category},
        { path:"/products/attributes", Component:Attribute},
        { path:"/products/measurements", Component:Measurement},


        

    
]

export default routes;