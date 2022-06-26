import "./App.css";

// We use react router dom version 6, so Switch replaced with Routes
// Import react router dom package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import component
// import Home component
import Home from "./Pages/Home";

// Import Auth component
// Import Register component
import RegisterForm from "./Pages/Auth/RegisterForm";
// import Login component
import LoginForm from "./Pages/Auth/LoginForm";
import CampaignPage from "./Pages/CampaignPage";
import CampaignDetail from "./Component/CampaignDetail";
import CreateCampaign from "./Pages/CreateCampaign";
import CreateCampaignImages from "./Pages/CreateCampaignImages";
import StoriesPage from "./Pages/StoriesPage";
import MyCampaignPage from "./Pages/MyCampaignPage";
import MyStoryPage from "./Pages/MyStoriesPage";

function App() {


  return (
    <>
      <Router>
        {/* This is router for navigate to end point */}
        <Routes>
          {/* This is home/root folder this app */}
          <Route path="/" element={<Home />} />

          {/* This is Campaign Detail route for Campaign Detail page */}
          <Route path="/campaign" element={<CampaignPage />} />

          {/* This is Campaign Detail route for Stories Detail page */}
          <Route path="/stories" element={<StoriesPage />} />

          <Route path="/campaign/:id" element={<CampaignDetail />} />
          {/* <Route path="/campaign/create" element={<CreateCampaign />} /> */}
          <Route path="/campaign/create/image" element={<CreateCampaignImages />} />

          {/* This is Campaign Detail route for Stories Detail page */}
          <Route path="/my-campaign" element={<MyCampaignPage />} />

          {/* This is Campaign Detail route for Stories Detail page */}
          <Route path="/my-story" element={<MyStoryPage />} />

          {/* This is Register route for register page */}
          <Route path="/register" element={<RegisterForm />} />

          {/* This is Login route for login page */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
