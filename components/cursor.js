const Cursor = (props) => {
  return (
    <svg
      width="24"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M4.57997 4.63765L8.34813 25.3492L13.3447 16.8205L23.3886 13.6641L4.57997 4.63765Z"
          fill="currentcolor"
        />
        <path
          d="M4.57997 4.63765L8.34813 25.3492L13.3447 16.8205L23.3886 13.6641L4.57997 4.63765Z"
          stroke="#EEEEEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.912587"
          y="0.762772"
          width="28.8343"
          height="31.0031"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Cursor
