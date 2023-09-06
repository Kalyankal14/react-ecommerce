import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseApp'
import PageLayout from './PageLayout'

function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDocs( collection(database, "orderHistory") )
            .then(dbCollection => {
                const ordersInDB = [];
                dbCollection.forEach( (doc) => {
                    var orderData = doc.data();
                    ordersInDB.push({...orderData, id: doc.id});
                });
                setOrders(ordersInDB);
                console.log(ordersInDB);
                setIsLoading(false)
            })
            .catch(console.log)
    }, [])

    return (
        <PageLayout title={isLoading ? 'Fetching orders...' : `Order History (${orders.length})`}>

            <section>
                {orders.map((order, idx) => <div key={order.id} className='mb-8 pb-8 border-b-2'>
                    <h3 className='text-lg font-semibold mb-2'>Order #{idx+1}</h3>
                    <ul>
                        {order.products.map((product, productIdx) => <li key={productIdx} className='mb-2 pl-4'>
                            {product.title} - {product.quantity}x
                        </li>)}
                    </ul>
                    <p className='text-gray-700 mt-2 text-sm'>
                        Shipping Address: {order.address}
                    </p>
                    <p className='text-gray-700 mt-2 text-sm'>
                        Order Date: {order.createdAt}
                    </p>
                </div>)}
            </section>
        </PageLayout>
    )
}

export default OrderHistory