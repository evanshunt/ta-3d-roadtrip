import React from "react";

const Arrow = ({ active, dir }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 29"
      preserveAspectRatio="none"
      className={`arrow arrow--${dir} ${
        active ? "arrow arrow--active" : "arrow"
      }`}
    >
      <circle cx="14.4998" cy="14.5" r="14.5" fill="#9C0F00" />
      <path
        d="M9.02605 15.3454h9.85215c.0291.0002.0575.0087.0814.0243.0239.0156.0421.0375.0524.063.0103.0254.0121.0532.0051.0796-.0069.0264-.0222.0502-.0439.0684l-4.973 4.0828c-.1564.1376-.2494.3264-.2594.5266-.0101.2003.0635.3964.2054.547.1418.1506.3408.2439.5549.2603.2142.0164.4268-.0454.5931-.1724l6.4377-5.2857c.147-.121.2648-.2698.3455-.4365.0806-.1667.1224-.3476.1224-.5305 0-.1829-.0418-.3637-.1224-.5305-.0807-.1667-.1985-.3155-.3455-.4365l-6.4366-5.28462c-.1664-.1254-.3783-.18595-.5914-.16899-.2131.01696-.411.11011-.5522.25999-.1413.14988-.215.3449-.2057.54428.0093.19939.1007.38773.2553.52565l4.973 4.08289c.0217.0181.0371.042.044.0684.0069.0264.0051.0541-.0051.0796-.0103.0254-.0286.0474-.0525.063-.0239.0155-.0522.024-.0814.0243H9.02606c-.21604.0053-.42132.0891-.57211.2336-.15078.1444-.23517.3381-.23517.5397 0 .2017.08439.3953.23517.5398.15079.1444.35607.2282.5721.2335v-.001Z"
        fill="#fff"
      />
    </svg>
  );
};

export default Arrow;