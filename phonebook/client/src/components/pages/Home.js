import React from "react";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/* COntact Form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
