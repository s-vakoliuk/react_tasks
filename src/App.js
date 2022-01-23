import {Routes, Route} from "react-router-dom";

import {Layout} from "./components";
import {
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetails,
    UserPostsPage,
    UsersPage
} from "./pages";

import HomePage from "./pages/HomePage/HomePage";

const App = () => {

  return (
      <>

      <Routes>
          <Route path={'/'} element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path={'users'} element={<UsersPage />}>
              <Route path={':id'} element={<UserDetails />}>
                  <Route path={'posts'} element={<UserPostsPage />}/>
              </Route>
          </Route>
          <Route path={'posts'} element={<PostsPage />}>
              <Route path={':id'} element={<PostDetailsPage />}>
                  <Route path={'comments'} element={<PostCommentsPage />}/>
              </Route>
          </Route>
          </Route>
      </Routes>
      </>
  );
};

export default App;