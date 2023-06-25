
import React from "react";
import './../styles/App.css';
import Layout from "./Layout";

const App = () => {
  const header = "Welcome to my website";
  const footer = "2023 My Website. All rights reserved.";
  const children = "This is the content of my website."

  return (
    <div>
        {/* Do not remove the main div */}
        <Layout header={header} children={children} footer={footer}></Layout>
    </div>
  )
}

export default App