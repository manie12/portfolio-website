import React, { useEffect, useState } from 'react';
import "./Products.css";
import jsonData from '../pivot.json';
export default function Products() {

    type Props = {
        rowId: number
        orderId: string
        orderDate: string
        shipDate: string
        shipMode: string
        customerId: string
        customerName: string
        segment: string
        country: string
        city: string
        state: string
        postalCode: number
        region: string
        productId: string
        category: string
        subCategory: string
        productName: string
        sales: number
        quantity: number
        discount: number
        profit: number

    }
    const [data, setdata] = useState<Props[]>([])



    useEffect(() => {
        setdata(jsonData)
    }, [])

    return (
        <div>

            <table className='products_table'  >
                <thead   >
                    <tr className="t_head_table_Row">
                        < th className="th_p" align="left" colSpan={2} >PRODUCTS</th>
                        <th>STATES</th>

                    </tr>

                </thead>
                {

                    data && data.map(d => (
                        <>
                            <thead className="t_head_table_Row" key={d.rowId} >
                                <tr>
                                    <th className="th_category" align="left">Category</th>
                                    <th align="left">sub-Category</th>

                                    <th align="left">{d.state}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th align="left" className="category_link">{d.category}</th>
                                    <td style={{ backgroundColor: 'white' }}>{d.subCategory}</td>

                                    <td style={{ backgroundColor: 'white' }}>{d.sales}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th align="left" colSpan={2}>Furniture Total</th>
                                    <td>3,566</td>
                                </tr>
                            </tfoot>



                        </>
                    ))
                }
            </table >


        </div >



    )
}
