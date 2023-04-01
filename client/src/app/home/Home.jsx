import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import HAbout from "./HAbout/HAbout";
import HMain from "./HMain/HMain";
import "./home.css";
import Nav from "react-bootstrap/Nav";
import Footer from "../CommonComponents/footer/footer.js";

const Home = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="dark" expand="lg">
        <Navbar.Brand style={{ color: "#1eb2a6" }}>TRU Pharma</Navbar.Brand>
        <Nav.Link href="/login" style={{marginLeft:"65em"}}>
          <button className="button2 nav-button">Login!</button>
        </Nav.Link>
      </Navbar>

      <HMain />
      <HAbout />
      {/* <HCourses /> */}
      {/* <HTestimonal /> */}
      <Footer />
    </>
  );
};

export default Home;

// render() {
//   if (window.ethereum.isMetaMask) {
//     if (this.state.status === "default") {
//       return (
//         <div>
//           <Navbar sticky="top" bg="light" variant="dark" expand="lg">
//             <Navbar.Brand style={{ color: "#1eb2a6" }}>
//               TRU Pharma
//             </Navbar.Brand>
//           </Navbar>

//           <Container fluid className="mt-5">
//             <Row>
//               <Col xs={0} sm={1} md={3} lg={4}></Col>

//               <Col>
//                 {/* <h2 className="mt-5">Login</h2> */}

//                 {/* <div class="form1"> */}
//                 <div class="title">Hey There, Welcome!</div>
//                 <div class="input-container ic1">
//                   <input
//                     id="firstname"
//                     class="input"
//                     type="text"
//                     placeholder=" "
//                   />
//                   <div class="cut"></div>
//                   <label for="firstname" class="placeholder">
//                     Enter your good name!
//                   </label>
//                 </div>
//                 {/* <button type="text" class="submit">
//                     submit
//                   </button>
//                 </div> */}

//                 <Form className="mt-3">
//                   <Form.Group controlId="role">
//                     <Form.Control
//                       as="select"
//                       value={this.state.value}
//                       onChange={this.handleChange}
//                       className="login-select"
//                     >
//                       <option>Login als...</option>
//                       <option>Versicherte</option>
//                       <option>Arzt</option>
//                       <option>Apotheker</option>
//                       <option>Admin</option>
//                     </Form.Control>
//                   </Form.Group>
//                   <Button
//                     className="button1 mb-3"
//                     onClick={this.login}
//                     block
//                   >
//                     Proceed
//                   </Button>

//                   <Alert
//                     show={this.state.unverifiedUser}
//                     variant="danger"
//                     className="mt-3"
//                   >
//                     Dieser Account wurde noch nicht verifiziert oder Sie
//                     versuchen sich mit einer falschen Rolle anzumelden!
//                   </Alert>
//                   <Alert
//                     show={this.state.missingInput}
//                     variant="danger"
//                     className="mt-3"
//                   >
//                     Bitte wählen Sie Ihre Rolle aus!
//                   </Alert>
//                 </Form>
//               </Col>

//               <Col xs={0} sm={1} md={3} lg={4}></Col>
//             </Row>
//           </Container>
//         </div>
//       );
//     } else if (this.state.status === "login_insured") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/insured" />
//             <Switch>
//               <Route path="/insured">
//                 <LandingInsured />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else if (this.state.status === "login_physician") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/physician" />
//             <Switch>
//               <Route path="/physician">
//                 <LandingPhysician />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else if (this.state.status === "login_pharmacist") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/pharmacist" />
//             <Switch>
//               <Route path="/pharmacist">
//                 <LandingPharmacist />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else if (this.state.status === "login_admin") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/admin" />
//             <Switch>
//               <Route path="/admin">
//                 <Administration />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else if (this.state.status === "registration_insured") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/registerInsured" />
//             <Switch>
//               <Route path="/registerInsured">
//                 <RegisterInsured />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else if (this.state.status === "registration_physician") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/registerPhysician" />
//             <Switch>
//               <Route path="/registerPhysician">
//                 <RegisterPhysician />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else if (this.state.status === "registration_pharmacist") {
//       return (
//         <div>
//           <Router forceRefresh={true}>
//             <Redirect push to="/registerPharmacist" />
//             <Switch>
//               <Route path="/registerPharmacist">
//                 <RegisterPharmacist />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       );
//     }
//   } else {
//     return (
//       <>
//         <Navbar bg="light" variant="dark" expand="lg">
//           <Navbar.Brand>TRU Pharmapt</Navbar.Brand>
//         </Navbar>

//         <Container fluid className="mt-5">
//           <Row>
//             <Col xs={0} sm={1} md={3} lg={4}></Col>
//             <Col>
//               <h3>MetaMask nicht installiert oder nicht geöffnet!</h3>
//               <p>
//                 Es scheint als hätten Sie MetaMask noch nicht installiert oder
//                 die Browser Erweiterung noch nicht geöffnet!
//               </p>
//             </Col>
//             <Col xs={0} sm={1} md={3} lg={4}></Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }
// }
// export default NewLogin;
