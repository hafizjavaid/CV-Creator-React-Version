import Header from "./components/Header";
import Main from "./components/HOC/Main";
import Left from "./components/HOC/Left";
import Right from "./components/HOC/Right";
import Home from "./components/Home/Home";

import "./index.css";
import Social from "./components/Social/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      {/*========== HEADER ==========*/}
      <Header />
      <Main>
        <Left>
          <Home />
          <Social />
          <Profile />
          <Education />
          <Skills />
        </Left>
        <Right></Right>
      </Main>
    </>
  );
}

export default App;
