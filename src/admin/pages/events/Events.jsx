import { useState, useEffect } from 'react'
import { createDocument, getDocuments, deleteDocument } from '../../../services/document';
import { uploadFile, deleteFile } from '../../../services/file';
import { useQuery } from '@tanstack/react-query';
import { EventCard } from '../../../components/Cards/Card';
import { FaEdit, FaTrash } from "react-icons/fa"
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';

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
      <div className='m-auto max-w-[80%]'>
        <h1 className='text-5xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Events
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-between'>
            <input className='py-2.5 px-4 rounded-md border w-[24rem] border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' />
            <button onClick={() => setCreateEvent(!createEvent)} className='bg-sky-600 text-white rounded-md px-8 py-2.5'>New Event</button>
          </div>

          <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
            {isLoading ? <Loader/> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((event, id) => (
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
      {createEvent && <GalleryForm setCreateEvent={setCreateEvent} refetch={refetch} />}
    </div>
  )
}

export default Events;

const GalleryForm = ({ refetch, setCreateEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    description: '',
    tag: '',
    link: '',
    venue: "",
    time: "",
    date: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return;
    try {
      console.log(formData);
      const res = await uploadFile(formData.image);
      console.log(res);
      let data = JSON.parse(JSON.stringify(formData));
      data.image = res.url;
      data.imageId = res.$id;
      const doc = await createDocument("events", data);
      console.log(doc);
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
      setCreateEvent(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Create New Event</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[18rem] h-[70vh] overflow-y-scroll space-y-4 pr-5">
          <div className='flex gap-5'>
            <label className="text-lg">Name <span className="text-red-500">*</span></label>
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
          <div className='flex gap-5'>
            <label className="text-lg">Description <span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 rounded-xl flex-1"
              name="description"
              placeholder="Enter event description"
              required
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className='flex gap-5'>
            <label className="text-lg">Tag <span className="text-red-500">*</span></label>
            <select
              className="py-2 px-4 rounded-xl"
              type="text"
              name="tag"
              placeholder="Enter Tag Like Blockchain"
              required
              onChange={handleChange}
            >
              <option value="electrical">--Select--</option>
              <option value="electrical">Electrical</option>
              <option value="blockchain">Blockchain</option>
              <option value="technical">Technical</option>
              <option value="web">Web Dev</option>
              <option value="cultural">Cultural</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Event/Reg. Link <span className="text-red-500">*</span></label>
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

          <div className='flex gap-5'>
            <label className="text-lg">Poster <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
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

          <div className='flex gap-5'>
            <label className="text-lg">Venue <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="venue"
              placeholder="Enter Venue"
              onChange={handleChange}
              value={formData.venue}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Date <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="date"
              name="date"
              placeholder="Enter Date"
              onChange={handleChange}
              value={formData.date}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Time <span className="text-red-500">*</span></label>
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