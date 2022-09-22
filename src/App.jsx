import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  Footer,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  Feedback,
  Getstarted,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full  text-white">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> Hero</div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Footer />
        <Business />
        <Button />
        <CardDeal />
        <Clients />
        <CTA />
        <Feedback />
        <Getstarted />
        <Hero />
      </div>
    </div>
  </div>
);

export default App;
