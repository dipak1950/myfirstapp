import './App.css';

function App() {

    let data =
        [
            {
                id: 101,
                name: 'Abacavir',
                quantity: 25,
                price: 150,
                expiry: 2022,
                status: true
            },
            {
                id: 102,
                name: 'Eltrombopag',
                quantity: 90,
                price: 550,
                expiry: 2021,
                status: false
            },
            {
                id: 103,
                name: 'Meloxicam',
                quantity: 85,
                price: 450,
                expiry: 2025,
                status: false
            },
            {
                id: 104,
                name: 'Allopurinol',
                quantity: 50,
                price: 600,
                expiry: 2023,
                status: true
            },
            {
                id: 105,
                name: 'Phenytoin',
                quantity: 63,
                price: 250,
                expiry: 2021,
                status: false
            }
        ];

    return (

        <table border="1" width="1200" align="center" cellspacing="0" cellpadding="5">
            <tr>
                <td>
                    id
                </td>
                <td>
                    name
                </td>
                <td>
                    quantity
                </td>
                <td>
                    price
                </td>
                <td>
                    expiry
                </td>
                <td>
                    status
                </td>
            </tr>

            {
                data.map((v) =>
                    <tr>
                        <td>
                            {v.id}
                        </td>
                        <td>
                            {v.name}
                        </td>
                        <td>
                            {v.quantity}
                        </td>
                        <td>
                            {v.price}
                        </td>
                        <td>
                            {v.expiry}
                        </td>
                        <td>
                            {v.status.toString()}
                        </td>
                    </tr>
                )
            }

        </table>
    )

}

export default App;
