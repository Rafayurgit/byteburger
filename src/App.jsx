import React from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import './app.css';
import './index.css';

export default function App() {
  return (
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
  );
}
