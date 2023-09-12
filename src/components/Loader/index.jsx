import React from 'react'

const Loader = () => {
    return (
        <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sky-600 border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
    )
}

export default Loader

export const Loading = ({ message }) => {
    return (
        <div className="fixed z-50 inset-0 w-full flex flex-col items-center justify-center h-screen bg-black bg-opacity-80">
            <Loader />
            <p className="text-xl mt-5">{message}</p>
        </div>
    )
}