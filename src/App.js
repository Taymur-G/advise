import { useState, useEffect, React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// Advice Slip API Fetch

// const App = () => {
//   const [adviceSlip, setAdviceSlip] = useState("")
//   const [error, setError] = useState(
//     {
//       error: false,
//       message: ""
//     }
//   )
//   const handler = async () => {
//     try {
//       const response = await fetch("https://api.adviceslip.com/advice")
//       console.log(response)
//       if (response.status !== 200) {
//         throw new Error("the error is...its messed up")
//       }
//       const data = await response.json()
//       setAdviceSlip(data.slip)
//     } catch (e) {
//       setError({ error: true, message: e.message })
//     }
//   }
//   if (error.error) {
//     return <h1>{error.message}</h1>
//   }
//   return (
//     <div>
//       <h1>advice</h1>
//       <p>advice: {adviceSlip.advice}</p>
//       <button onClick={handler}>get data</button>
//     </div>
//   );
// };

// Monster Example

const App = () => {
  const [monsters, setMonsters] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const handler = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://www.dnd5eapi.co/api/monsters%22);
      console.log(response);
      if (response.status !== 200) {
        throw new Error("the error is...its messed up");
      }
      const data = await response.json();
      setMonsters(data.results);
      setLoading(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };

  useEffect(() => {
    handler();
  }, []);

  if (error.error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h1>monsters</h1>
      {monsters ? (
        <>
          {monsters.map((monster) => {
            return <p>{monster.name}</p>;
          })}
        </>
      ) : (
        <h1>loading monsters...</h1>
      )}
    </div>
  );
};

// const App = () => {
//   const [carImage, setCarImage] = useState("");

//   const handler = async () => {
//     const response = await fetch("https://forza-api.tk/");
//     const data = await response.json();
//     setCarImage(data);
//     console.log(data);
//   };

//   useEffect(() => {
//     handler();
//   }, [])

//   return (
//     <div>
//       <h1>Forza Cars</h1>
//       <button onClick={handler}>Generate</button>
//       <img src={carImage.image} alt={carImage.image}></img>
//     </div>
//   )
// };

export default App;
