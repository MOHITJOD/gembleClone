import React from "react";

import Hero from "./Hero";
import Left from "./Left";
import Right from "./Right";
import Univerce from "./Univerce";

function ProductPage() {
  return (
    <>
      <Hero />
      <Left
        imageURL="assets/images/kite.png"
        productName="Kite"
        productDec="Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices."
        link1="https://kite-demo.zerodha.com/"
        link2="https://zerodha.com/products/kite"
        link1Name="Try demo →"
        link2Name="Learn more →"
      />
      <Right
        name="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="https://zerodha.com/products/console"
        linkName="Learn More →"
        img="assets/images/console.png"
      />
      <Left
        imageURL="assets/images/coin.png"
        productName="Coin"
        productDec="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="https://coin.zerodha.com/"
        link1Name="Coin →"
      />
      <Right
        name="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="https://zerodha.com/products/api/"
        linkName="Kite Connect →"
        img="assets/images/landing.svg"
      />
      <Left
        imageURL="assets/images/varsity.png"
        productName="Varsity mobile"
        productDec="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        
      />
<h4 className="text-center m-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
      <Univerce />
    </>
  );
}

export default ProductPage;
