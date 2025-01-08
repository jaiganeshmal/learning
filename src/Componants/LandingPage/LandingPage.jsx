import React, { useContext } from 'react'
import img from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { storeData } from '../Config/Config';
import {  education, my_Project, publications, stack  } from '../global.js';


const Home = () => {

    let { githubProjects, key, soical_Links, articles } = useContext(storeData)

    return (
        <>
            <div className='bg-[#E5E6E6] h-auto w-full flex lg:flex-row md:flex-col  flex-col  md:justify-between'>
                <div className=' lg:w-[35%] md:w-full w-full h-auto px-7 py-10 flex flex-col gap-6 items-center'>

                    <div className=' bg-[#FFFFFF] w-full rounded-2xl flex items-center justify-between px-5 py-4'>
                        <div>
                            <h1 className='text-lg font-medium text-gray-600'>Theme</h1>
                            <h6 className='text-gray-400'>Light</h6>
                        </div>
                        <div>
                            <select name='Change Theme' className='outline-none bg-transparent '>
                                <option className=''>Light</option>
                                <option className=''>Dark</option>
                            </select>
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] w-full flex flex-col items-center gap-6 p-8  rounded-2xl'>
                        <div className='w-32 h-32 rounded-full border-red-600 border-4'>
                            <img src={img} className='h-full w-full rounded-full' alt="profile" />
                        </div>
                        <h1 className='text-3xl font-semibold text-gray-600'>Jai Kumar</h1>
                        <p className='text-base tracking-wide text-gray-500 text-center px-2'>🚀 Junior Full Stack Developer || Open Source Enthusiast || Web Desinger || Node.js || React 🚀</p>
                        <button className='border border-gray-400 rounded-md px-2 py-2 text-xs tracking-wide font-medium text-gray-500'>Download Resume</button>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-2xl w-full py-6 px-5'>
                        {
                            soical_Links.map((value, index) => {
                                return (
                                    <div key={index} className='flex flex-wrap justify-between items-center text-[#797FAA] py-3'>
                                        <p className='text-base flex flex-wrap items-center gap-1 tracking-wide'><span className='text-lg'>{value.icon}</span> {value.name}</p>
                                        <Link to={value.url} target='_blank' className='text-sm '>{value.link}</Link>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className='bg-[#FFFFFF] rounded-2xl w-full py-6 px-5'>
                        <h1 className='text-xl text-[#626973] font-medium'>Tech Stack</h1>
                        <div className='flex flex-wrap gap-x-3 gap-y-3 my-4'>
                            {
                                stack.map((value, index) => {
                                    return (
                                        <div key={index} className='flex flex-wrap items-center' >
                                            <span className='bg-cyan-900 text-white text-sm py-1 px-3 tracking-wide font-medium rounded-3xl '>{value.skill}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-2xl w-full py-6 px-5'>
                        <h1 className='text-xl text-[#626973] font-medium'>Expreience</h1>

                        <div className='border-l-2 border-gray-100 px-2 my-2'>
                            <span className='text-gray-500 text-xs font-light'>January 2023 - Present</span>
                            <h1 className='text-gray-500 font-medium text-base'>Full Stack Developer</h1>
                            <p className='text-gray-500 text-sm font-light'>Techzone Learning</p>
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-2xl w-full py-4 px-5'>
                        <h1 className='text-xl text-[#626973] font-medium'>Certificate</h1>

                        <div className='border-l-2 border-gray-100 px-2  my-2'>
                            <span className='text-gray-500 text-xs font-light'>December 2019</span>
                            <h1 className='text-gray-500 font-medium text-base'>CIT</h1>
                            <p className='text-gray-500 text-sm font-light'>Berllitz Center From Mirpurkhas</p>
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-2xl w-full py-4 px-5'>
                        <h1 className='text-xl text-[#626973] font-medium'>Education</h1>
                        <div className='flex flex-col my-2'>
                            {
                                education.map((value, index) => {
                                    return (
                                        <div key={index} className='border-l-2 border-gray-100 px-2 pb-2'>
                                            <span className='text-gray-500 text-xs font-light'>{value.year}</span>
                                            <h1 className='text-gray-500 font-medium text-base'>{value.class}</h1>
                                            <p className='text-gray-500 text-sm font-light'>{value.collage}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-6 lg:w-[65%] md:w-full w-full h-auto py-10 px-7'>

                    <div className='bg-[#EFF0F0] rounded-2xl w-full py-4 px-5'>

                        <div className='flex justify-between items-center md:mt-0 mt-4'>
                            <h1 className='text-xl font-semibold text-gray-600'>Github Projects</h1>
                            <Link to='https://github.com/jaiganeshmal' target='_blank' className='text-sm text-gray-500'>See All</Link>
                        </div>

                        <div className='flex flex-wrap justify-center gap-4 md:my-4 my-8'>
                            {
                                githubProjects.map((value, index) => {
                                    return (
                                        <Link to={value.url} target='_blank' key={index} className='bg-[#FFFFFF] p-5 md:w-[250px] md:flex-2 md:flex-grow w-full md:h-48 h-auto rounded-xl'>
                                            <h1 className='text-lg font-semibold text-gray-500 flex items-center gap-1'><span className='text-base'>{value.icon}</span>{value.title}</h1>
                                            <p className='text-sm text-gray-500 my-2'>{value.description}</p>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className='bg-[#EFF0F0] rounded-2xl w-full py-4 px-5'>
                        <h1 className='text-xl font-semibold text-gray-600'> Publications</h1>
                        <div className='flex flex-wrap justify-around md:gap-3 gap-6 my-6'>
                            {
                                publications.map((value, index) => {
                                    return (
                                        <div key={index} className='bg-[#FFFFFF] p-6 md:w-[260px] md:flex-2 md:flex-grow md:h-[340px] h-auto rounded-xl text-center'>
                                            <p className='text-gray-100'>{value.light_text}</p>
                                            <div>
                                                <h1 className='text-base text-gray-500'>{value.user}</h1>
                                                <h2 className='text-sm text-gray-400 my-1'>{value.author}</h2>
                                            </div>
                                            <p className='text-sm text-gray-500 text-justify px-4'>{value.comment}</p>

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className='bg-[#EFF0F0] rounded-2xl w-full py-4 px-5'>

                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-semibold text-gray-600'>My Projects</h1>
                            <Link to='' target='_blank' className='text-sm text-gray-500'>See All</Link>
                        </div>

                        <div className='flex flex-wrap justify-around items-center md:gap-3 gap-6 my-6'>
                            {
                                my_Project.map((value, index) => {
                                    return (
                                        <Link to={value.url} target='_blank' key={index} className='bg-[#FFFFFF] p-8 md:w-[260px] md:flex-1 md:flex-grow w-full h-auto md:h-72 rounded-xl flex flex-col items-center gap-2'>
                                            <h1 className='text-sm font-medium text-gray-500'>{value.title}</h1>
                                            <div className='w-60 h-28 rounded-lg'>
                                                <img src={value.img} alt={value.title} className='h-full w-full rounded-lg' />
                                            </div>
                                            <p className='text-sm tracking-wide text-gray-500 text-justify px-4'>{value.description}</p>
                                        </Link>
                                    )
                                })
                            }

                        </div>

                    </div>

                    <div className='bg-[#EFF0F0] rounded-2xl w-full py-4 px-5'>
                        <h1 className='text-xl font-semibold text-gray-600'> My Posts</h1>
                        <div className='flex flex-wrap gap-4 my-4' >
                            {
                                articles.map((value) => {
                                    return (
                                        <Link to={`https://dev.to/${key}/${value.slug}`} target='_blank' key={value.id} className='bg-[#FFFFFF] py-6 px-4 w-full lg:h-44 md:h-auto h-auto rounded-xl flex md:flex-row flex-col md:gap-2 gap-4 items-center md:justify-normal justify-center'>

                                            <div className='md:w-36 w-full md:h-24 h-36'>
                                                <img src={value.social_image} alt="image" className='h-full w-full md:object-cover' />
                                            </div>

                                            <div className=' md:w-[550px] w-full h-auto p-4 flex flex-col gap-2'>
                                                <div>
                                                    <h1 className='text-gray-500 font-medium text-lg'>{value.title} <span className='block text-xs text-gray-400 font-light'>Date: {new Date(value.published_at).toLocaleDateString()}</span></h1>
                                                </div>
                                                <p className='text-gray-500 text-sm '>{value.description.slice(0, 102) + '...'}</p>
                                                <p className='text-xs font-medium text-gray-700'>Likes: {value.positive_reactions_count}</p>
                                                <div className='flex flex-wrap gap-2'>
                                                    <span className='bg-gray-200 py-1 px-2 rounded-full text-xs'>nothing</span>
                                                    <span className='bg-gray-200 py-1 px-2 rounded-full text-xs'>nothing</span>
                                                    <span className='bg-gray-200 py-1 px-2 rounded-full text-xs'>nothing</span>
                                                    <span className='bg-gray-200 py-1 px-2 rounded-full text-xs'>nothing</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full h-auto bg-[#E5E6E6] p-6 flex justify-center items-center'>
                <p className='bg-[#FFFFFF] w-60 py-4 px-4 rounded-xl text-sm text-center'>
                    Made with <Link to='https://github.com/jaiganeshmal' target='_blank' className='text-blue-600'>GitProfile</Link> and ❤️
                </p>
            </div>
        </>
    )
}

export default Home
