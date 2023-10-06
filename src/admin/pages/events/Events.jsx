import { useState, useEffect } from 'react'
import { createDocument, getDocuments, deleteDocument } from '../../../services/document';
import { uploadFile, deleteFile } from '../../../services/file';
import { useQuery } from '@tanstack/react-query';
import { EventCard } from '../../../components/Cards/Card';
import { FaEdit, FaTrash } from "react-icons/fa"
import Loader, { Loading } from '../../../components/Loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Events = () => {
  const [createEvent, setCreateEvent] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: () => getDocuments("events"),
    onSuccess: (data) => {
      // console.log(data);
    }
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Events';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Events
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-end'>
            {/* <input className='py-2.5 px-4 rounded-md border lg:w-[24rem] md:w-[14rem] w-auto border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' /> */}
            <button onClick={() => setCreateEvent(!createEvent)} className='bg-sky-600 text-white rounded-md lg:px-8 md:px-6 px-5 py-2.5'>New Event</button>
          </div>

          <h3 className='lg:text-3xl md:text-3xl text-2xl font-bold mt-10'>All Events</h3>

          <div className='mb-20 mt-10 flex flex-wrap gap-10 items-center justify-evenly'>
            {isLoading ? <Loader /> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((event, id) => (
              <div key={id} data-aos="zoom-in" className='relative'>
                <div className='absolute z-10 right-5 top-10'>
                  <Link to={`/edit/event/${event.$id}`} > <button className='text-blue-500 p-2'><FaEdit size={20} /></button></Link>
                  <button onClick={async () => {
                    try {
                      await Promise.all([deleteDocument('events', event.$id), deleteFile(event.imageId)]);
                      await refetch();
                      console.log("Document deleted successfully!");
                    } catch (error) {
                      console.log("Something went wrong!")
                    }
                  }} className='text-rose-500 p-2'><FaTrash size={20} /></button>
                </div>
                <EventCard data={event} />
              </div>
            ))}
          </div>

        </div>
      </div>
      {createEvent && <EventForm setCreateEvent={setCreateEvent} refetch={refetch} />}
    </div>
  )
}

export default Events;

const EventForm = ({ refetch, setCreateEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    description: '',
    tag: '',
    link: '',
    venue: "",
    time: "",
    date: ""
  });
  const [creating, setCreating] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return;
    setCreating(true);
    try {
      // console.log(formData);
      const res = await uploadFile(formData.image);
      // console.log(res);
      let data = JSON.parse(JSON.stringify(formData));
      data.image = res.url;
      data.imageId = res.$id;
      await createDocument("events", data);
      // console.log(doc);
      toast("Event created successfully!");
      setFormData({
        name: '',
        image: null,
        description: '',
        tag: '',
        link: '',
        venue: "",
        time: "",
        date: ""
      });
      refetch();
      setCreating(false);
      setCreateEvent(false);
    } catch (error) {
      // console.log(error);
      setCreating(false);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      {creating && <Loading message="Creating..." />}
      <form onSubmit={handleSubmit} className='bg-gray-900 border lg:px-10 md:px-10 px-3 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-5'>Create New Event</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[18rem] w-[88vw] lg:h-[70vh] md:h-[70vh] overflow-y-scroll space-y-4 lg:pr-5 md:pr-5">
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Name <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Desc.<span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 h-20 rounded-xl flex-1"
              name="description"
              placeholder="Enter event description"
              required
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Tag <span className="text-red-500">*</span></label>
            <select
              className="py-2 px-4 rounded-xl"
              type="text"
              name="tag"
              placeholder="Enter Tag Like Blockchain"
              required
              value={formData.tag}
              onChange={handleChange}
            >
              <option value="electrical">--Select--</option>
              <option value="electrical">Electrical</option>
              <option value="blockchain">Blockchain</option>
              <option value="software">Software</option>
              <option value="technical">Technical</option>
              <option value="web">Web Dev</option>
              <option value="cultural">Cultural</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Reg. Link <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="link"
              placeholder="Enter Link"
              required
              onChange={handleChange}
              value={formData.link}
            />
          </div>

          <div className='flex flex-col justify-center items-center gap-4 py-3'>
            <label className="text-lg font-medium text-sky-500">Poster <span className="text-red-500">*</span></label>
            <img src={formData.image ? URL.createObjectURL(formData.image) : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} className='lg:w-[10rem] md:w-[10rem] w-[8rem]' alt="placeholder" />
            <input
              className="mt-2 text-sm text-grey-500
            file:mr-5 file:py-1 file:px-3
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700"
              type="file"
              name="image"
              placeholder="Select Image"
              required
              accept="image/*"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  image: e.target.files[0]
                });
              }}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Venue <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="venue"
              placeholder="Enter Venue"
              onChange={handleChange}
              value={formData.venue}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Date <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="date"
              name="date"
              placeholder="Enter Date"
              onChange={handleChange}
              value={formData.date}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Time <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="time"
              name="time"
              placeholder="Enter Time"
              onChange={handleChange}
              value={formData.time}
            />
          </div>

        </div>
        <div className='py-5 flex items-center'>
          <button onClick={() => setCreateEvent(false)} className='m-auto bg-gray-600 text-white py-2 px-12 rounded-xl'>Cancel</button>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}