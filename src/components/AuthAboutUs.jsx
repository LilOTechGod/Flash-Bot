import React from "react";

export const AuthAboutUs = () => {
  return (
    <>
        <style>
            {`
                .aboutTitle {
                    float:right;
                    width:100%;
                    margin: 3rem 0rem 3rem 3rem;
                    text-align:center;
                }
                .paragraph {
                    float: left;
                    width: 73%;
                    padding: 2rem;
                    font-size: 18px;
                    font-weight: bold;
                }
                .authImg {
                    margin-bottom: 3rem;
                }
            `}
        </style>
      <h2 className="aboutTitle">About Us</h2>
      <div>
      <p className="paragraph text-center">
      We've created a solution. a group of developers and myself have created a self checkout Bot that'll allow you to checkout withing 5 seconds, maximizing your possibilities of hitting that pair or item at least once guaranteed! Don't pay re-sell price for anything, instead pay half that price for our services and get what you want. My team provides 24/7 customer service support through email. Now you might think this is a scam but, I promise you it is not. Numbers don't lie and we have clients who can confirm that. Feel free to email us if you have any questions! Chat with you soon.
      </p>

      <img
        src="https://th.bing.com/th/id/OIP.S2S8d0mhY0492hBSZLfzDQHaFS?w=264&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="authImg"
      />
      </div>
      {/* about us section ends */}
    </>
  );
};
