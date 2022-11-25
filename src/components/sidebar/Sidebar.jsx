import c from './Sidebar.module.css';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { BsChevronUp } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const sidebaropen = useRef();
  const [sidebarLimit, setSidebarLimit] = useState(4);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
  const sidebarData = [
    {
      sidebarmaintitle: "Amazon music",
      subitems: [
        "Amazon music unlimited",
        "Free streaming music",
        "Podcasts",
        "Play music",
      ]
    },
    {
      sidebarmaintitle: "Kindle E-readers & Books",
      subitems: [
        "All new Kindle Kids",
        "All new Kindle",
        "Kindle paper white",
        "Kindle Oasis"
      ]
    },
    {
      sidebarmaintitle: "Amazon Appstore",
      subitems: [
        "All Apps an Games",
        "Games",
        "Amazon Coins",
        "Download Amazon Appstore"
      ]
    },
    {
      sidebarmaintitle: "Electronics",
      subitems: [
        "Camer & Photo",
        "Car & Vehicle Electronics",
        "Headphones",
        "Home Audio"
      ]
    },
    {
      sidebarmaintitle: "Comuters",
      subitems: [
        "Computer Components",
        "Monitors",
        "Printers",
        "Scanners"
      ]
    },
    {
      sidebarmaintitle: "Smart Home",
      subitems: [
        "Amazon Smart Home",
        "Smart Home Lighting",
        "Smart Locks and Entry",
        "Kitchen"
      ]
    },
    {
      sidebarmaintitle: "Arts & Crafts",
      subitems: [
        "Painting, Drawing & Art Supplies",
        "Crafting",
        "Fabric",
        "Needlework"
      ]
    },
    {
      sidebarmaintitle: "Automative",
      subitems: [
        "Car Care",
        "Interior Accessories",
        "Exterior Accessories",
        "Oils & Fluids"
      ]
    },
    {
      sidebarmaintitle: "Baby",
      subitems: [
        "Baby Care",
        "Baby Stationery",
        "Feeding",
        "Gifts"
      ]
    },
    {
      sidebarmaintitle: "Video Games",
      subitems: [
        "Wii",
        "PC",
        "PlayStation 3",
        "PlayStation 4"
      ]
    }
  ]

  useEffect(() => {
    if (selectedSidebarItem) {
      sidebaropen.current.scrollLeft = sidebaropen.current.offsetWidth
    }
    else {
      sidebaropen.current.scrollLeft = 0
    }
  }, [selectedSidebarItem])

  return (
    <div ref={sidebaropen} className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>
      <FiX style={setIsSidebarOpen === true ? { display: "block" } : { display: "none" }} className={c.close} onClick={() => { setIsSidebarOpen(false) }} />
      <div className={c.sidebarWrapper} >
        <Link className={c.link_sign} to="/Login" onClick={() => { setIsSidebarOpen(false) }}>
          <HiUserCircle style={{ marginRight: "10px", fontSize: "30px" }} />
          <h2>Hello, Sign in</h2>
        </Link>
        {
          sidebarData.slice(0, sidebarLimit).map(sidebarEl =>
            <div key={uuidv4()} className={c.sidebarItem} onClick={() => { setSelectedSidebarItem(sidebarEl) }}>
              <p>{sidebarEl.sidebarmaintitle}</p>
              <div className=""><FiChevronRight className={c.to_right} /></div>
            </div>
          )
        }
        <div className={c.sidebarItem} onClick={() => { sidebarLimit <= 4 ? setSidebarLimit(sidebarData.length) : setSidebarLimit(4) }}>
          <p>{sidebarLimit === 4 ? <>See more <FiChevronDown style={{ marginLeft: "281px", fontWeight: "900", fontSize: "25px" }} /> </> : <>See less <BsChevronUp style={{ marginLeft: "294px", fontWeight: "900" }} /> </>}</p>
        </div>
      </div>

      <div className={c.sidebarOpen}>
        <div style={{display: "flex", marginLeft: "10px"}}>
          <FiArrowLeft style={{ marginLeft: "-30px", fontSize: "20px" }} onClick={() => { setSelectedSidebarItem(null) }} />
          <h3>MAIN MENU</h3>
        </div>
          <hr style={{borderLeft: "1px solid transparent", borderTop: "1px solid transparent", borderRight: "1px solid transparent", borderBottom: "2px solid gray", margin: "10px 0"}}/>
        <div>
          <h2 style={{margin: "10px 0 20px", color: "orange"  }}>{selectedSidebarItem?.sidebarmaintitle}</h2>
          {
            selectedSidebarItem?.subitems.map(i =>
              <p style={{margin: "25px 0 25px", color: "#111"}} key={uuidv4()}>{i}</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar