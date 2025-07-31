"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottieBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="w-full h-full opacity-15">
        <DotLottieReact
          src="https://lottie.host/3f695a0a-8dbd-4dcf-9d81-ddfa7bdbdc79/go5i8dAqAL.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
