import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PathsPage from "./pages/PathsPage";
import SignupPage from "./pages/SignupPage";

import { Provider } from 'react-redux';
import store from './redux/store';
import Activate from "./pages/Activate";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import LabsPae from "./pages/LabsPae";
import CTFPage from "./pages/CTFPage";
import TopicDetail from "./pages/TopicDetail";
import CTFDetail from "./pages/CTFDetail";
import CTFTopicDetail from "./pages/CTFTopicDetail";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/paths" element={<PathsPage />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/labs" element={<LabsPae />} />
          <Route path="/ctfs" element={<CTFPage />} />
          <Route path="/modules/:slug/:id" element={<ModuleDetail />} />
          <Route path="/ctfs/:slug/:id" element={<CTFDetail />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/ctfs/:id" element={<CTFTopicDetail />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
