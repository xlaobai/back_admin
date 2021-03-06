import Vue from 'vue/dist/vue.js'
import 'element-ui/lib/theme-chalk/index.css';

import {
    Loading,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Form,
    FormItem,
    Row,
    Col,
    Button,
    Input,
    Message,
    Table,
    TableColumn,
    Popover,
    Tag,
    Pagination,
    Switch,
    Select,
    Option,
    Upload
} from 'element-ui';

Vue.use(Loading);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Submenu);
Vue.use(Button);
Vue.use(Input);
Message.install = function (Vue, options) {
    Vue.prototype.$message = Message
}
Vue.use(Message);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Upload);
