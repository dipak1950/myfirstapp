import { createContext } from 'react';
import './App.css';
import ComHeader from './ComHeader';

const Menus = createContext()

function App() {

    return (
        <Menus.Provider value={"Home"}>
            <ComHeader />
        </Menus.Provider>
    )
    // let data =
    //     [
    //         {
    //             id: 101,
    //             name: 'Abacavir',
    //             quantity: 25,
    //             price: 150,
    //             expiry: 2022,
    //             status: true
    //         },
    //         {
    //             id: 102,
    //             name: 'Eltrombopag',
    //             quantity: 90,
    //             price: 550,
    //             expiry: 2021,
    //             status: false
    //         },
    //         {
    //             id: 103,
    //             name: 'Meloxicam',
    //             quantity: 85,
    //             price: 450,
    //             expiry: 2025,
    //             status: false
    //         },
    //         {
    //             id: 104,
    //             name: 'Allopurinol',
    //             quantity: 50,
    //             price: 600,
    //             expiry: 2023,
    //             status: true
    //         },
    //         {
    //             id: 105,
    //             name: 'Phenytoin',
    //             quantity: 63,
    //             price: 250,
    //             expiry: 2021,
    //             status: false
    //         }
    //     ];

    // return (
    //     <div className='cards'>
    //         {
    //             data.map((v) => {
    //                 return (
    //                     <div className='card-item'>
    //                         <h4>
    //                             Name : {v.name}
    //                         </h4>
    //                         <br></br>
    //                         <h4>
    //                             ID : {v.id}
    //                         </h4>
    //                         <br></br>
    //                         <h4>
    //                             Quantity : {v.quantity}
    //                         </h4>
    //                         <br></br>
    //                         <h4>
    //                             Price : {v.price}
    //                         </h4>
    //                         <br></br>
    //                         <h4>
    //                             Expiry : {v.expiry}
    //                         </h4>
    //                         <br></br>
    //                         <h3>
    //                             Status :{v.status.toString()}
    //                         </h3>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )

}

export { Menus }
export default App;
