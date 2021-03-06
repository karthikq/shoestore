/** @format */

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./options.styles.scss";
import { motion } from "framer-motion";
import { connect } from "react-redux";

import { BiCategoryAlt, BiRightArrowAlt } from "react-icons/bi";

import OptionItem from "./OptionItem";
import { useNavigate } from "react-router-dom";
import { fetchselProduct } from "../../components/actions";

const Options = ({ fetchselProduct, navigationState }) => {
  const [selOptions, setSelOptions] = useState([]);
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();

  const checkExists = (userChoice) => {
    const value = userChoice.toLowerCase().replace(/\s/g, "");
    const val = selOptions?.find((item) => item === value);
    if (val) {
      const data = selOptions?.filter((item) => item !== val);
      setSelOptions(data);
    } else {
      return setSelOptions([...selOptions, value]);
    }
  };
  useEffect(() => {
    const data = sessionStorage.getItem("data");

    if (data) setSelOptions(data.split(","));
    if (!data) return;
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    toast.dismiss();
    if (selOptions.length === 0) {
      return toast.error("Select at least one item");
    } else {
      setBtnState(true);
      toast.loading("Finding best products");
      sessionStorage.setItem("data", selOptions);

      await fetchselProduct();

      setTimeout(() => {
        navigate("/product/list", {
          state: selOptions,
        });
        toast.dismiss();
      }, 1500);
    }
  };

  return (
    <motion.div
      // initial={{}}
      // animate={{}}
      // exit={{}}
      // transition={{ duration: 0.5, ease: "linear" }}
      className="options-container">
      <div className="options-contents">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <BiCategoryAlt className="option-cat-icon" /> Select a
          <span>Category</span>
        </motion.h2>
        <div className="options-list">
          <form onSubmit={onSubmit}>
            <div className="options-btn-list">
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sneakers"
                id={1}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Casual"
                id={2}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Running"
                id={3}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sports"
                id={4}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Boat shoes"
                id={5}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Flip flops"
                id={6}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Loafers"
                id={7}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Boots"
                id={8}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Formal Shoes"
                id={9}
              />
              <OptionItem
                checkExists={checkExists}
                selOptions={selOptions}
                value="Sandals & Floaters"
                id={10}
              />
            </div>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={
                btnState ? "options-btn-active options-btn" : "options-btn"
              }
              type="submit">
              {btnState ? (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <BiRightArrowAlt className="options-arrow-icon" />
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default connect(null, { fetchselProduct })(Options);
