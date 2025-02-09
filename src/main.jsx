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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, children: [
      { path: 'dashboards', element: <Dashboards></Dashboards> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
