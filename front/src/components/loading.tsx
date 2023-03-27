import { useLottie } from "lottie-react";
import loadingAnimation from "../assets/animations/97952-loading-animation-blue.json";

const Loading = () => {
  const { View: Loading } = useLottie({
    animationData: loadingAnimation,
    loop: true,
  });

  return <div style={{ width: 40 }}>{Loading}</div>;
};

export default Loading;
