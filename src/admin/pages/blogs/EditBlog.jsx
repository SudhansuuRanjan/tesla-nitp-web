import React, { useState } from 'react';
import { getDocument } from '../../../services/document';
import { useQuery } from '@tanstack/react-query';
import { uploadFile, deleteFile } from '../../../services/file';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import "./unreset.scss"


const EditBlog = ({ handleUpdate, id }) => {
  const navigate = useNavigate();

  useQuery({
    queryKey: ['news', id],
    queryFn: () => getDocument('news', id),
    onSuccess: (data) => {
      // console.log(data);
      setFormData({
        title: data.title,
        tag: data.tag,
        date: data.date,
        minutes: data.minutes,
        image: data.image,
        imgId: data.imgId,
        authorImage: data.authorImage,
        authorImgId: data.authorImgId,
        body: data.body,
        author: data.author,
      })
      setEditorState(data.body);
    }
  });

  const [active, setActive] = useState("write");
  const [editorState, setEditorState] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    tag: "",
    date: "",
    minutes: 0,
    image: "",
    imgId: "",
    authorImage: "",
    authorImgId: "",
    body: "",
    author: ""
  })

  const [imgFile, setImgFile] = useState(null);
  const [authorImgFile, setAuthorImgFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { title, tag, date, minutes, image, imgId, authorImage, authorImgId, body, author } = formData;
      let data = { title, tag, date, minutes, image, imgId, authorImage, authorImgId, body, author };
      if (imgFile) {
        const res = await Promise.all([uploadFile(imgFile), deleteFile(data.imgId)]);
        data.image = res[0].url;
        data.imgId = res[0].$id;
      }
      if (authorImgFile) {
        const res = await Promise.all([uploadFile(authorImgFile), deleteFile(data.authorImgId)]);
        data.authorImage = res[0].url;
        data.authorImgId = res[0].$id;
      }
      await handleUpdate("news", data);
      navigate('/admin/blogs');
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-black border lg:px-10 md:px-10 px-3 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Update News(Blog)</h1>
        </div>
        <div className="space-y-4 lg:pr-5 md:pr-5">
          <div className='p-2.5 py-4 flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-3 items-center justify-evenly'>
            <div className='flex justify-center items-center flex-col'>
              <div>
                {imgFile ? <img src={URL.createObjectURL(imgFile)} className='w-[8rem]' alt="placeholder" /> : <img src={formData.image ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='w-[8rem]' alt="placeholder" />}
              </div>
              <label className="text-base">Blog Poster</label>
              <input  onChange={(e) => setImgFile(e.target.files[0])}
                type="file" accept="image/*" className='mt-2 text-sm text-grey-500
            file:mr-5 file:py-1.5 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700' />
            </div>

            <div className='flex justify-center items-center flex-col'>
              <div>
                {authorImgFile ? <img src={URL.createObjectURL(authorImgFile)} className='w-[8rem]' alt="placeholder" /> : <img src={formData.authorImage ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='w-[8rem]' alt="placeholder" />}
              </div>
              <label className="text-base">Author Image</label>
              <input type="file" accept="image/*" onChange={(e) => setAuthorImgFile(e.target.files[0])} className='mt-2 text-sm text-grey-500
            file:mr-5 file:py-1.5 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700' />
            </div>
          </div>

          <div className='p-2.5 flex lg:gap-5 md:gap-5 gap-3 text-base items-center'>
            <label htmlFor='tag' className='text-base'>Tag</label>
            <input required type="text" name="tag" value={formData.tag} onChange={handleChange} placeholder='Tag for eg. Electrical Engg. or Blockchain' className='px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 w-full' />
          </div>

          <div className='p-2.5 flex lg:gap-5 md:gap-5 gap-3 text-base items-center'>
            <label htmlFor='author' className='text-base'>Author</label>
            <input required type="text" name='author' value={formData.author} onChange={handleChange} placeholder='Author Name' className='px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 w-full' />
          </div>

          <div className='p-2.5 flex lg:gap-5 md:gap-5 gap-3 text-base items-center'>
            <label htmlFor='date' className='text-base'>Date</label>
            <input required type="date" placeholder='Date' value={formData.date} name='date' onChange={handleChange} className='px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 w-full' />
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

                <textarea required className='w-full border border-gray-800 rounded-lg lg:min-h-[30rem] md:min-h-[30rem] min-h-[35rem] outline-none p-2 bg-gray-900' value={formData.body} onChange={(e) => {
                  setEditorState(e.target.value);
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

          <div className='py-5 flex items-center'>
            <Link className='m-auto bg-rose-600 text-white py-2 px-12 rounded-xl' to='/admin/news'>
              <button type="button">Cancel</button>
            </Link>
            <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditBlog