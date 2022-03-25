import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProject } from "./components/briefcase/CreateProject";
import { EditProject } from "./components/briefcase/EditProject";
import { Header } from "./components/layout/Header";
import { About } from "./pages/About";
import { Briefcase } from "./pages/Briefcase";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Resume } from "./pages/Resume";
import { Services } from "./pages/Services";

// Context
import {
  PortafolioContext,
  PortafolioProvider,
} from "./context/PortafolioContext";

export const PortafolioApp = () => {
  // Conntext en el component
  const [auth, setAuth] = useContext(PortafolioContext);

  return (
    <div>
      <PortafolioProvider value={[auth, setAuth]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/briefcase" element={<Briefcase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Services />} />

            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/edit-project/:id" element={<EditProject />} />
          </Routes>
        </BrowserRouter>
      </PortafolioProvider>
    </div>
  );
};
