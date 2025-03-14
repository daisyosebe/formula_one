import ContentGrid from "../../components/contentgrid/contentGrid";
import AboutSection from "../../components/aboutsection/AboutSection";
// import Header from "../../components/header/Header";
// import astonMartinLogo from "../../assets/logo/aston.png";

// / Importing css and project
import "./AstonMartin.css";

const astonMartinData = [
  {
    image: "/images/lancepfp.png",
    title: "Lance",
    description: "Description of Aston Martin Model 1.",
  },
  {
    image: "/images/alonsopfp.png",
    title: "Alonso",
    description: "Description of Aston Martin Model 2.",
  },
];
// Exporting functionable page
export default function AstonMartinPage(){
const astonImages = [
  "/images/aston1.jpg",
  "/images/aston2.jpg",
  "/images/aston3.jpg"
];
const astonAboutText = "Aston Martin has a rich history in Formula One, combining luxury and performance on the track.";

  return (
    <main className="container-fluid">


{/* <Header title="Aston Martin" navbarPosition="bottom" pageLogo={astonMartinLogo} touchImage={true} />

      {/* <div className="space"></div> */}
      {/* <div className='image'></div> */}
<img src="../images/astonheader.jpg" alt="Aston Martin Car" className="headerImage" /> 
      <div className="row"> </div>
      <ContentGrid items={astonMartinData} />
      <AboutSection images={astonImages} aboutText={astonAboutText} />  {/* Pass different text */}

    </main>
  )
};