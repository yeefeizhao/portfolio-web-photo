import React from "react";
import "./WaveAnimation.css"; // Import the CSS file for styling

const WaveAnimation = () => {
    return (
        <div
            className="group"
            id="page-wrap"
        >
            <div id="inner-wrap">
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1440"
                    height="321.75"
                    viewBox="0 0 960 214.5"
                    preserveAspectRatio="xMinYMid meet"
                >
                    <defs>
                        <style>
                        {`
                            .waves>path{-webkit-animation:a 17390ms ease-in-out infinite alternate-reverse both;-moz-animation:a 17390ms ease-in-out infinite alternate-reverse both;-ms-animation:a 17390ms ease-in-out infinite alternate-reverse both;-o-animation:a 17390ms ease-in-out infinite alternate-reverse both;animation:a 17390ms ease-in-out infinite alternate-reverse both;-webkit-animation-timing-function:cubic-bezier(.25,0,.75,1);-moz-animation-timing-function:cubic-bezier(.25,0,.75,1);-ms-animation-timing-function:cubic-bezier(.25,0,.75,1);-o-animation-timing-function:cubic-bezier(.25,0,.75,1);animation-timing-function:cubic-bezier(.25,0,.75,1);-webkit-will-change:transform;-moz-will-change:transform;-ms-will-change:transform;-o-will-change:transform;will-change:transform}.waves>path:nth-of-type(1){-webkit-animation-duration:20580ms;-moz-animation-duration:20580ms;-ms-animation-duration:20580ms;-o-animation-duration:20580ms;animation-duration:20580ms}.waves>path:nth-of-type(2){-webkit-animation-delay:-2690ms;-moz-animation-delay:-2690ms;-ms-animation-delay:-2690ms;-o-animation-delay:-2690ms;animation-delay:-2690ms;-webkit-animation-duration:13580ms;-moz-animation-duration:13580ms;-ms-animation-duration:13580ms;-o-animation-duration:13580ms;animation-duration:13580ms}g>path:nth-of-type(1){-webkit-animation-delay:-820ms;-moz-animation-delay:-820ms;-ms-animation-delay:-820ms;-o-animation-delay:-820ms;animation-delay:-820ms;-webkit-animation-duration:10730ms;-moz-animation-duration:10730ms;-ms-animation-duration:10730ms;-o-animation-duration:10730ms;animation-duration:10730ms}.waves>path:nth-of-type(1),g>path:nth-of-type(2){-webkit-animation-direction:alternate;-moz-animation-direction:alternate;-ms-animation-direction:alternate;-o-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes a{0%{-webkit-transform:translateX(-750px);transform:translateX(-750px)}100%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@-moz-keyframes a{0%{-moz-transform:translateX(-750px);transform:translateX(-750px)}100%{-moz-transform:translateX(-20px);transform:translateX(-20px)}}@-ms-keyframes a{0%{-ms-transform:translateX(-750px);transform:translateX(-750px)}100%{-ms-transform:translateX(-20px);transform:translateX(-20px)}}@-o-keyframes a{0%{-o-transform:translateX(-750px);transform:translateX(-750px)}100%{-o-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes a{0%{-webkit-transform:translateX(-750px);-moz-transform:translateX(-750px);-ms-transform:translateX(-750px);-o-transform:translateX(-750px);transform:translateX(-750px)}100%{-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}
                        `}
                        </style>
                        <linearGradient id="a">
                            <stop stopColor="rgba(52,89,149,1)" />
                            <stop offset="0.31" stopColor="rgba(52,89,149,1)" />
                            <stop offset="0.73" stopColor="rgba(26,162,190,1)" />
                            <stop offset="1.0" stopColor="rgba(52,89,149,1)" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#a)"
                        d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"
                    />
                    <path
                        fill="#F2F5F5"
                        d="M2663.6 73.2S2577 92 2529 89c-130.7-8.5-209.5-56.3-286.7-62.4s-125.7 18-188.3 18c-5 0-10-.4-14.5-.7-52-5-149.2-43-220.7-39-31.7 2-64 14-96.4 30-160.4 80-230.2-5.6-340.4-18-110-12-146.6 20-274 36S820.4 0 605.8 0C450.8 0 356 71 225.2 62.2 128 56 60.7 28-.3 11.2V104c22 7.3 46 14.2 70.4 16.7 110 12.3 147-19.3 275-35.5s350 39.8 369 43c27 4.3 59 8 94 10 13 .5 26 1 39 1 156 2 250-70.3 381-62 130.5 8.2 209.5 56.3 286.7 62 77 6.4 125.8-18 188.3-17.5 5 0 10 .2 14.3.6 52 5 145 49.5 220.7 38.2 32-5 64-15 96.6-31 160.5-79.4 230.3 6 340 18.4 110 12 146.3-20 273.7-36l15.5-2V73l1-.5z"
                    />
                    <g fill="none" stroke="#E2E9E9" strokeWidth="1">
                        <path d="M0 51.4c3.4.6 7.7 1.4 11 2.3 133.2 34 224.3 34 308.6 34 110.2 0 116.7 36.6 229.8 26 113-11 128.7-44 222-42.6C865 73 889 38 1002 27c113-10.8 119.6 25.6 229.8 25.6 84.4 0 175.4 0 308.6 34 133 34.2 277-73 379.4-84.3 204-22.5 283.6 128.7 283.6 128.7" />
                        <path d="M0 6C115.7-6 198.3 76.6 308 76.6c109.6 0 131.8-20 223-28.3 114.3-10.2 238.2 0 238.2 0s124 10.2 238.3 0c91-8.2 113.2-28 223-28S1425 103 1541 91c115.8-11.8 153.3-69 269.3-84.6 116-15.5 198.4 71 308 71 109.8 0 131.8-20 223-28 114-10.2 237.7 0 237.7 0s37.4 2.4 82.8 3.7" />
                    </g>
                </svg>
                
            </div>
        </div>
    );
};

export default WaveAnimation;
