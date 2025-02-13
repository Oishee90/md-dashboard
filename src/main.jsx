import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManageSubscription from "./Component/Components/ManageSubscription/ManageSubscription";
import Dashboards from "./Component/Components/Dashmain/Dashboards";
import Root from "./Component/Dashboard/Root";
import Login from "./Component/Components/Pages/Login";
import Verification from "./Component/Components/Pages/Verification";
import Forgot from "./Component/Components/Pages/Forgot";
import Setnew from "./Component/Components/Pages/Setnew";
import Success from "./Component/Components/Pages/Success";
import OrderList from "./Component/Components/Order/OrderList";
import OrderDetails from "./Component/Components/Order/OrderDetails";
import Question from "./Component/Components/AddQuestions/Question";
import QuestionsDetails from "./Component/Components/AddQuestions/QuestionsDetails";
import MakeAdmin from "./Component/Components/MakeAdmin/MakeAdmin";
import SubscriptionAddForm from "./Component/Components/ManageSubscription/SubscriptionAddForm";
import SubscriptionEditForm from "./Component/Components/ManageSubscription/SubscriptionEditForm";
import CuponAdd from "./Component/Components/ManageSubscription/CuponAdd";
import Cupon from "./Component/Components/ManageSubscription/Cupon";
import TermsCondition from "./Component/Settings/TermsCondition";
import Privacy from "./Component/Settings/Privacy";
import Notification from "./Component/Notification/Notification";
import Profile from "./Component/Settings/Profile/Profile";
import BookDetails from "./Component/Components/Order/BookDetails";
import CuponEdit from "./Component/Components/ManageSubscription/CuponEdit";

import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      { index: true, element: <Dashboards></Dashboards> },
      { path: "dashboards", element: <Dashboards></Dashboards> },
      { path: "odermanagement", element: <OrderList></OrderList> },
      { path: "order-details", element: <OrderDetails></OrderDetails> },
      { path: "order-details/:id", element: <BookDetails></BookDetails> },
      { path: "question/:id", element: <QuestionsDetails></QuestionsDetails> },

      { path: "addquestions", element: <Question></Question> },
      { path: "makeAdmin", element: <MakeAdmin></MakeAdmin> },
      {
        path: "managesubscription",
        element: <ManageSubscription></ManageSubscription>,
      },
      { path: "subsAdd", element: <SubscriptionAddForm></SubscriptionAddForm> },
      {
        path: "subsEdit",
        element: <SubscriptionEditForm></SubscriptionEditForm>,
      },
      { path: "cupon", element: <Cupon /> },
      { path: "cuponadd", element: <CuponAdd></CuponAdd> },
      { path: "cuponEdit", element: <CuponEdit></CuponEdit> },
      { path: "terms", element: <TermsCondition></TermsCondition> },
      { path: "privacy", element: <Privacy></Privacy> },
      { path: "profile", element: <Profile></Profile> },

      { path: "notification", element: <Notification></Notification> },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/verification", element: <Verification></Verification> },
  { path: "/forgot", element: <Forgot></Forgot> },
  { path: "/setnew", element: <Setnew></Setnew> },
  { path: "/success", element: <Success></Success> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
