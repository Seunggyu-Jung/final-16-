import { Route, Routes } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import FeedList from 'pages/FeedList';
import FeedDetail from 'pages/FeedDetail';
import Profile from 'pages/Profile';
import ProfileEdit from 'pages/ProfileEdit';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedList />} />
      <Route path="/detail" element={<FeedDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
