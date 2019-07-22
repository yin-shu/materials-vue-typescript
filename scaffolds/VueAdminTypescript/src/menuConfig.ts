// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import { IHeaderMenu } from '@/types'

const headerMenuConfig: IHeaderMenu[] = [
  {
    name: '主页',
    path: '/',
    icon: 'example'
  },
  {
    name: '关于',
    path: '/about',
    icon: 'form'
  }
]

const asideMenuConfig: any[] = []

export { headerMenuConfig, asideMenuConfig }
