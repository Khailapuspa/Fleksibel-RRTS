import { Link } from "react-router-dom";
import HeadBar from "../components/HeadBar";
import { Image } from 'primereact/image';
import '../App.css';

const Home = () => {
  return (
    <>
      <div className="App-Img">
        <Image src="/gambar1.jpg" width="100%" height="600" />
      </div>
      <HeadBar />
    </>
  )
}

export default Home;