import React from "react";
import Navbar from "./comonents/Navbar";
import Banner from "./comonents/Banner";
import Client from "./comonents/Client";
import Manage from "./comonents/Manage";
import Experince from "./comonents/Experince";
import BusinessReinvent from "./comonents/BusinessReinvent";
import Design from "./comonents/Design";
import CustomersReview from "./comonents/CustomersReview";
import Commuinity from "./comonents/Commuinity";
import LetUsDoTheWork from "./comonents/LetUsDoTheWork";
import Footer from "./comonents/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Client />
      <Manage />
      <Experince />
      <BusinessReinvent />
      <Design />
      <CustomersReview />
      <Commuinity />
      <LetUsDoTheWork />
      <Footer />
    </>
  );
};

export default App;
