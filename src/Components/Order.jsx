import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";

const OrderItem = (props) => {
    let [count, setCount] = useState(props.qty);
    const handlePlus = () => {

        setCount(count = count + 1)
        props.handleCount(count,props.name);
    }
    const handleMinus = () => {
        setCount(count = count - 1)
        props.handleCount(count,props.name);
    }
    return (
        <TableRow >
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.price}</TableCell>
            <TableCell sx={{ display: "flex" }}>
                <Button title="-" color="error" sx={{ paddingX: 0 }} variant="contained" onClick={() => handleMinus()}>-</Button>
                <Typography variant="h6" sx={{ marginX: 1 }} > {props.qty} </Typography>
                <Button title="+" color="success" sx={{ paddingX: 0 }} variant="contained" onClick={() => handlePlus()}>+</Button>
            </TableCell>
            <TableCell> {props.price * props.qty}</TableCell>
            <TableCell><Button ><DeleteForeverIcon color="error" /></Button>  </TableCell>
        </TableRow>
    )
}

export default function Order(props) {

    const handleCount = (count,name) => {

        props.handleCount(count,name)
    }
   

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Unit Price</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>Qty</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.orderData.map((value, key) => (
                            <OrderItem handleCount={((count,name)=>handleCount(count,name))}  key={key} name={value.name} price={value.price} qty={value.qty} />

                        ))
                    }

                </TableBody>
            </Table>
            <Typography variant="h5">Rs 5400/-</Typography>
        </>
    )
}