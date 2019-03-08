import { createBrowserHistory as createHistory } from 'history';
import dva from 'dva';
const app = dva({
    'history':createHistory()
})
export default app