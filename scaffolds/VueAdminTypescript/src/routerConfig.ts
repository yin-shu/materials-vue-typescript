// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Home from '@/pages/Home/index.vue'
import About from './pages/About/index.vue'
import BlankLayout from './layouts/BlankLayout/index.vue'
import { IRouter } from '@/types'

const routerConfig: IRouter[] = [
  {
    path: '/',
    layout: BlankLayout,
    component: Home
  },
  {
    path: '/about',
    layout: BlankLayout,
    component: About
  }
]

export default routerConfig
