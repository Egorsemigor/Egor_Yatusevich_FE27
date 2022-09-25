import { Route, Routes } from "react-router-dom";
import { posts } from "../mocks";
import { EmailConfirm } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterSucsess } from "../pages/RegisterSuccess";
import { Registration } from "../pages/Registration";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="registrationsecsess" element={<RegisterSucsess />} />
      <Route path="emailconfirm" element={<EmailConfirm />} />
      <Route path="selectedpost/:postId" element={<SelectedPost />} />
      <Route path="/activate/:uid/:token" element={<EmailConfirm />} />
    </Routes>
  );
};
