import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { updateDocument } from '../../../services/document';
import Event from "../events/EditEvents"
import Blog from "../blogs/EditBlog"
import Project from "../projects/EditProjects"
import Team from "../team/EditTeam"
import Gallery from "../gallery/EditGallery"
import { Loading } from '../../../components/Loader';
import { toast } from 'react-toastify';

const CurrentComponent = {
    team: Team,
    gallery: Gallery,
    project: Project,
    news: Blog,
    event: Event
}

const EditData = () => {
    const { type, id } = useParams("");
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        document.title = `Tesla NITP | Admin | Edit ${type}`
    }, [])

    const handleUpdate = async (type, data) => {
        setUpdating(true);
        // console.log(type, id, data);
        try {
            const res = await updateDocument(type, id, data);
            // console.log(res);
            setUpdating(false);
            toast(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully!`);
        } catch (error) {
            // console.log(error);
            setUpdating(false);
            toast.error("Something went wrong!");
        }
    }

    const CurrentView = CurrentComponent[type] ?? <div>
        That didn't work. Try again or contact the developer.
    </div>;

    return (
        <div className='pt-20 relative min-h-[70vh]'>
            {updating && <Loading message="Updating..." />}
            <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
                    <span className='text-sky-500'>EDIT</span> {type} data of <span className='text-sky-500'>{id.substring(0, 4) + "..." + id.substring(15)}</span>
                </h1>
                <div className='border-t-[1px] border-t-gray-800 py-8'>
                    <CurrentView handleUpdate={handleUpdate} id={id} />
                </div>
            </div>
        </div>
    )
}

export default EditData;