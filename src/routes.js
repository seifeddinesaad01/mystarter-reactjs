import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalsProvider from "./components/ModalsProvider";
import MainLayout from "./layouts/MainLayout";
import Progress from "./components/Progress/Progress";
import NotFoundView from "./components/NotFound";

import { lazy } from "react";
import { Suspense } from "react";

const RoutesProvider = () => {
  const HomeView = lazy(() => import("./views/Home"));
  const AboutView = lazy(() => import("./views/About"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routes>
          {/* Users Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeView />} />
            <Route path="about" element={<AboutView />} />
          </Route>
          {/* Uncreated Routes */}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <ModalsProvider />
    </BrowserRouter>
  );
};

export default RoutesProvider;
