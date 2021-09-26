import './global.scss'
import { canUseDom } from './utils'


if (canUseDom) {
  document.addEventListener('touchstart', () => {}, true)
}