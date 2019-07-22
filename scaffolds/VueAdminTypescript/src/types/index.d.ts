import { Component, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'

export interface IHeaderMenu {
  name: string
  path: string
  icon: string
}

export interface IRouter extends RouteConfig {
  layout?: any,
}
