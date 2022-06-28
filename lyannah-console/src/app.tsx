import { Login } from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup/signup";
import { ForgotPassword } from "./pages/forogot_password/ForgotPassword";
import { CheckEmailForPassword } from "./pages/forogot_password/CheckEmail";
import { ResetPassword } from "./pages/forogot_password/ResetPassword";
import { Console } from "./pages/console/Console";
import { AppCollection } from "./pages/console/app_collection/AppCollection";
import { DependencyContextProvider } from "./contexts/dependencies/dependencies";
import {
  SideBarContext,
  SideBarContextProvider,
} from "./contexts/sideBar/sideBar";

export const App = (props: any) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<CheckEmailForPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/console" element={<Console />} />
      <Route
        path="/console/app-collection"
        element={
          <SideBarContextProvider>
            <AppCollection />
          </SideBarContextProvider>
        }
      />
    </Routes>
  );
};
