import img1 from '../assets/galleryImg/Gallery1.jpeg';
import img2 from '../assets/galleryImg/Gallery21.jpg';
import img3 from '../assets/galleryImg/banner23.jpg';
import img4 from '../assets/galleryImg/Gallery11.jpeg';
import img5 from '../assets/galleryImg/Gallery7 (2).jpeg';
import img6 from '../assets/galleryImg/Gallery17.jpg';
import img7 from '../assets/galleryImg/Gallery2.jpeg';
import img8 from '../assets/galleryImg/Gallery20.jpg';
import img9 from '../assets/galleryImg/Gallery14.jpg';
import img10 from '../assets/galleryImg/Gallery15.jpg';
import img11 from '../assets/galleryImg/Gallery3.jpeg';
import img12 from '../assets/galleryImg/Gallery16.jpg';
import img13 from '../assets/galleryImg/Gallery13.jpeg';
import img14 from '../assets/galleryImg/Gallery18.jpg';
import img15 from '../assets/galleryImg/Gallery5.jpeg';
import img16 from '../assets/galleryImg/Gallery8.jpeg';
import img17 from '../assets/galleryImg/Gallery4.jpeg';
import img18 from '../assets/galleryImg/Gallery10.jpeg';
import img19 from '../assets/galleryImg/Gallery12.jpeg';
import img20 from '../assets/galleryImg/Gallery6.jpeg';

const Gallery = () => {
  return (
    <div className={"p-s md:p-10 rounded-3xl"} style={{paddingTop: '100px'}}>
    <div className={"columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 " +
        "[&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 roun rounded-3xl"}>
        <img className={"rounded-2xl"} src={img1}/>
        <img className={"rounded-2xl"} src={img2}/>
        <img className={"rounded-2xl"} src={img3}/>
        <img className={"rounded-2xl"} src={img4}/>
        <img className={"rounded-2xl"} src={img5}/>
        <img className={"rounded-2xl"} src={img6}/>
        <img className={"rounded-2xl"} src={img7}/>
        <img className={"rounded-2xl"} src={img8}/>
        <img className={"rounded-2xl"} src={img9}/>
        <img className={"rounded-2xl"} src={img10}/>
        <img className={"rounded-2xl"} src={img11}/>
        <img className={"rounded-2xl"} src={img12}/>
        <img className={"rounded-2xl"} src={img13}/>
        <img className={"rounded-2xl"} src={img14}/>
        <img className={"rounded-2xl"} src={img15}/>
        <img className={"rounded-2xl"} src={img16}/>
        <img className={"rounded-2xl"} src={img17}/>
        <img className={"rounded-2xl"} src={img18}/>
        <img className={"rounded-2xl"} src={img19}/>
        <img className={"rounded-2xl"} src={img20}/>
        </div>
    </div>
  )
}

export default Gallery