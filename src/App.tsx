import React, { createContext, useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Partners from "./Components/UI/Partners/Partners";
import Footer from "./Components/UI/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Blog from "./Components/Pages/Blog/Blog";
import AboutUs from "./Components/Pages/About/AboutUs";
import Page from "./Components/Pages/Page/Page";
import Shop from "./Components/Pages/Shop/Shop";
import Header from "./Components/UI/Header/Header";

import Login from "./Components/UI/Login/Login";
import ComingSoon from "./Components/UI/ComingSoon/ComingSoon";
import Products from "./Components/UI/Products/Products";
import ContactUs from "./Components/UI/ContactUs/ContactUs";
import Faq from "./Components/UI/Faq/Faq";
import Test from "./Components/UI/Test/Test";
import BlogList from "./Components/UI/BlogList/BlogList";
import BlogList2 from "./Components/UI/BlogList2/BlogList2";
import BlogMasonry from "./Components/UI/BlogMasonry/BlogMasonry";
import BlogGrid from "./Components/UI/BlogGrid/BlogGrid";
import ShopHover from "./Components/UI/ShopHover/ShopHover";
import Wishlist from "./Components/UI/WishList/Wishlist";
import ShopFull from "./Components/UI/ShopFull/ShopFull";
import ShopDetail from "./Components/UI/ShopDetail/ShopDetail";
import { fullProductsData } from "./Components/UI/Products/productsData";
import { productsData } from "./Components/UI/Products/productsData";
import ShopElement from "./Components/UI/ShopElement/ShopElement";
import TestFile from "./Components/UI/TestFile/TestFile";
import CartShop from "./Components/UI/CartShop/CartShop";
import Checkout from "./Components/UI/CheckOut/Checkout";
import OrderCpmplete from "./Components/UI/OrderComplete/OrderCpmplete";
import ViewMore from "./Components/UI/ViewMore/ViewMore";
import Register from "./Components/UI/Register/Register";
import { paginationData } from "./Components/UI/Pagination/usePagination";

import BlogViewMore from "./Components/UI/BlogViewMore/BlogViewMore";

export const ThemeContext = createContext(undefined);

function App() {
  const [search, setSearch] = useState("");

  const [state, setState] = useState(fullProductsData);

  const [products, setProducts] = useState(productsData);

  const [isActive, setIsActive] = useState(false);

  const getFilterList = (element) => {
    const newItem = fullProductsData.filter((e) => e.name === element);
    setState(newItem);
  };

  const getFilterCategory = (element) => {
    const newItem = productsData.filter((e) => e.name === element);
    setProducts(newItem);
    console.log("newItemssss", newItem);
  };

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    // console.log("search", searchTerm);
    const newItem = fullProductsData.filter((e) => e.tittle === searchTerm);

    setState(newItem);
    setValue(searchTerm);
    console.log("searchNewwww", newItem);
  };
  useEffect(() => {
    setState(fullProductsData);
  }, [value]);

  const getSearchInput = (element) => {
    const newItem = fullProductsData.filter((e) => e.tittle === element);
    setProducts(newItem);
    console.log("newItemssss", newItem);
  };

  //for pagination

  const [category, setCategory] = useState(paginationData);
  const [currentPage, setCurrenPage] = useState(1);

  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = category.slice(firstIndex, lastIndex);
  const npage = Math.ceil(category.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrenPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrenPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrenPage(currentPage + 1);
    }
  };

  const getCategory = (element) => {
    const newItem = category.filter((e) => e.category === element);
    setCategory(newItem);
    console.log("blogList", newItem);
  };

  const pageNumbers = numbers.map((n, i) => (
    <li key={i} className={`${currentPage === n ? "active" : ""}`}>
      <Link to="" onClick={() => changeCPage(n)}>
        {n}
      </Link>
    </li>
  ));
  const menuItems = [...new Set(category.map((val) => val.category))];

  const searchObj = {
    search,
    setSearch,
    getFilterList,
    state,
    setState,
    isActive,
    setIsActive,
    products,
    setProducts,
    // getSearchInput,
    getFilterCategory,
    value,
    setValue,
    onChange,
    onSearch,
    currentPage,
    records,
    numbers,
    prePage,
    nextPage,
    changeCPage,
    getCategory,
    menuItems,
    category,
    setCategory,
    pageNumbers
  };
  return (
    <>
      <ThemeContext.Provider value={searchObj}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/page" element={<Page />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/coming" element={<ComingSoon />} />
            <Route path="/blogList" element={<BlogList />} />
            <Route path="/blogList2" element={<BlogList2 />} />
            <Route path="/blogGrid" element={<BlogGrid />} />
            <Route path="/blogMasonry" element={<BlogMasonry />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/shopFull" element={<ShopFull />} />
            <Route path="/shopDetail" element={<ShopDetail />} />
            <Route path="/shopElement" element={<ShopElement />} />
            <Route path="/cartShop" element={<CartShop />} />
            <Route path="/checkOut" element={<Checkout />} />
            <Route path="/orderComplete" element={<OrderCpmplete />} />
            <Route path="/viewMore" element={<ViewMore />} />
            {/* <Route path='/register' element={<Register/>}/> */}
            <Route path="/blogViewMore" element={<BlogViewMore />} />
          </Routes>
          <Partners />
          <Footer />
          {/* <ShopHover /> */}
          {/* <ShopElement/> */}
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
