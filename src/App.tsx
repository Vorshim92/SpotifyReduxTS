import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Row></Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
