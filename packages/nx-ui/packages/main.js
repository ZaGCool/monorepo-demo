import Button from './button'
import Header from './header'



export default {
    install(Vue) {
        Vue.component(Button.name, Button);
        Vue.component(Header.name, Header);
    }
}