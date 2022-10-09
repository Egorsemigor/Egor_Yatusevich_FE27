import { Route, Routes } from "react-router-dom";
import { MyPostsList } from "../components/MyPostList";
import { posts } from "../mocks";
import { AddPost } from "../pages/AddPost";
import { EmailConfirm } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { MyPosts } from "../pages/MyPost";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { Registration } from "../pages/Registration";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="registrationsecsess" element={<RegisterSuccess />} />
      <Route path="emailconfirm" element={<EmailConfirm />} />
      <Route path="selectedpost/:postId" element={<SelectedPost />} />
      <Route path="/activate/:uid/:token" element={<EmailConfirm />} />
      <Route path="/mypost" element={<MyPosts />} />
      <Route path="/addpost" element={<AddPost/> }/>
    </Routes>
  );
};
