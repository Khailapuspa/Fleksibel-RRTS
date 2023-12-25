import { Link } from "react-router-dom";
import HeadBar from "../components/HeadBar";
import { Image } from 'primereact/image';
import '../App.css';

const Home = () => {
  return (
    <>
      
      <HeadBar />
        <div className="App-Img">
          <Image src="/gambar1.jpg" width="1360" height="600" />
        </div>
            
    </>
  )
}

export default Home;