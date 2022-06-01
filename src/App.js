import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Category from "./Components/Category";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Order from "./Components/Order";
import Product from "./Product";

// const orderData=[
// {
//     name:"burger",
//     price:30,
//     qty:2,
//   },  
// {
//     name:"burger",
//     price:30,
//     qty:2,
//   },  
// {
//     name:"burger",
//     price:30,
//     qty:2,
//   },  
// ]


function App() {
  const [orderData,setOrderData] = useState([]);
  const handleClick = (data) => {
    // console.log("hello this is final"+data)
    let CheckArray= orderData.find((item)=>item.name==data.title);
    if(CheckArray==undefined){
      setOrderData([...orderData,{name:data.title,qty:1,price:data.price}]);

    }
    else{
      setOrderData(orderData.map((item)=>item.name==data.title?{...item,qty:item.qty+1}:item));
    }
    // console.log(CheckArray);
  }

  const handleCount = (count,name) => {
  setOrderData(orderData.map((item)=>item.name==name? {...item,qty:count}:item))
   console.log("plus is working");
}

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={2}>
            <Category />
          </Grid>
          <Grid item lg={6}>
            <Content handleClick={(data) => handleClick(data)} Product={Product}/>
          </Grid>
          <Grid item lg={4}>
            <Order orderData={orderData} handleCount={((count,name)=>handleCount(count,name))} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
