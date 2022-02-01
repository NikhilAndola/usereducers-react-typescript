import { AppProvider } from "./Context";
import Products from "./Products";

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <Products />
      </AppProvider>
    </div>
  );
}

// import React from "react";

// const App = () => {
//   <AppProvider>
//     // your stuff
//     <Products />
//   </AppProvider>;
// };

// export default App;
