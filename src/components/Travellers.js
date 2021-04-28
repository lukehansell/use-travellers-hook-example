// reducing duplication by having custom input
const Input = ({ value, onChange, name }) => (
  <input value={value} onChange={(e) => onChange(name, e.target.value)} />
);

// dumb component used only for rendering - no state
const Travellers = ({
  travellers,
  updateTraveller,
  addTraveller,
  removeTraveller
}) => {
  return (
    <>
      <ul>
        {travellers.map(({ title, firstName, lastName }, i) => {
          const handleChange = (i) => (key, value) => {
            updateTraveller(i, key, value);
          };

          console.log(`i is ${i}`);
          return (
            <li key={i}>
              <label>
                Title
                <Input value={title} name="title" onChange={handleChange(i)} />
              </label>
              <label>
                First name
                <Input
                  value={firstName}
                  name="firstName"
                  onChange={handleChange(i)}
                />
              </label>
              <label>
                last name
                <Input
                  value={lastName}
                  name="lastName"
                  onChange={handleChange(i)}
                />
              </label>
              <button onClick={() => removeTraveller(i)}>remove</button>
            </li>
          );
        })}
      </ul>
      <button onClick={addTraveller}>add</button>
    </>
  );
};

export default Travellers;
