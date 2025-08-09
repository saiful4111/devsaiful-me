import Spline from "@splinetool/react-spline/next";

export default function SplineBg() {
  return (
    <main className="fixed bottom-0 left-0 w-full h-full -z-40 pointer-events-none overflow-hidden">
      <div className="w-full h-full scale-165 origin-center">
        <Spline
          scene="https://prod.spline.design/KrPwJzCfoWHUDryU/scene.splinecode"
          // style={{ width: "100%", height: "100%" }}
        />
      </div>
    </main>
  );
}
