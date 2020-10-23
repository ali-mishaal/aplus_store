// dashbaord
import Default from '../components/dashboard/default'

//CategoryConfig
import EditCategoryConfig from '../components/categoryConfig/edit'
import CategoryConfig from '../components/categoryConfig'
import Config from '../components/Config'
import Category from '../components/Category'
import Government from '../components/Government'
import City from '../components/City'


// Forms
import FormValidation from '../components/forms/form-control/form-validation'
import BaseInput from '../components/forms/form-control/baseInput'
import InputGroup from '../components/forms/form-control/inputGroup'
import MegaOption from '../components/forms/form-control/megaOption'
import CheckboxandRadio from '../components/forms/form-control/checkboxandRadio'

// Form Layout
import FormDefault from '../components/forms/form-layout/formDefault'
import FormWizard1 from '../components/forms/form-layout/form-wizard-1/formwizard1'

 // Forms widgets
import Datepicker from '../components/forms/form-widget/datepicker'
import Timepicker from '../components/forms/form-widget/timepickerComponent/timepicker'
import Typeahead from '../components/forms/form-widget/typeaheadComponent/typeahead'


// Tabels
import BasicTabels from '../components/tables/basicTable'
import BorderTable from '../components/tables/borderTable'
import SizingTable from '../components/tables/sizingTable'
import StylingTable from '../components/tables/stylingTable'
import DataTable from '../components/tables/dataTable'

import Dropdown from '../components/ui-kits/dropDown'
import TabBootstrap from '../components/ui-kits/tabs/tabBootstrap'
import TabLine from '../components/ui-kits/tabs/tabLine'

export const routes = [
        { path:"/dashboard/default", Component:Default},

        { path:"/setting/category-config", Component:CategoryConfig},
        { path:"/setting/config", Component:Config},

        { path:"/products/category", Component:Category},

        { path:"/area/country", Component:Government},
        { path:"/area/city", Component:City},

        { path:"/forms/form-validation", Component:FormValidation},
        { path:"/forms/baseInput", Component:BaseInput},
        { path:"/forms/inputGroup", Component:InputGroup},
        { path:"/forms/megaOptions", Component:MegaOption},
        { path:"/forms/radio-checkbox", Component:CheckboxandRadio},
        { path:"/form-layout/formDefault", Component:FormDefault},
        { path:"/form-layout/formWizard", Component:FormWizard1},

        { path:"/form-widget/datepicker", Component:Datepicker},
        { path:"/form-widget/timepicker", Component:Timepicker},
        { path:"/form-widget/typeahead", Component:Typeahead},

        { path:"/table/basic", Component:BasicTabels},
        { path:"/table/border", Component:BorderTable},
        { path:"/table/sizing", Component:SizingTable},
        { path:"/table/styling", Component:StylingTable},
        { path:"/table/datatable", Component:DataTable},

        { path:"/ui-kits/dropdown", Component:Dropdown},
        { path:"/ui-kits/tab-bootstrap", Component:TabBootstrap},
        { path:"/ui-kits/tab-line", Component:TabLine},
    
]