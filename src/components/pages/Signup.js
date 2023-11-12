// import React from 'react'

// const Signup = () => {
//     return (
//         <div className='container'>
//         <div className ='header'>
//         <div className = 'text'>
//             Sign Up
//             </div>
//             <div className = 'inputs'>

//             </div>
//             </div>
//         </div>
//     )
// }

// export default Signup; 


// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic, e.g., send data to the server
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React from 'react';
import '../../App.css';

// function Signup() {
//   return (
//     <h1 className='sign-up'>Sign Up Page</h1>
//   );
// }

function Signup() {
  return (
    <>
      <header>
        <h1>Sign Up</h1>
      </header>
      <main>
        {/* Sign up form goes here */}
      </main>
    </>
  );
}

export default Signup;