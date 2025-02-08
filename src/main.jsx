import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import ManageSubscription from './Component/Components/ManageSubscription';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>, children: [
      { path: 'managesubscription', element: <ManageSubscription></ManageSubscription> },
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
