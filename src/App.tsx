import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "./app/hooks";
import SidebarL from "./components/SidebarL/SidebarL";
import MainNoLogin from "./components/MainNoLogin/MainNoLogin";
import Player from "./components/Player/Player";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row className="w-100">
            <SidebarL />
            <MainNoLogin />
            <Player />
            <Routes>
              <Route path="/" element={""} />{" "}
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
