import { useEffect } from "react";

import useTraveller from "../hooks/useTraveller";
import Travellers from "../components/Travellers";

// things that change global scope objects (like title or params) go here
const PageContainer = ({ defaultTravellersCount }) => {
  // using travellers hook to control traveller state
  // pulling that state up to the top level where it's required for
  // the continue.
  const [
    travellers,
    { add: addTraveller, remove: removeTraveller, update: updateTraveller }
  ] = useTraveller(defaultTravellersCount);

  // update title to use the travellers length
  // if you open the sandbox preview in a new window you will see
  // the title updated with the travellers length
  useEffect(() => {
    document.title = `${travellers.length} travellers`;
  }, [travellers]);

  const handleContinue = () => {
    console.table(travellers);
  };

  return (
    <>
      <Travellers
        travellers={travellers}
        updateTraveller={updateTraveller}
        removeTraveller={removeTraveller}
        addTraveller={addTraveller}
      />
      <hr />
      <button onClick={handleContinue}>continue</button>
    </>
  );
};

export default PageContainer;
