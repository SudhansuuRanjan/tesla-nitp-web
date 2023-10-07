import { useState, useEffect } from 'react'
import { createDocument, getDocuments } from '../../../services/document';
import { uploadFile } from '../../../services/file';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import "./unreset.scss"
import { calculateMinuteRead } from '../../../utils';
import { BlogCard } from '../../../components/Cards/Card';
import { toast } from 'react-toastify';
import Loader, { Loading } from '../../../components/Loader';

const Blogs = () => {
  const [createBlog, setCreateBlog] = useState(false);
  const [editorState, setEditorState] = useState("");

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['news'],
    queryFn: () => getDocuments("news")
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Blogs';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Blogs
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-end'>
            {/* <input className='py-2.5 px-4 rounded-md border lg:w-[24rem] md:w-[14rem] w-auto border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' /> */}
            <button onClick={() => setCreateBlog(!createBlog)} className='bg-sky-600 text-white rounded-md lg:px-8 md:px-6 px-5 py-2.5'>New Blog</button>
          </div>

          {createBlog && <BlogForm editorState={editorState} setEditorState={setEditorState} setCreateBlog={setCreateBlog} refetch={refetch} />}

          <h3 className='lg:text-3xl md:text-3xl text-2xl font-bold mt-10'>All Blog Posts</h3>

          <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
            {isLoading ? <div className='h-32 w-full flex items-center justify-center'>
              <Loader />
            </div> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((data) => (
              <BlogCard key={data.$id} data={data} isAdmin={true} refetch={refetch} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blogs;


const BlogForm = ({ editorState, setEditorState, refetch }) => {
  const [active, setActive] = useState("write");
  const [formData, setFormData] = useState({
    title: "",
    tag: "",
    date: "",
    minutes: 0,
    image: null,
    authorImage: null,
    imgId: "",
    authorImgId: "",
    body: "",
    author: ""
  });
  const [creating, setCreating] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      setCreating(true);
      const [posterRes, authorRes] = await Promise.all([uploadFile(formData.image), uploadFile(formData.authorImage)]);
      const data = JSON.parse(JSON.stringify(formData));
      data.image = posterRes.url;
      data.imgId = posterRes.$id;
      data.authorImage = authorRes.url;
      data.authorImgId = authorRes.$id;

      const res = await createDocument("news", data);
      refetch();
      setCreating(false);
      toast("Blog created successfully!");
      setFormData({
        title: "",
        tag: "",
        date: "",
        minutes: 0,
        image: null,
        authorImage: null,
        imgId: "",
        authorImgId: "",
        body: "",
        author: ""
      });
      setEditorState("");
      // console.log(res);
    } catch (error) {
      setCreating(false);
      toast.error(error.message);
    }
  }

  return (
    <div className='my-10'>
      {creating && <Loading message="Creating..." />}
      <h2 className='text-xl font-bold'>Write Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-full border-2 border-gray-800 my-3 rounded-2xl">
          <div className='p-2.5'>
            <input required type="text" value={formData.title} placeholder='Title' name='title' onChange={handleChange} className='px-3 py-2 rounded-lg border-2 border-sky-800 bg-gray-900 w-full' />
          </div>
          <div className='p-2.5 py-4 flex lg:flex-row md:flex-row flex-col items-center justify-evenly gap-5'>
            <div className='flex justify-center items-center flex-col'>
              <div>
                <img src={formData.image ? URL.createObjectURL(formData.image) : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} className='h-[5rem]' alt="placeholder" />
              </div>
              <label className="text-base">Blog Poster</label>
              <input required onChange={(e) => {
                setFormData({
                  ...formData,
                  image: e.target.files[0]
                })
              }}
                type="file" accept="image/*" className='mt-2 text-sm text-grey-500
            file:mr-5 file:py-1 file:px-3
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700' />
            </div>
            <div className='flex justify-center items-center flex-col'>
              <div>
                <img src={formData.authorImage ? URL.createObjectURL(formData.authorImage) : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='h-[5rem] rounded-full' alt="placeholder" />
              </div>
              <label className="text-base">Author Image</label>
              <input required type="file" accept="image/*" onChange={(e) => {
                setFormData({
                  ...formData,
                  authorImage: e.target.files[0]
                })
              }} className='mt-2 text-sm text-grey-500
            file:mr-5 file:py-1 file:px-3
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700' />
            </div>
          </div>

          <div className='p-2.5 flex gap-5 text-base items-center'>
            <label htmlFor='tag' className='text-base'>Tag</label>
            <input required type="text" name="tag" value={formData.tag} onChange={handleChange} placeholder='Tag for eg. Electrical Engg. or Blockchain' className='px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 w-full' />
          </div>

          <div className='p-2.5 flex gap-5 text-base items-center'>
            <label htmlFor='author' className='text-base'>Author</label>
            <input required type="text" name='author' value={formData.author} onChange={handleChange} placeholder='Author Name' className='px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 w-full' />
          </div>

          <div className='p-2.5 flex gap-5 text-base items-center'>
            <label htmlFor='date' className='text-base'>Date</label>
            <input required type="date" placeholder='Date' value={formData.date} name='date' onChange={handleChange} className='px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 w-full' />
          </div>
        </div>


        <div className="w-full border-2 border-gray-800 my-3 rounded-2xl">
          <div className='pl-4 pt-2.5'>
            <button
              type='none'
              name="write"
              onClick={(e) => {
                e.preventDefault();
                setActive(e.target.name);
              }}
              className={`px-6 py-2 -mb-[1px] ${active === "write" && "border rounded-t-xl border-gray-800 bg-black  border-b-black"}`}>Edit</button>
            <button
              type='none'
              name="preview"
              onClick={(e) => {
                e.preventDefault();
                setActive(e.target.name);
              }}
              className={`px-6 py-2 -mb-[1px] ${active === "preview" && "border rounded-t-xl border-gray-800 bg-black  border-b-black"}`}>Preview</button>
          </div>
          <div className='p-2.5 pb-0 border-t border-gray-800'>
            {active === "write" ?

              <textarea required className='w-full border border-gray-800 rounded-lg lg:min-h-[35rem] md:min-h-[35rem] min-h-[40rem] outline-none p-2 bg-gray-900' value={editorState} onChange={(e) => {
                setEditorState(e.target.value)
                setFormData({
                  ...formData,
                  body: e.target.value,
                  minutes: calculateMinuteRead(e.target.value)
                })
              }
              } name='editor' placeholder='Write your blog here...' ></textarea>

              : <div className='unreset p-1 min-h-[5rem]'>
                <ReactMarkdown children={editorState} components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={stackoverflowDark}
                        language={match[1]}
                        PreTag="div"
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  }
                }} remarkPlugins={[remarkGfm, remarkRehype, rehypeStringify, rehypeRaw]} />
              </div>
            }
          </div>
          <div className='pl-2.5 text-sm text-sky-600 pb-2 font-medium'>MarkDown Supported</div>
        </div>

        <div className='flex justify-end'>
          <button className='bg-sky-600 hover:bg-gray-700 text-white px-6 py-2.5 font-medium rounded-lg' type='submit'>Publish Blog</button>
        </div>
      </form>
    </div>
  )
}