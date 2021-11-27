import React from 'react'
import moment from 'moment';
import Link from 'next/link'

const PostCard = ({ post }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:pb-8 pb-12 mb-0">
            <div className="relative overflow-hidden shadow-md pb-60 mb-6">
                <img 
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className="object-top absolute h-60 w-full object-cover shadow-lg rounded-t-lg"
                />
            </div>
            <h1 className="transition duration-700 text-center mb-4 cursor-pointer hover:text-pink-600 text-xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-6 w-full">
                <div className="flex items-center justify-center w-full lg:w-auto lg:mb-0 mb-2 mr-6">
                    <img 
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-gray-700 ml-2 text-sm">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700 flex justify-center align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-700">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
            <p className="text-center text-base text-gray-700 font-normal px-4 lg:px-6 mb-8">{post.excerpt}</p>
            <div className="text-center ">
                <Link href={`/post/${post.slug}`}>
                    <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-green-400 text-base font-medium rounded-lg text-white px-6 py-2 cursor-pointer">
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
