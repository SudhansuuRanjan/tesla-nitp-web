import { useState, useEffect } from "react"
import './Gallery.scss'
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Heading from "../../components/Headings/Heading"


const Gallery = () => {

    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);


    const gallery = [
        {
            url: "https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png"
        },
        {
            url: "https://images5.alphacoders.com/775/thumbbig-775602.webp"
        },
        {
            url: "https://crypto-economy.com//wp-content/uploads/2020/03/algorand-review.jpg"
        },
        {
            url: "https://images4.alphacoders.com/190/thumbbig-190618.webp"
        },
        {
            url: "https://images6.alphacoders.com/781/thumbbig-781982.webp"
        },
        {
            url: "https://images7.alphacoders.com/330/thumbbig-330472.webp"
        },
        {
            url: "https://images7.alphacoders.com/333/thumbbig-333490.webp"
        },
        {
            url: "https://images.alphacoders.com/176/thumbbig-176733.webp"
        }
    ]

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modal]);


    return (
        <div className="gallery_container">
            <Heading heading="PHOTOS" desc="— Our Photo Gallery" />
            <div className="photo-gallery-cont">
                <div className="photo-gallery">

                    <div className="image-container">
                        {
                            gallery.map((img, index) => {
                                return (
                                        <img data-aos="fade-up" key={index} src={img.url} alt="gallery-photo" onClick={() => {
                                            setCurrentImg(index);
                                            setModal(true);
                                        }} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>

            {
                modal && <div className="slideshow-container transition">
                    <div className="slide">
                        <div className="img-display">
                            <img src={gallery[currentImg].url} alt="dhgjjhgd" />
                        </div>

                        <div className="controls">
                            <button onClick={() => {
                                if (currentImg === 0) {
                                    setCurrentImg(gallery.length - 1);
                                } else {
                                    setCurrentImg(currentImg - 1);
                                }
                            }}>
                                <MdKeyboardArrowLeft className="text-white" size={20} />
                            </button>
                            <button onClick={() => setModal(false)}>
                                <MdClose className="text-white" size={20} />
                            </button>
                            <button onClick={() => {
                                if (currentImg === gallery.length - 1) {
                                    setCurrentImg(0);
                                } else {
                                    setCurrentImg(currentImg + 1);
                                }
                            }}>
                                <MdKeyboardArrowRight className="text-white" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Gallery