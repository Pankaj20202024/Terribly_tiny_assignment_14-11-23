import "./App.css";
import Background_images from "./component/Background_images";
import Navbar_component from "./component/Navbar_component";
import Post from "./component/Post";
import Profile_component from "./component/Profile_component";

function App() {
  return (
    <div className="App">
      <Navbar_component />
      <Background_images />
      <Profile_component />
      <Post />
    </div>
  );
}

export default App;
