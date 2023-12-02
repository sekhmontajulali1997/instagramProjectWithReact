import AccountSignUp from "../Pages/AccountSignUp/AccountSignUp";
import AccountLogIn from "../Pages/AccoutLogIn/AccountLogIn";

const PrivateRouter = [
  {
    path: "/",
    element: <AccountLogIn />,
  },
  {
    path: "/accounts/emailsignup",
    element: <AccountSignUp />,
  },
];

export default PrivateRouter;
