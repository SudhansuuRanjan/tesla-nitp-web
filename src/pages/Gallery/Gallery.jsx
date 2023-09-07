import { useState, useEffect } from "react"
import './Gallery.scss'
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Heading from "../../components/Headings/Heading"
import { useQuery } from "@tanstack/react-query"
import { getDocuments } from "../../services/document"


const Gallery = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['gallery'],
        queryFn: () => getDocuments("gallery"),
        onSuccess: (data) => {
            // console.log(data);
        },
        staleTime: Infinity
    })

    useEffect(() => {
        document.title = 'Tesla NIT Patna | Gallery';
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
                            isLoading ? <p>loading...</p> : isError ? <p>Something went wrong.</p> : data.map((img, index) => {
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
                            <img src={data[currentImg].url} alt="dhgjjhgd" />
                        </div>

                        <div className="controls">
                            <button onClick={() => {
                                if (currentImg === 0) {
                                    setCurrentImg(data.length - 1);
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
                                if (currentImg === data.length - 1) {
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