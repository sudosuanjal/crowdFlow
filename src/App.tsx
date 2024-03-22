import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Hackathons from "./_root/pages/Hackathons";
import Seminar from "./_root/pages/Seminar";
import Events from "./_root/pages/Events";
import Workshops from "./_root/pages/Workshops";
import Discover from "./_root/pages/Discover";
import Login from "./_auth/Login";
import Signup from "./_auth/Signup";
import AdminLayout from "./_admin/AdminLayout";
import { CreatePost } from "./_admin/pages/CreatePost";
import Profile from "./_admin/pages/Profile";
import { SpeedInsights } from "@vercel/speed-insights/react";
import EditPost from "./_admin/pages/EditPost";

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/seminar" element={<Seminar />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/discover" element={<Discover />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<EditPost />} />
          </Route>
        </Routes>
        <SpeedInsights />
      </main>
    </>
  );
}
