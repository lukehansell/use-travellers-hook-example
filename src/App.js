import "./styles.css";
import PageContainer from "./containers/Page";

export default function App() {
  return (
    <div className="App">
      {/*
        default traveller count is essentially the tripappParams data
        I'm only grabbing the data I require  
      */}
      <PageContainer defaultTravellersCount={3} />
    </div>
  );
}
