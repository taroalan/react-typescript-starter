import Home from './pages/Home';
import NestRoutes from './pages/NestRoutes';
import Sub1 from '@/pages/NestRoutes/AsyncSub1';
import Sub2 from '@/pages/NestRoutes/Sub2';
import About from '@/pages/About';

const routes: Array<Object> = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/nestroutes',
    component: NestRoutes,
    routes: [
      {
        path: '/nestroutes/sub1',
        component: Sub1,
      },
      {
        path: '/nestroutes/sub2',
        component: Sub2,
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
