import React from 'react'

// Swiper IMPORTS
import { Navigation, Pagination, Parallax, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './GalleryCarousel.css'
import Heading1 from '../Headings/Heading1'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getDocuments } from '../../services/document'

// const data = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1694631019312-94f94b8d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 2,
//     url: 'https://plus.unsplash.com/premium_photo-1692340973720-3e82f5dc22ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 3,
//     url: 'https://plus.unsplash.com/premium_photo-1692340973720-3e82f5dc22ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 4,
//     url: 'https://plus.unsplash.com/premium_photo-1692340973720-3e82f5dc22ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 5,
//     url: 'https://plus.unsplash.com/premium_photo-1692340973720-3e82f5dc22ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 6,
//     url: 'https://plus.unsplash.com/premium_photo-1692340973720-3e82f5dc22ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
//   },
//   {
//     id: 7,
//     url: 'https://plus.unsplash.com/premium_photo-1692340973720-3e82f5dc22ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
//   },
// ]

const GalleryCarousel = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['gallery-carousel'],
    queryFn: () => getDocuments('gallery', 10),
    onSuccess: (data) => {
      // console.log(data);
    },
    staleTime: Infinity,
  })

  return (
    <div className="py-16">
      <Heading1
        text1={'Our'}
        text2={'Gallery'}
        details={'Glimpses of our events and activities.'}
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-[10rem] w-full">
          <Loader />
        </div>
      ) : isError ? (
        <p>Something went wrong.</p>
      ) : (
        <div className="mt-20 relative">
          <Swiper
            data-aos="zoom-in"
            modules={[Navigation, Pagination, Parallax, A11y]}
            spaceBetween={60}
            slidesPerView={3}
            // parallax={true}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="mb-20">
                  <img
                    className="rounded-[1rem] h-[350px] object-fill"
                    height={1080}
                    width={1920}
                    loading="lazy"
                    src={img.url}
                    alt="gallery-photo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>

          <div className="swiper-button-next bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
        </div>
      )}

      <div className="mt-10 flex justify-center items-center">
        <Link data-aos="zoom-in" to="/gallery">
          <button className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-2 rounded-full font-medium transition-all delay-[10ms]">
            Explore Gallery
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GalleryCarousel
