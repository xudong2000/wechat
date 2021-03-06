import Vue from 'vue'
import {
  Button,
  Search,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Popup,
  Grid,
  GridItem,
  Image,
  List,
  Cell,
  Tab,
  Tabs,
  TreeSelect,
  Form,
  Field,
  Toast,
  Notify,
  Dialog,
} from 'vant'

Vue.use(Button)
Vue.use(Search)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Popup)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(List)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(TreeSelect)
Vue.use(Form)
Vue.use(Field)
Vue.prototype.$toast = Toast
Vue.prototype.$notify = Notify
Vue.prototype.$dialog = Dialog
