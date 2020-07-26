import Login from '../pages/Login'
import Register from '../pages/Login/Register'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import DashBoard from '../pages/Home/DashBoard'
import UserList from '../pages/Home/UserList'
import Setting from '../pages/Home/Setting'
//ROOT路由
const RootRoutes = [{
    path: "/login",
    component: Login,
    exact: false,
    name: '登录'
  },
  {
    path: "/register",
    component: Register,
    exact: false,
    name: '注册'
  },
  {
    path: "/404",
    component: NotFound,
    exact: false,
    name: '404'
  },
  {
    path: "/",
    component: Home,
    exact: true,
    name: '首页'
}]

//ADMIN路由
const AdminRoutes = [{
  path: "/home/dashboard",
  component: DashBoard,
  exact: false,
  name: '仪表盘'
},
{
  path: "/home/userlist",
  component: UserList,
  exact: false,
  name: '用户列表'
},{
  path: "/home/setting",
  component: Setting,
  exact: false,
  name: '设置中心'
}]

export { RootRoutes, AdminRoutes }