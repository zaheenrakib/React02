"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = ()=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div>
      <button onClick={notify}
      >Login</button>
      <ToastContainer />
    </div>
  )
}

export default page















// this part of context APi
// "use client"
// import Header from '@/Componets/Header'
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//   Header
//   return (
//     <div className='bg-red-700'>{user}
//     <Header/>
//     </div>
//   )
// }

// export default page



























// "use client"
// import Header from '@/componets/Header'
// import React, { useState } from 'react'

// const page = () => {
//   const [num, setnum] = useState(10)
//   return (
//     <>
//     <Header num={num} />
    
//     </>
    
//   )
// }

// export default page;











// This is API calling 

// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const page = () => {
//   const [users, setusers] = useState([]);
//   const getUsers = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setusers(data);
//   };

//   useEffect(() => {
//    getUsers()
//   }, [])
  
//   return (
//     <>
//       <button
//         onClick={getUsers}
//         className="bg-green-600 text-white px-4 py-2 rounded font-bold"
//       >
//         {" "}
//         Get Data
//       </button>

//       <div className="p-8 bg-slate-300 mt-5">
//         <ul>
//           {users.map((e) => {
//             return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a> </li>;
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default page;




// this part of rounting

// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <h1>this is home page</h1>
//     <a href="/contact">contact</a>
//     </>
//   )
// }

// export default page

// this part of two way binding
// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState("")
//   return (
//     <>
//     <h1 className='mb-5 text-2xl'>Enter your name : </h1>
//     <form>
//       <input type="text"
//       className='border-2 border-zinc-800 px-4 py-2 text-xl'
//       value={username}
//       onChange={(e)=>{
//         setusername(e.target.value)
//         console.log(username)
//       }}
//       />
//     </form>
//     </>
//   )
// };

// export default page
