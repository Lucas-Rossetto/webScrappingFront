import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48747e67 = () => interopDefault(import('..\\pages\\data\\dataFranceGeoJSON.js' /* webpackChunkName: "pages/data/dataFranceGeoJSON" */))
const _62f685be = () => interopDefault(import('..\\pages\\data\\test.js' /* webpackChunkName: "pages/data/test" */))
const _1ca24b60 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/data/dataFranceGeoJSON",
    component: _48747e67,
    name: "data-dataFranceGeoJSON"
  }, {
    path: "/data/test",
    component: _62f685be,
    name: "data-test"
  }, {
    path: "/",
    component: _1ca24b60,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
