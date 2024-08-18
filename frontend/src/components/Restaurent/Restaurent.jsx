// import React, { useContext } from 'react'
// import { StoreContext } from '../../Context/StoreContext'

// import './restaurent.css'
// import RestaurentList from '../RestaurentListing/RestaurentList';
// function Restaurent({category}) {
//   const {food_list} = useContext(StoreContext);

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className='food-display-list'>
//         {food_list.map((item)=>{
//           if (category==="All" || category===item.category) {
//             return <RestaurentList key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
//           }
//         })}
//       </div>
//     </div>
//   )
// }

// export default Restaurent