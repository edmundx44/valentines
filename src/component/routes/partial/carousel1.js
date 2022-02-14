import React, { Component, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import zen_1 from "../../layout/img/photos/zen_1.jpg";
import zen_2 from "../../layout/img/photos/zen_2.jpg";
import zen_3 from "../../layout/img/photos/zen_3.jpg";
import zen_4 from "../../layout/img/photos/zen_4.jpg";
import zen_5 from "../../layout/img/photos/zen_5.jpg";
import zen_6 from "../../layout/img/photos/zen_6.jpg";
import zen_7 from "../../layout/img/photos/zen_7.jpg";
import zen_8 from "../../layout/img/photos/zen_8.jpg";
import zen_9 from "../../layout/img/photos/zen_9.jpg";
import zen_10 from "../../layout/img/photos/zen_10.jpg";
import zen_11 from "../../layout/img/photos/zen_11.jpg";
import zen_12 from "../../layout/img/photos/zen_12.jpg";
import zen_13 from "../../layout/img/photos/zen_13.jpg";
import zen_14 from "../../layout/img/photos/zen_14.jpg";
import zen_15 from "../../layout/img/photos/zen_15.jpg";
import zen_16 from "../../layout/img/photos/zen_16.jpg";
import zen_17 from "../../layout/img/photos/zen_17.jpg";
import zen_18 from "../../layout/img/photos/zen_18.jpg";
import zen_19 from "../../layout/img/photos/zen_19.jpg";
import zen_20 from "../../layout/img/photos/zen_20.jpg";
import zen_21 from "../../layout/img/photos/zen_21.jpg";


const Carousel = () => {
    const [ width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    }, [])
    return (
        <div id="carousel" className="div-carousel-sec text-center">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                <motion.div 
                drag="x" 
                dragConstraints={{right:0, left:-width}}
                className="inner-carousel">
                    <motion.div className="item" key={zen_1}> <img className="" src={zen_1} alt="" /></motion.div>
                    <motion.div className="item" key={zen_2}> <img className="" src={zen_2} alt="" /></motion.div>
                    <motion.div className="item" key={zen_3}> <img className="" src={zen_3} alt="" /></motion.div>
                    <motion.div className="item" key={zen_4}> <img className="" src={zen_4} alt="" /></motion.div>
                    <motion.div className="item" key={zen_5}> <img className="" src={zen_5} alt="" /></motion.div>
                    <motion.div className="item" key={zen_6}> <img className="" src={zen_6} alt="" /></motion.div>
                    <motion.div className="item" key={zen_7}> <img className="" src={zen_7} alt="" /></motion.div>
                    <motion.div className="item" key={zen_8}> <img className="" src={zen_8} alt="" /></motion.div>
                    <motion.div className="item" key={zen_9}> <img className="" src={zen_9} alt="" /></motion.div>
                    <motion.div className="item" key={zen_10}> <img className="" src={zen_10} alt="" /></motion.div>
                    <motion.div className="item" key={zen_11}> <img className="" src={zen_11} alt="" /></motion.div>
                    <motion.div className="item" key={zen_12}> <img className="" src={zen_12} alt="" /></motion.div>
                    <motion.div className="item" key={zen_13}> <img className="" src={zen_13} alt="" /></motion.div>
                    <motion.div className="item" key={zen_14}> <img className="" src={zen_14} alt="" /></motion.div>
                    <motion.div className="item" key={zen_15}> <img className="" src={zen_15} alt="" /></motion.div>
                    <motion.div className="item" key={zen_16}> <img className="" src={zen_16} alt="" /></motion.div>
                    <motion.div className="item" key={zen_17}> <img className="" src={zen_17} alt="" /></motion.div>
                    <motion.div className="item" key={zen_18}> <img className="" src={zen_18} alt="" /></motion.div>
                    <motion.div className="item" key={zen_19}> <img className="" src={zen_19} alt="" /></motion.div>
                    <motion.div className="item" key={zen_20}> <img className="" src={zen_20} alt="" /></motion.div>
                    <motion.div className="item" key={zen_21}> <img className="" src={zen_21} alt="" /></motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Carousel;
