import { colors } from "@/styles/variables";
import { BeproProps } from "../types/brands-types";

export function Bepro(props: BeproProps) {
  const { symbol = colors.blue500, lettering = colors.white } = props;

  return (
    <svg
      fill="none"
      viewBox="0 0 227 70"
      aria-labelledby="beproTitle"
      role="img"
    >
      <title id="beproTitle">Bepro</title>
      <path
        fill={symbol}
        fillRule="evenodd"
        d="M35.331 0C54.86 0 70.657 15.655 70.657 34.999 70.657 54.34 54.859 70 35.33 70S.001 54.347.001 34.998a34.085 34.085 0 013.337-14.824c.178 1.172.507 2.316.98 3.402a15.03 15.03 0 003.287 4.86 15.494 15.494 0 004.906 3.258c1.83.745 3.79 1.125 5.766 1.118h3.828v-7.437h-3.828a6.77 6.77 0 01-2.843-.577 7.599 7.599 0 01-4.122-4.036 7.535 7.535 0 01-.576-2.773v-.098a6.527 6.527 0 01.576-2.767 7.497 7.497 0 011.62-2.433 6.879 6.879 0 012.45-1.603 8.021 8.021 0 012.849-.577 6.965 6.965 0 012.842.577c.915.37 1.75.914 2.456 1.603a6.92 6.92 0 011.62 2.433c.364.896.559 1.852.577 2.82v22.358a14.797 14.797 0 001.153 5.69 15.049 15.049 0 003.292 4.86 15.367 15.367 0 004.866 3.24 15.284 15.284 0 0011.48 0 15.652 15.652 0 004.906-3.257 15.267 15.267 0 003.286-4.86 14.617 14.617 0 001.153-4.912h.046V39.8a14.298 14.298 0 00-1.153-5.189 15.567 15.567 0 00-3.292-4.86 15.364 15.364 0 00-4.906-3.258 14.988 14.988 0 00-5.737-1.118h-3.822v7.437h3.828a6.768 6.768 0 012.842.577 7.03 7.03 0 012.456 1.655 7.687 7.687 0 011.667 2.427c.365.88.561 1.82.576 2.773v.098a6.527 6.527 0 01-.576 2.768 7.434 7.434 0 01-1.62 2.433 6.879 6.879 0 01-2.45 1.602 8.02 8.02 0 01-2.85.577 7.027 7.027 0 01-2.842-.577 7.582 7.582 0 01-2.456-1.602 6.85 6.85 0 01-1.62-2.433 7.869 7.869 0 01-.576-2.82V17.937a14.794 14.794 0 00-1.125-5.69 15.111 15.111 0 00-3.292-4.86 15.365 15.365 0 00-4.906-3.258 14.915 14.915 0 00-3.286-.923A33.642 33.642 0 0135.33.001z"
        clipRule="evenodd"
      />
      <path
        fill={lettering}
        d="M157.353 44.528c3.972 0 7.212-2.577 7.212-7.778 0-4.912-3.459-7.731-7.8-7.731a8.725 8.725 0 00-5.005 1.412v11.554a7.858 7.858 0 005.593 2.543zM144.744 25.57c2.502-1.557 7.166-3.016 11.675-3.016 9.669 0 15.705 5.737 15.705 14.68 0 8.02-4.906 13.837-13.053 13.837a11.855 11.855 0 01-7.259-2.381v13.837h-7.068V25.57zM96.071 29.07c3.972 0 7.213 2.578 7.213 7.778 0 4.907-3.46 7.726-7.801 7.726a8.717 8.717 0 01-5.005-1.407v-11.53a7.69 7.69 0 015.593-2.566zm-12.61 19.027c2.503 1.556 7.162 3.015 11.676 3.015 9.669 0 15.705-5.765 15.705-14.679 0-8.02-4.906-13.837-13.053-13.837a11.883 11.883 0 00-7.264 2.381V13.123h-7.011v34.95l-.052.024zM127.966 28.338c4.036 0 6.342 2.578 6.279 5.933h-13.474c.714-3.552 2.975-5.933 7.195-5.933zm8.533 14.8a13.117 13.117 0 01-7.311 2.14c-4.312 0-7.605-2.232-8.239-6.343h19.868c.335-1.218.485-2.479.444-3.742 0-7.633-5.938-12.643-13.001-12.643-9.029 0-14.523 6.37-14.523 14.293 0 8.607 5.938 14.292 14.765 14.292 3.828 0 7.755-1.066 10.499-3.401l-2.502-4.596zM176.12 50.409h7.016V30.137h11.675v-6.953h-5.189a6.805 6.805 0 00-6.474 4.814v-4.86h-7.028v27.27z"
      />
      <path
        fill={lettering}
        fillRule="evenodd"
        d="M204.307 36.796c0 4.474 2.883 7.778 7.409 7.778s7.409-3.304 7.409-7.778-2.883-7.777-7.409-7.777-7.409 3.355-7.409 7.777zm-7.495 0c0 8.17 5.841 14.293 14.99 14.293 9.15 0 14.991-6.123 14.991-14.293 0-8.17-5.835-14.292-14.991-14.292-9.155 0-15.002 6.128-15.002 14.292h.012z"
        clipRule="evenodd"
      />
    </svg>
  );
}
