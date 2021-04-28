import { useState } from "react";

const createEmptyTraveller = () => ({
  title: "Mr",
  firstName: "",
  lastName: ""
});

const useTraveller = (defaultTravellersCount = 1) => {
  // creating the default travellers blank data
  const defaultTravellers = [];
  for (let i = 0; i < defaultTravellersCount; i++) {
    defaultTravellers.push(createEmptyTraveller());
  }

  const [travellers, setTravellers] = useState(defaultTravellers);

  const add = () =>
    setTravellers((travellers) => [...travellers, createEmptyTraveller()]);

  const remove = (i) => {
    setTravellers((travellers) => {
      const updated = [...travellers];
      updated.splice(i, 1);
      return updated;
    });
  };

  const update = (i, key, value) => {
    console.log("in hook", i, key, value);
    setTravellers((travellers) => {
      const updated = [...travellers];
      updated[i][key] = value;
      return updated;
    });
  };

  return [
    // data of travellers
    travellers,
    // methods to affect travellers
    {
      add, // () => {}
      remove, // (indexToRemove) => {}
      update // (indexToUpdate, keyToUpdate, updatedValue)
    }
  ];
};

export default useTraveller;
