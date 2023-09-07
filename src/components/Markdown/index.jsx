import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import "./unreset.scss"
import ReactMarkdown from 'react-markdown'

const MarkDown = ({content}) => {
    return (
        <div className='unreset'>
            <ReactMarkdown children={content} components={{
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
    )
}

export default MarkDown