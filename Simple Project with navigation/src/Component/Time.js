import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useMutation } from 'react-query';



// This is Watch function
function Time() {
    // const [time, setTime] = useState(new Date());
    // const times = () => {
    //     setTime(new Date());
    // }
    // useEffect(() => {
    //     setInterval(times, 1000);
    // })
    return (

        <div style={{background:'green', width:'100%', height:'200px'}}>
            
            {/* <h4 style={{ color: 'green', fontFamily: 'cursive' }}>Time:{time.toLocaleTimeString()}</h4>
            <h5 style={{ color: 'blue', fontFamily: 'cursive' }}>Date:{time.toDateString()}</h5> */}
        </div>
    );
}
export default Time;

// Find the maximum number

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function find_max(nums) {
//     let max_num = Number.NEGATIVE_INFINITY;
//     for (let num of nums) {
//         if (num > max_num) {
//             max_num = num;
//         }
//     }
//     return max_num;
// }


// Fetching Data Test
// function Test() {
//     const [name, setName] = useState('')
//     const [message, setMessage] = useState('')
//     const { isLoding, isError, error, mutate } = useMutation(createName)

//     async function createName() {
//         const response = await axios.post('https://jsonplaceholder.typicode.com/users')
//         setMessage(response.data)
//     }
//     const onChange = (e) => {
//         setName(e.target.value)
//     }
//     const Create = () => {
//         mutate({ id: Date.now(), name })
//     }
//     return (
//         <div>
//             <div>
//                 <h2>Name</h2>
//                 <ul>
//                     <li>
//                         Leopoldo_Corkery
//                     </li>
//                     <li>
//                         Glenna Reichert
//                     </li>
//                     <li>
//                         Clementina DuBuque
//                     </li>
//                     <li>
//                         Nicholas Runolfsdottir V
//                     </li>

//                 </ul>
//             </div>


//             <label>List of Names: </label>
//             <input
//                 type='text'
//                 value={name}
//                 onChange={onChange} />
//             <button style={{ marginLeft: '5px', height: '35px', width: '80px', background: 'blue', color: 'white', borderRadius: '3px' }} onClick={Create}>Create</button>
//             <p>Created a new Name ID:{message && message.id}</p>
//             <div>
//                 {isLoding ? "updating..." : ""}
//                 {isError ? error.message : ""}
//             </div>
//         </div>
//     );
// }

// export default Test;







