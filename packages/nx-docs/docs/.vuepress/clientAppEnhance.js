import { defineClientAppEnhance } from '@vuepress/client'
import ZUI from 'zag-ui';
import 'zag-ui/lib/styles/index.css';
export default defineClientAppEnhance(({ app, router, siteData }) => {
    // ...
    app.use(ZUI);
})