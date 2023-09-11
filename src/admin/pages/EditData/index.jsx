import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { updateDocument } from '../../../services/document';
import Event from "../events/EditEvents"
import Blog from "../blogs/EditBlog"
import Project from "../projects/EditProjects"
import Team from "../team/EditTeam"
import Gallery from "../gallery/EditGallery"
import Loader from '../../../components/Loader';

const CurrentComponent = {
    team: Team,
    gallery: Gallery,
    project: Project,
    news: Blog,
    event: Event
}

const EditData = () => {
    const { type, id } = useParams("");
    const [data, setData] = useState({});
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        document.title = `Tesla NITP | Admin | Edit ${type}`
    }, [])

    const handleUpdate = async (type, data) => {
        setUpdating(true);
        // console.log(type, id, data);
        try {
            const res = await updateDocument(type, id, data);
            console.log(res);
            setUpdating(false);
        } catch (error) {
            console.log(error);
            setUpdating(false);
        }
    }

    const CurrentView = CurrentComponent[type] ?? <div>DefaultView</div>;

    return (
        <div className='pt-20 relative min-h-[70vh]'>
            <div className='m-auto max-w-[80%]'>
                <h1 className='text-5xl leading-normal font-bold my-5'>
                    <span className='text-sky-500'>EDIT</span> {type} data of <span className='text-sky-500'>{id}</span>
                </h1>
                <div className='border-t-[1px] border-t-gray-800 py-8'>
                    <CurrentView handleUpdate={handleUpdate} id={id} />
                </div>
            </div>
        </div>
    )
}

export default EditData;