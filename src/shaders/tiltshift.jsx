import React, { useEffect, useState } from "react";
import { Uniform } from "three";
import { BlendFunction, Effect, EffectAttribute } from "postprocessing";
import { wrapEffect } from "./util.tsx";
import { EffectComposer } from "@react-three/postprocessing";
import { editable as e } from "@theatre/r3f";
import { types } from "@theatre/core";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const TiltShiftShader = {
  fragmentShader: `

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int sampleCount;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance

        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 25.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        float f_samples = float(sampleCount);
        float half_samples = f_samples / 2.0;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            
            if (i >= sampleCount) { break; } // return early if over sample count

            float f_i = float(i);
            float s_i = -half_samples + f_i;

            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);

            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);

            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;

            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `,
};

export class TiltShiftEffect extends Effect {
  constructor({
    blendFunction = BlendFunction.Normal,
    blur = 1.0, // [0, 1], can go beyond 1 for extra
    taper = 0.5, // [0, 1], can go beyond 1 for extra
    start = [0.66, 0.0], // [0,1] percentage x,y of screenspace
    end = [0.0, 0.33], // [0,1] percentage x,y of screenspace
    sampleCount = 30.0, // number of blur samples
    direction = [1, 1], // direction of blur
  } = {}) {
    super("TiltShiftEffect", TiltShiftShader.fragmentShader, {
      blendFunction,
      attributes: EffectAttribute.CONVOLUTION,
      uniforms: new Map([
        ["blur", new Uniform(blur)],
        ["taper", new Uniform(taper)],
        ["start", new Uniform(start)],
        ["end", new Uniform(end)],
        ["sampleCount", new Uniform(sampleCount)],
        ["direction", new Uniform(direction)],
      ]),
    });
  }
}

let newBlur = 0.5,
  newTaper = 0.525,
  newStart = [0.0, 0.4],
  newEnd = [0.47, 0.45];

const TiltShift = wrapEffect(TiltShiftEffect);

function TiltShiftEffects() {
  const effectRef = React.createRef();
  const sheet = useCurrentSheet();
  // const [blur, setBlur] = React.useState(0.5);
  // const [direction, setDirection] = React.useState([0.96, 0.03]);
  // const [taper, setTaper] = React.useState(0.525);
  // const [start, setStart] = React.useState([0.0, 0.4]);
  // const [end, setEnd] = React.useState([0.47, 0.45]);

  const [
    // The Theatre.js object that represents our THREE.js object. It'll be initially `null`.
    theatreObject,
    setTheatreObject,
  ] =
    // Let's use `useState()` so our `useEffect()` will re-run when `theatreObject` changes
    useState(null);

  useFrame(({ clock }) => {
    theatreObject.onValuesChange((newValues) => {
      newBlur = newValues.blur;
      newTaper = newValues.taper;
      newStart = [newValues.start.x, newValues.start.y];
      newEnd = [newValues.end.x, newValues.end.y];
      // setDirection([newValues.direction.x, newValues.direction.y]);
      // console.log("i anm changing?");
      //   // Apply the new offset to our THREE.js object
      //   setTaper(newValues.taper);
      //   setStart([newValues.start.x, newValues.start.y]);
      //   setEnd([newValues.end.x, newValues.end.y]);
    });
  });

  // const blendFunction = BlendFunction.Normal,
  // let blur = 0.4, // [0, 1], can go beyond 1 for extra
  // taper = 0.45, // [0, 1], can go beyond 1 for extra
  // start = [0.26, 0.53],
  // end = [1, 0.54],
  // let direction = [0.96, 0.03]; // direction of blur
  //   start = [0.02, 0.82], // [0,1] percentage x,y of screenspace
  //   end = [0.62, 0.63], // [0,1] percentage x,y of screenspace
  //   sampleCount = 30.0, // number of blur samples
  // direction = [0.37, 0.03]; // direction of blur
  const { blur } = useControls({
    blur: {
      value: 1,
      min: 0.0,
      max: 2.0,
      label: "Blur",
    },
  });

  const { taper } = useControls({
    taper: {
      value: 0.5,
      min: 0.0,
      max: 1.0,
      label: "Taper",
    },
  });

  const { start } = useControls({
    start: {
      value: {
        x: 0.0,
        y: 0.0,
      },
      step: 0.01,
      min: 0.0,
      max: 1.0,
      joystick: "invertY",
      label: "Start Point",
    },
  });

  const { end } = useControls({
    end: {
      value: {
        x: 0.71,
        y: 0.66,
      },
      step: 0.01,
      min: 0.0,
      max: 1.0,
      joystick: "invertY",
      label: "End Point",
    },
  });

  // const { sampleCount } = useControls({
  //   sampleCount: {
  //     value: 40,
  //     min: 3.0,
  //     max: 100.0,
  //     label: "Samples",
  //   },
  // });

  const { direction } = useControls({
    direction: {
      value: {
        x: 1.0,
        y: 0.07,
      },
      step: 0.01,
      min: -1.0,
      max: 1.0,
      joystick: "invertY",
      label: "Direction",
    },
  });

  // attempt to animate the tilt shift
  // useEffect(() => {
  //   const test = sheet.object("Tilt Shift", {
  //     blur: types.number(effectRef.current.uniforms.get("blur").value, {
  //       range: [0, 2],
  //     }),
  //   });
  //   onChange(test.props.blur, (value) => {
  //     effectRef.current.uniforms.set("blur", value);

  //     console.log(effectRef.current.uniforms);
  //   });
  // }, []);

  // const farValues = {
  //   blur: 0.34,
  //   taper: 0.7,
  //   start: [0.0, 0.0],
  //   end: [0.45, 0.45],
  //   direction: [0.37, 0.03],
  // };

  // const closeValues = {
  //   blur: 0.6,
  //   taper: 0.48,
  //   start: [0.52, 0.48],
  //   end: [0.79, 0.7],
  //   direction: [0.07, -0.02],
  // };

  // const vals = useControls({
  //   distance: {
  //     value: farValues,
  //     options: {
  //       far: farValues,
  //       close: closeValues,
  //     },
  //   },
  // });

  // let test = 2;

  return (
    <e.group
      theatreKey="Tilt Shift"
      objRef={setTheatreObject}
      additionalProps={{
        blur: types.number(0.5, { range: [0, 1.0] }),
        taper: types.number(0.525, { range: [0, 1.0] }),
        start: types.compound({
          x: types.number(0.0, { range: [0, 1.0] }),
          y: types.number(0.4, { range: [0, 1.0] }),
        }),
        end: types.compound({
          x: types.number(0.47, { range: [0, 1.0] }),
          y: types.number(0.45, { range: [0, 1.0] }),
        }),
        direction: types.compound({
          x: types.number(0.96, { range: [0, 1.0] }),
          y: types.number(0.03, { range: [0, 1.0] }),
        }),
      }}
    >
      <EffectComposer>
        <TiltShift
          theatreKey={"TiltShift"}
          ref={effectRef}
          // blur={blur}
          // blur={0.34}
          blur={newBlur}
          // taper={taper}
          // // taper={0.7}
          taper={newTaper}
          // start={start}
          // // start={[0.0, 0.0]}
          start={newStart}
          end={newEnd}
          // // end={[0.45, 0.45]}
          // end={}
          // sampleCount={sampleCount}
          sampleCount={25.0}
          direction={direction}
          // direction={[0.96, 0.03]}
        />
      </EffectComposer>
    </e.group>
  );
}

export default TiltShiftEffects;
