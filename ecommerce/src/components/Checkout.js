import React, { useState } from 'react';
import UITextField from './UITextField';
import { useUser } from '../contexts/UserProvider';
import UIButton from './UIButton';
import { useAppContext } from '../contexts/AppProvider';
import { database } from "../firebaseApp"
import { collection, addDoc } from "firebase/firestore"; 

export default function Checkout() {
    const { user } = useUser();
    const { allCartProducts, totalCartAmount } = useAppContext()
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(":: Checkout -> handleSubmit ::", {allCartProducts, totalCartAmount, user, address});

        const products = allCartProducts.map(product => {
            return {
                id: product.id,
                quantity: product.quantity,
                title: product.title,
                price: product.price,
                totalPrice: product.totalPrice,
            }
        })

        const saveOrder = {
            userId: user.uid,
            userEmail: user.email,
            address,
            products,
            totalAmount: totalCartAmount,
        }

        addDoc(
            collection(database, "orderHistory"),
            saveOrder
        ).then((docRef) => {
            console.log(":: orderHistory -> save ::", docRef)
        })
        .catch(error => {
            console.log(":: orderHistory -> ERROR ::", error)
        })

        console.log(":: Checkout -> handleSubmit -> saveOrder ::", saveOrder)
    }

    return <div className='container mx-auto px-4 py-6'>
        <h2 className='text-2xl font-semibold mb-4'>Checkout</h2>
        <form onSubmit={handleSubmit}>
            <UITextField placeholder="Email" value={user.email} readOnly />
            <UITextField placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
            <UIButton disabled={!address || address.length < 10}>Submit</UIButton>
        </form>
    </div>
}


