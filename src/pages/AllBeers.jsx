import React, { useEffect, useState } from "react";
import Cover from "../components/Cover/Cover";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/UI/product-card/ProductCard";
import { getAllProducts, getSearchedProduct } from "../api";
import { productActions } from "../store/favorite-page/productSlice";


import "../styles/all-foods.css";


const AllBeers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [searchedProduct, setSearchedProduct] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const productData = useSelector((state) => state.product.productItems);
 
  
  const [page, setPage] = useState(1);

  // const fetchData = async () => {
  //   // setIsLoading(true);
  //   // setError(null);
  //   console.log("page value inside function" + page);
  //   try {
  //     const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=4`);
  //     const data = await response.json();
    
  //     dispatch(productActions.addProduct(data ));
     
  //   } catch (error) {
  //     console.log(error);
  //   } 
  // };

  const fetchData = () => {
    getAllProducts(page, setError).then((data) => {
              dispatch(productActions.addProduct(data));
              // setIsLoading(false);
      });
  }


  useEffect(() => {
    fetchData();
  }, [page]);
  
  const handleScroll = () => {
    try{
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev +1);
        // setIsLoading(false);
        console.log(page);
      }
    }catch(error){
      console.log(error);
    }
  };
  
  useEffect(() => {
    console.log("second ussefect calling" + page);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // search using debounce
  // let finalData;


  const useDebounce = (value, delay) => {
    const [debounceValue,setDebounceValue]=useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [value,delay])
    
    return debounceValue;
}

  const debouceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouceSearchTerm) {
      fetchProduct(debouceSearchTerm);
    }else {
      setSearchedProduct("");
      console.log('Something else')
    }
  },[debouceSearchTerm]) 

  const fetchProduct = (value) => getSearchedProduct(value, setSearchedProduct);
  // const fetchProduct = (value) => {
  //   fetch(`https://api.punkapi.com/v2/beers?beer_name=${value}`)
  //   .then((res) => res.json())
  //   .then((response) => {
  //      console.log('Reponse', response);
  //     setSearchedProduct(response);
  //   })
  // }
//  let count =1;
//   console.log(typeof(searchTerm));
  console.log(searchedProduct);


  // useEffect(() => {
  //   // console.log(productData);
  //    if (productData) {

  //     getAllProducts().then((data) => {
  //        dispatch(productActions.addProduct(data));
  //       //  console.log("Heelo data" + JSON.stringify(data) );
  //     });
  //   }
  // }, []);

  

  return (
    <Cover title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                </select>
              </div>
            </Col>
            
            {
              searchedProduct ? searchedProduct.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              )) : productData.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                  {/* {isLoading && <div>Loading...</div>} */}
                </Col>
              ))
            }
             
           
            {/* {
              productData.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              ))
            } */}
             
            

          </Row>
        </Container>
      </section>
    </Cover>
  );
};

export default AllBeers;