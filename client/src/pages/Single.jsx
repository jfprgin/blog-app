import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://picsum.photos/700/700" alt="" />
        <div className="user">
          <img src="https://picsum.photos/50/50" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant
          morbi tristique senectus et netus et. Non blandit massa enim nec dui nunc mattis.
          Lorem mollis aliquam ut porttitor leo a. Eget lorem dolor sed viverra. Mi tempus
          imperdiet nulla malesuada pellentesque elit eget. Diam quis enim lobortis scelerisque
          fermentum dui. Enim facilisis gravida neque convallis. Odio euismod lacinia at quis
          risus sed vulputate. Lorem ipsum dolor sit amet consectetur adipiscing. Ut etiam sit
          amet nisl purus. Turpis egestas maecenas pharetra convallis posuere morbi. Orci eu
          lobortis elementum nibh tellus molestie nunc non blandit.
          <br /><br />
          Ipsum dolor sit amet consectetur adipiscing elit. Sit amet commodo nulla facilisi
          nullam vehicula ipsum. Libero nunc consequat interdum varius sit amet mattis
          vulputate. Ac odio tempor orci dapibus ultrices. Amet cursus sit amet dictum sit
          amet. Sed enim ut sem viverra. Egestas tellus rutrum tellus pellentesque eu
          tincidunt. Suspendisse sed nisi lacus sed viverra tellus in hac. Nullam ac tortor
          vitae purus faucibus. Nunc faucibus a pellentesque sit amet porttitor. Elit at
          imperdiet dui accumsan sit. Bibendum enim facilisis gravida neque. Curabitur vitae
          nunc sed velit dignissim sodales ut eu sem. Ut sem nulla pharetra diam sit amet
          nisl suscipit adipiscing. Enim neque volutpat ac tincidunt vitae semper. Laoreet
          sit amet cursus sit amet dictum sit amet justo. Neque vitae tempus quam pellentesque
          nec nam. In eu mi bibendum neque egestas congue quisque.
          <br /><br />
          Tincidunt dui ut ornare lectus sit amet. Felis bibendum ut tristique et. Ultrices
          neque ornare aenean euismod. Tincidunt id aliquet risus feugiat in ante metus dictum.
          Mattis rhoncus urna neque viverra justo nec. Non enim praesent elementum facilisis leo
          vel fringilla est. Aenean euismod elementum nisi quis eleifend. Ullamcorper morbi
          tincidunt ornare massa eget egestas. Arcu vitae elementum curabitur vitae. Vitae
          ultricies leo integer malesuada nunc vel risus commodo viverra. Tortor condimentum
          lacinia quis vel eros donec ac odio tempor. Dui vivamus arcu felis bibendum. Mauris
          nunc congue nisi vitae suscipit tellus mauris.
          </p>
      </div>
      <Menu></Menu>
    </div>
  )
}

export default Single