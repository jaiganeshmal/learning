import { createContext, useEffect, useState } from "react"
import { IoLinkOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDev } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import axios from "axios";

let storeData = createContext()

let StoreProvider = ({ children }) => {
    
  let [articles, setArticles] = useState([])
  let key = 'jai_kumar_5918fd70e81d496'

  let fetchArticles = async() =>{
    let res = await axios.get(`https://dev.to/api/articles?username=${key}`)
    setArticles(res.data.slice(0,2))
  }

  useEffect(()=>{
    fetchArticles()
  })

  let soical_Links = [
    {
      icon: <FaLocationDot />,
      name: 'Based in:',
      link: "Pakistan",
      url: ""
    },
    {
      icon: <FaGithub />,
      name: 'Github:',
      link: "jaiganeshmal",
      url: "https://github.com/jaiganeshmal"
    },
    {
      icon: <FaLinkedin />,
      name: 'Linkedin:',
      link: "jai-kumar",
      url: "https://www.linkedin.com/in/jai-kumar-528130288/"
    },
    {
      icon: <FaFacebook />,
      name: 'FaceBook:',
      link: "jaiho",
      url: "https://web.facebook.com/profile.php?id=100026957043114"
    },
    {
      icon: <FaSquareInstagram />,
      name: 'Instagram:',
      link: "jaiho256",
      url: "https://www.instagram.com/jaiho256/"
    },
    {
      icon: <FaDev />,
      name: 'Dev:',
      link: "jai kumar",
      url: "https://dev.to/jai_kumar_5918fd70e81d496"
    },
    {
      icon: <IoEarth />,
      name: 'Website:',
      link: "jaikumarportfolio.netlify.app",
      url: "https://jaikumarportfolio.netlify.app/"
    },
    {
      icon: <MdCall />,
      name: 'Based in:',
      link: "+92 3180392600",
      url: ""
    },
    {
      icon: <MdEmail />,
      name: 'Email:',
      link: "jaiganeshmal@gmail.com",
      url: "https://mail.google.com/mail/u/0/?pli=1#inbox"
    }
  ]

  let githubProjects = [
    {
      icon: <IoLinkOutline />,
      title: 'Table',
      description: 'This program is Table in Mathemaatically in this program add a some number and print a table 1 to 10',
      url: 'https://github.com/digitalrehman/Table'
    },
    {
      icon: <IoLinkOutline />,
      title: 'Digital Rehman',
      description: 'Config files for my Github Profiles.',
      url: 'https://github.com/digitalrehman/Digitalrehman'
    },
    {
      icon: <IoLinkOutline />,
      title: 'Stop Timer',
      description: 'This program is Stop and Start Time using HTML CSS JS. ',
      url: 'https://github.com/digitalrehman/Stop_Timer'
    },
    {
      icon: <IoLinkOutline />,
      title: 'Medical Service',
      description: 'This website is medical service s center help of all over the world.',
      url: 'https://github.com/digitalrehman/Medical_Services-'
    },
    {
      icon: <IoLinkOutline />,
      title: 'Digital Clock',
      description: 'This is Digital CLock using HTML CSS JS youcan run on you PC and MOBILE DEVICES.',
      url: 'https://github.com/digitalrehman/Digital-Clock'
    },
    {
      icon: <IoLinkOutline />,
      title: 'Password Generator',
      description: 'This program is Password Generator this program is Random Password Generator.',
      url: 'https://github.com/digitalrehman/Password-Generator'
    },
  ]



  let allData = { githubProjects, key, soical_Links, articles}
  return <storeData.Provider value={allData}>
    {children}
  </storeData.Provider>

}

export {
  storeData,
  StoreProvider
}