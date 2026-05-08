export default function Preloader() {
  return (
    <div className="preloader bg-white h-100 position-fixed w-100">
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        y="0px"
        x="0px"
        className="position-absolute start-50 top-50 translate-middle"
      >
        <g>
          <path
            className="anim-heart"
            d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z"
            strokeMiterlimit={10}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={3.5}
            stroke="#000000"
            fill="#C97D8A"
          />
          <path
            className="anim-heart-sm"
            d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z"
            strokeMiterlimit={10}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={3.5}
            stroke="#000000"
            fill="#722F37"
          />
        </g>
      </svg>
    </div>
  );
}
