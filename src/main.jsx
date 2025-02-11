import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
;

import ManageSubscription from './Component/Components/ManageSubscription';
import Dashboards from './Component/Components/Dashmain/Dashboards';
import Root from './Component/Dashboard/Root';
import Login from './Component/Components/Pages/Login';
import Verification from './Component/Components/Pages/Verification';
import Forgot from './Component/Components/Pages/Forgot';
import Setnew from './Component/Components/Pages/Setnew';
import Success from './Component/Components/Pages/Success';
import OrderList from './Component/Components/Order/OrderList';
import OrderDetails from './Component/Components/Order/OrderDetails';
import Question from './Component/Components/AddQuestions/Question';
import QuestionsDetails from './Component/Components/AddQuestions/QuestionsDetails';
import MakeAdmin from './Component/Components/MakeAdmin/MakeAdmin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children: [
      { path: 'dashboards', element: <Dashboards></Dashboards> },
      { path: 'odermanagement', element: <OrderList></OrderList>},
      { path: 'order-details', element: <OrderDetails></OrderDetails> },
      { path: 'question/:id', element: <QuestionsDetails></QuestionsDetails> },

      { path: 'addquestions', element: <Question></Question> },
      { path: 'makeAdmin', element: <MakeAdmin></MakeAdmin> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
      ],
  
  },  
  { path: '/login', element: <Login></Login>},
  { path: '/verification', element: <Verification></Verification> },
  { path: '/forgot', element: <Forgot></Forgot> },
  { path: '/setnew', element: <Setnew></Setnew> },
  { path: '/success', element: <Success></Success> },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
