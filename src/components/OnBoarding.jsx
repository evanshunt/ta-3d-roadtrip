import React, { useState } from "react";
import "../scss/onboarding.scss";

const Onboarding = () => {
  return (
    <div className="onboarding">
      <svg
        className="onboarding__top"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
      >
        <g filter="url(#a)">
          <circle
            cx="64"
            cy="54"
            r="54"
            fill="#00A79A"
            fillOpacity=".8"
            shapeRendering="crispEdges"
          />
        </g>
        <path
          d="M72.2213 22c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-18.9284-1.7071c-.3905.3905-.3905 1.0237 0 1.4142l6.364 6.364c.3905.3905 1.0236.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4142L55.4142 21l5.6569-5.6569c.3905-.3905.3905-1.0236 0-1.4142-.3906-.3905-1.0237-.3905-1.4142 0l-6.364 6.364ZM72.2213 20H54v2h18.2213v-2Z"
          fill="#fff"
        />
        <path
          d="M64.5283 64.2271v-21.75c0-1.9721-1.5988-3.5709-3.5709-3.5709s-3.5708 1.5988-3.5708 3.5709v28.0762c0 .2104-.2183.3497-.4091.2611l-8.8016-4.0863c-1.163-.54-2.5339-.3533-3.5102.478-1.4436 1.2292-1.5486 3.4223-.229 4.7837l14.2975 14.7506c3.2582 3.3615 7.7397 5.2589 12.4211 5.2589 8.1888 0 14.8271-6.6384 14.8271-14.8271V57.92c0-1.932-1.5662-3.4982-3.4983-3.4982-1.932 0-3.4983 1.5662-3.4983 3.4982v6.3071-8.0367c0-1.9961-1.6182-3.6144-3.6143-3.6144-1.9962 0-3.6144 1.6183-3.6144 3.6144v8.0367-10.0554c0-1.9962-1.6183-3.6144-3.6144-3.6144-1.9962 0-3.6144 1.6182-3.6144 3.6144v10.0554Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width="128"
            height="128"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_667_7348"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_667_7348"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <img src={"images/onboarding-blur.png"} className="onboarding__blur" />
    </div>
  );
};

export default Onboarding;
