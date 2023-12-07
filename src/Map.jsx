import React, { useEffect, useState } from "react";

import mapCloudsImg from "/images/maps/Map Clouds.webp";
import gsap from "gsap/dist/gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MapBackground from "./components/MapBackground";

gsap.registerPlugin(DrawSVGPlugin);
const tl = new gsap.timeline();

export const Map = ({ removeIntro, start }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const duration = 0.66;

  useEffect(() => {
    if (hasStarted) return;

    let startedOut = false;

    const animateScene = () => {
      tl.pause();
      animatePins(tl);
      animateMaps(tl);

      if (start) {
        tl.play();
        setHasStarted(true);
      }
    };

    const animatePins = (tl) => {
      gsap.set(".pin", {
        opacity: 0,
        transformOrigin: "50% 50%",
        scale: 0.7,
      });

      tl.to(".pin--banff", {
        opacity: 1,
        scale: 1,
        ease: "bounce.out",
        duration: duration * 1.25,
        // delay: duration * 0.5,
      });

      tl.to(
        ".pin--lake-louise",
        {
          opacity: 1,
          scale: 1,
          ease: "bounce.out",
          duration: duration * 1.25,
        },
        "+=70%"
      );

      tl.to(
        ".pin--jasper",
        {
          opacity: 1,
          scale: 1,
          ease: "elastic.out",
          duration: duration * 1.25,
        },
        "+=175%"
      );

      gsap.set(".route", {
        drawSVG: "0% 0%",
      });

      tl.to(
        ".route",
        {
          drawSVG: "0% 100%",
          duration: duration * 4,
          ease: "linear",
          delay: duration,
        },
        duration * 0.5
      );
    };

    const animateMaps = (tl) => {
      const intro = document.querySelector(".intro");
      const clouds = document.querySelector(".cloud-intro");
      const mapWrap = document.querySelector(".map-wrap");
      gsap.set(".whole-scene", {
        transformOrigin: "36% 65%",
      });
      tl.to(
        ".whole-scene",
        {
          scale: 3,
          duration: duration * 10,
          ease: "power1.in",
          onUpdate: (e) => {
            if (tl._time > duration * 7.25 && !startedOut) {
              startedOut = true;

              clouds.classList.remove("cloud-intro--play");
              clouds.classList.add("cloud-intro--play--back");
              clouds.classList.add("cloud-intro--play--in");

              setTimeout(() => {
                clouds.classList.remove("cloud-intro--play--in");
                clouds.classList.add("cloud-intro--play");
              }, duration * 2350);

              setTimeout(() => {
                removeIntro();
                intro.classList.add("intro--complete");
              }, duration * 2350);

              // setTimeout(() => {
              //   mapWrap.classList.add("map-wrap--complete");
              // }, duration * 2150 + 1900);

              // },
            }
          },
        },
        "<"
      );
      gsap.set(".map__clouds", {
        transformOrigin: "35% 55%",
      });
      tl.to(
        ".map__clouds",
        {
          scale: 1.333,
          opacity: 0,
          duration: duration * 9,
          ease: "power1.in",
        },
        "<-2%"
      );
    };

    animateScene();
  }, [start]);

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1393 1258"
      className="map-wrap"
    >
      <g className="whole-scene">
        <g className="map-background">
          <MapBackground />
        </g>
        {/* <g clipPath="url(#a)"> */}
        <g className="map__path">
          <svg width="88" height="139" fill="none">
            <path
              stroke="#9C0F00"
              strokeLinecap="round"
              strokeWidth="6"
              className="route"
              d="m79.543 131.461-22.116-21.986.814-12.474C54.376 92.24 46.71 81.72 46.97 77.727c.26-3.992-4.758-8.995-7.3-10.998l-2.939-8.71-6.128-5.911-3.644-13.266-13.591-14.415.39-5.987-5.802-10.9"
            />
            {/* <circle cx="8" cy="7" r="7" fill="#9C0F00" /> */}
            <circle
              cx="8"
              cy="7"
              r="7"
              fill="#fff"
              className="pin pin--jasper"
            />
            {/* <circle cx="59" cy="109" r="7" fill="#9C0F00" /> */}
            <circle
              cx="59"
              cy="109"
              r="7"
              fill="#fff"
              className="pin pin--lake-louise"
            />
            {/* <circle cx="80" cy="132" r="7" fill="#9C0F00" /> */}
            <circle
              cx="80"
              cy="132"
              r="7"
              fill="#fff"
              className="pin pin--banff"
            />
          </svg>
        </g>
        <g className="map__edmonton">
          <ellipse
            cx="590"
            cy="497"
            rx="6"
            ry="1"
            fill="#000000"
            className="shadow shadow--edmonton"
          />
          <path
            d="m590 496-6.062-10.5h12.124L590 496Z"
            fill="#9C0F00"
            className="triangle triangle--edmonton"
          />
          <circle
            cx="589.5"
            cy="449.5"
            r="36.5"
            fill="#9C0F00"
            className="bubble bubble--edmonton"
          />

          <path
            d="M568.744 454.662v1.344h-3.724v2.366h3.612v1.344h-3.612v2.94h3.724V464h-5.152v-9.338h5.152Zm5.908 4.13v-4.998h1.372V464h-1.372v-.616c-.602.7-1.344.798-1.764.798-1.82 0-2.856-1.512-2.856-3.136 0-1.918 1.316-3.094 2.87-3.094.434 0 1.19.112 1.75.84Zm-1.582.392c-.994 0-1.638.84-1.638 1.89 0 1.022.644 1.876 1.638 1.876.868 0 1.666-.63 1.666-1.862 0-1.288-.798-1.904-1.666-1.904Zm4.694 4.816v-5.894h1.372v.546c.462-.56 1.008-.7 1.456-.7.616 0 1.19.294 1.526.868.49-.7 1.232-.868 1.75-.868.714 0 1.344.336 1.68.924.112.196.308.63.308 1.484V464h-1.372v-3.248c0-.658-.07-.924-.126-1.05-.084-.224-.294-.518-.784-.518-.336 0-.63.182-.812.434-.238.336-.266.84-.266 1.344V464h-1.372v-3.248c0-.658-.07-.924-.126-1.05-.084-.224-.294-.518-.784-.518-.336 0-.63.182-.812.434-.238.336-.266.84-.266 1.344V464h-1.372Zm12.672-6.048c1.778 0 3.15 1.288 3.15 3.108 0 1.806-1.372 3.122-3.15 3.122-1.778 0-3.15-1.316-3.15-3.122 0-1.82 1.372-3.108 3.15-3.108Zm0 4.998c1.078 0 1.75-.742 1.75-1.876 0-1.344-.882-1.89-1.75-1.89s-1.75.546-1.75 1.89c0 1.134.672 1.876 1.75 1.876Zm4.568 1.05v-5.894h1.372v.546c.588-.658 1.26-.7 1.596-.7 1.092 0 1.554.546 1.736.798.224.322.364.728.364 1.638V464H598.7v-3.276c0-1.498-.56-1.54-1.078-1.54-.616 0-1.246.084-1.246 1.988V464h-1.372Zm9.273-4.634h-1.05V464h-1.372v-4.634h-.574v-1.26h.574v-2.156h1.372v2.156h1.05v1.26Zm3.768-1.414c1.778 0 3.15 1.288 3.15 3.108 0 1.806-1.372 3.122-3.15 3.122-1.778 0-3.15-1.316-3.15-3.122 0-1.82 1.372-3.108 3.15-3.108Zm0 4.998c1.078 0 1.75-.742 1.75-1.876 0-1.344-.882-1.89-1.75-1.89s-1.75.546-1.75 1.89c0 1.134.672 1.876 1.75 1.876Zm4.568 1.05v-5.894h1.372v.546c.588-.658 1.26-.7 1.596-.7 1.092 0 1.554.546 1.736.798.224.322.364.728.364 1.638V464h-1.372v-3.276c0-1.498-.56-1.54-1.078-1.54-.616 0-1.246.084-1.246 1.988V464h-1.372Z"
            fill="#fff"
            className="bubble-text bubble-text--edmonton"
          />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M600.698 448.748h-.706v-21.849c0-.218-.185-.405-.4-.405h-7.674c-.245 0-.429.187-.429.405v1.808h-.799v-1.808c0-.218-.184-.405-.429-.405h-1.781v-1.278c0-.53-.829-.53-.829 0v1.278h-1.78c-.215 0-.399.187-.399.405v1.808h-1.228c-.245 0-.43.187-.43.405v3.491h-3.407c-.245 0-.43.187-.43.405v15.74h-.675c-.522 0-.522.842 0 .842h21.396c.521 0 .521-.842 0-.842Zm-2.886-2.369v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm0-2.774v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm-13.169 1.091v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm-1.627-5.548v-.561c0-.561-.828-.561-.828 0v.561c0 .53.828.53.828 0Zm0-2.805v-.53c0-.561-.828-.561-.828 0v.53c0 .561.828.561.828 0Zm14.796-1.091v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm-1.658 0v-.561c0-.561-.828-.561-.828 0v.561c0 .53.828.53.828 0Zm-1.626 0v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm3.284-5.579v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm0 2.774v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm-3.284 0v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm1.626-2.774v-.561c0-.53-.828-.53-.828 0v.561c0 .561.828.561.828 0Zm-1.626 0v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm3.284 8.353v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm-5.894 9.881c.215 0 .399-.187.399-.406v-7.792c0-.561-.828-.561-.828 0v7.792c0 .219.184.406.429.406Zm-5.617-11.564v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm-3.285 8.353v-.561c0-.53-.828-.53-.828 0v.561c0 .561.828.561.828 0Zm0-2.774v-.561c0-.53-.828-.53-.828 0v.561c0 .561.828.561.828 0Zm1.627-2.774v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm5.618 8.759c.245 0 .429-.187.429-.406v-7.792c0-.561-.828-.561-.828 0v7.792c0 .219.184.406.399.406Zm3.284 0c.246 0 .43-.187.43-.406v-7.792c0-.561-.829-.561-.829 0v7.792c0 .219.184.406.399.406Zm-7.244-3.211v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm11.511-3.896v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm-13.169 1.122v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm1.658 0v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm0-2.774v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm3.407-8.228h-3.284c-.522 0-.522.841 0 .841h3.284c.553 0 .553-.841 0-.841Zm6.446 1.527v-.53c0-.561-.828-.561-.828 0v.53c0 .561.828.561.828 0Zm-11.511 3.896v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm1.658-9.039h3.561v1.403h-3.561v-1.403Zm-1.382 21.444h-1.35v-1.402h1.35v1.402Zm2.732 0h-1.903v-1.808c0-.249-.184-.436-.399-.436h-2.21c-.215 0-.399.187-.399.436v1.808h-1.934v-15.304h6.845v15.304Zm.43-16.145h-3.438v-3.055h6.846v8.073h-3.009v-1.403h1.228c.553 0 .553-.841 0-.841h-1.228v-1.372h1.228c.553 0 .553-.841 0-.841h-1.228v-.156c0-.218-.184-.405-.399-.405Zm7.245 16.145h-6.846v-10.317h6.846v10.317Zm3.837 0h-3.009v-11.283c0-.53-.828-.53-.828 0v.156h-.798v-.156c0-.53-.829-.53-.829 0v.156h-1.382v-10.317h6.846v21.444Z"
            fill="#fff"
            className="bubble-icon bubble-icon--edmonton"
          />
        </g>
        <g className="map__calgary">
          <ellipse
            cx="540"
            cy="633"
            rx="6"
            ry="1"
            fill="#000000"
            className="shadow shadow--calgary"
          />
          <path
            d="m540 632-6.062-10.5h12.124L540 632Z"
            fill="#9C0F00"
            className="triangle triangle--calgary"
          />
          <circle
            cx="539.5"
            cy="585.5"
            r="36.5"
            fill="#9C0F00"
            className="bubble bubble--calgary"
          />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M550.698 587.748h-.706v-21.849c0-.218-.185-.405-.4-.405h-7.674c-.245 0-.429.187-.429.405v1.808h-.799v-1.808c0-.218-.184-.405-.429-.405h-1.781v-1.278c0-.53-.829-.53-.829 0v1.278h-1.78c-.215 0-.399.187-.399.405v1.808h-1.228c-.245 0-.43.187-.43.405v3.491h-3.407c-.245 0-.43.187-.43.405v15.74h-.675c-.522 0-.522.842 0 .842h21.396c.521 0 .521-.842 0-.842Zm-2.886-2.369v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm0-2.774v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm-13.169 1.091v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm-1.627-5.548v-.561c0-.561-.828-.561-.828 0v.561c0 .53.828.53.828 0Zm0-2.805v-.53c0-.561-.828-.561-.828 0v.53c0 .561.828.561.828 0Zm14.796-1.091v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm-1.658 0v-.561c0-.561-.828-.561-.828 0v.561c0 .53.828.53.828 0Zm-1.626 0v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm3.284-5.579v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm0 2.774v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm-3.284 0v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm1.626-2.774v-.561c0-.53-.828-.53-.828 0v.561c0 .561.828.561.828 0Zm-1.626 0v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm3.284 8.353v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm-5.894 9.881c.215 0 .399-.187.399-.406v-7.792c0-.561-.828-.561-.828 0v7.792c0 .219.184.406.429.406Zm-5.617-11.564v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm-3.285 8.353v-.561c0-.53-.828-.53-.828 0v.561c0 .561.828.561.828 0Zm0-2.774v-.561c0-.53-.828-.53-.828 0v.561c0 .561.828.561.828 0Zm1.627-2.774v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm5.618 8.759c.245 0 .429-.187.429-.406v-7.792c0-.561-.828-.561-.828 0v7.792c0 .219.184.406.399.406Zm3.284 0c.246 0 .43-.187.43-.406v-7.792c0-.561-.829-.561-.829 0v7.792c0 .219.184.406.399.406Zm-7.244-3.211v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm11.511-3.896v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm-13.169 1.122v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm1.658 0v-.561c0-.53-.829-.53-.829 0v.561c0 .561.829.561.829 0Zm0-2.774v-.561c0-.561-.829-.561-.829 0v.561c0 .53.829.53.829 0Zm3.407-8.228h-3.284c-.522 0-.522.841 0 .841h3.284c.553 0 .553-.841 0-.841Zm6.446 1.527v-.53c0-.561-.828-.561-.828 0v.53c0 .561.828.561.828 0Zm-11.511 3.896v-.53c0-.561-.829-.561-.829 0v.53c0 .561.829.561.829 0Zm1.658-9.039h3.561v1.403h-3.561v-1.403Zm-1.382 21.444h-1.35v-1.402h1.35v1.402Zm2.732 0h-1.903v-1.808c0-.249-.184-.436-.399-.436h-2.21c-.215 0-.399.187-.399.436v1.808h-1.934v-15.304h6.845v15.304Zm.43-16.145h-3.438v-3.055h6.846v8.073h-3.009v-1.403h1.228c.553 0 .553-.841 0-.841h-1.228v-1.372h1.228c.553 0 .553-.841 0-.841h-1.228v-.156c0-.218-.184-.405-.399-.405Zm7.245 16.145h-6.846v-10.317h6.846v10.317Zm3.837 0h-3.009v-11.283c0-.53-.828-.53-.828 0v.156h-.798v-.156c0-.53-.829-.53-.829 0v.156h-1.382v-10.317h6.846v21.444Z"
            fill="#fff"
            className="bubble-icon bubble-icon--calgary"
          />

          <path
            d="M524.949 594.805v1.749c-1.078-.976-2.083-1.078-2.637-1.078-2.113 0-3.541 1.559-3.541 3.701 0 2.054 1.486 3.643 3.555 3.643 1.166 0 2.07-.598 2.623-1.122v1.763c-.976.583-1.996.728-2.666.728-1.763 0-2.871-.801-3.439-1.34-1.137-1.064-1.559-2.302-1.559-3.672 0-1.793.743-3.031 1.559-3.803 1.005-.948 2.171-1.268 3.512-1.268.888 0 1.748.16 2.593.699Zm6.064 3.774v-.714h1.428V604h-1.428v-.641c-.627.728-1.399.83-1.836.83-1.894 0-2.973-1.573-2.973-3.264 0-1.996 1.37-3.22 2.987-3.22.452 0 1.239.117 1.822.874Zm-1.647.408c-1.034 0-1.705.875-1.705 1.968 0 1.063.671 1.952 1.705 1.952.904 0 1.734-.656 1.734-1.938 0-1.341-.83-1.982-1.734-1.982Zm4.886-5.61h1.428V604h-1.428v-10.623Zm7.718 5.159v-.671h1.428v5.64c0 1.442-.16 2.477-1.005 3.191-.394.32-1.035.655-2.04.655-.714 0-1.428-.174-2.011-.757-.452-.452-.802-1.166-.904-1.909h1.385c.058.335.233.728.451.962.175.189.525.422 1.108.422.597 0 .947-.233 1.122-.408.466-.452.466-1.093.466-1.544v-.802c-.656.831-1.457.874-1.865.874-.787 0-1.443-.218-2.025-.83-.554-.583-.919-1.414-.919-2.434 0-1.122.423-1.894.904-2.375.612-.626 1.341-.845 2.084-.845.612 0 1.297.204 1.821.831Zm-1.646.451c-.394 0-.758.102-1.079.408-.364.335-.626.904-.626 1.56 0 .612.233 1.209.612 1.544.262.233.655.408 1.093.408.451 0 .845-.131 1.194-.495.423-.452.54-.977.54-1.443 0-.685-.219-1.195-.583-1.545-.35-.349-.743-.437-1.151-.437Zm9.373-.408v-.714h1.428V604h-1.428v-.641c-.626.728-1.399.83-1.836.83-1.894 0-2.973-1.573-2.973-3.264 0-1.996 1.37-3.22 2.988-3.22.451 0 1.238.117 1.821.874Zm-1.646.408c-1.035 0-1.705.875-1.705 1.968 0 1.063.67 1.952 1.705 1.952.903 0 1.734-.656 1.734-1.938 0-1.341-.831-1.982-1.734-1.982Zm4.885 5.013v-6.135h1.428v.554c.16-.189.393-.393.597-.51.277-.16.554-.204.875-.204.35 0 .728.058 1.122.291l-.583 1.297c-.321-.204-.583-.218-.729-.218-.306 0-.612.043-.889.335-.393.422-.393 1.005-.393 1.413V604h-1.428Zm4.842 3.337 2.259-4.299-2.623-5.173h1.719l1.749 3.585 1.777-3.585h1.603l-4.881 9.472h-1.603Z"
            fill="#fff"
            className="bubble-text bubble-text--calgary"
          />
        </g>
        {/* Filters */}
        <defs>
          <filter
            id="b"
            x="460.551"
            y="555.219"
            width="28.9414"
            height="28.9414"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_970_5586"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_970_5586"
              result="shape"
            />
          </filter>
          <filter
            id="c"
            x="465.104"
            y="559.771"
            width="19.8364"
            height="19.8359"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_970_5586"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_970_5586"
              result="shape"
            />
          </filter>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h1392.77v859.456H0z" />
          </clipPath>
        </defs>
      </g>

      <g transform="translate(425, 375)">
        <image
          preserveAspectRatio="none"
          className="map__clouds"
          href={mapCloudsImg}
        />
      </g>
    </svg>
  );
};
