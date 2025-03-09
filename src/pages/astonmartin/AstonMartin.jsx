import ContentGrid from "../../components/contentgrid/contentGrid";
// / Importing css and project
import "./AstonMartin.css";

const astonMartinData = [
  {
    image: "/images/lancepfp.png",
    title: "Aston Martin Model 1",
    description: "Description of Aston Martin Model 1.",
  },
  {
    image: "/images/alonsopfp.png",
    title: "Aston Martin Model 2",
    description: "Description of Aston Martin Model 2.",
  },
];
// Exporting functionable page
export default function AstonMartinPage(){

  return (
    <main className="container-fluid">
      <div className="space"></div>
      <div className='image'></div>
      <div className="row"> </div>
      <ContentGrid items={astonMartinData} />

    </main>
  )
};