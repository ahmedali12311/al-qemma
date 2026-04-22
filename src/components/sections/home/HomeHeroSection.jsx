export default function HomeHeroSection() {
  return (
    <section
      aria-hidden="true"
      className="relative min-h-screen overflow-hidden bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.16) 18%, rgba(255,255,255,0) 36%), linear-gradient(180deg, #76caff 0%, #a9e2ff 34%, #e8f7ff 72%, #ffffff 100%)",
      }}
    >
      <style>{`
        @keyframes home-cloud-drift-left {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(56px);
          }
        }

        @keyframes home-cloud-drift-right {
          0%, 100% {
            transform: translateX(0) scaleX(-1);
          }
          50% {
            transform: translateX(-56px) scaleX(-1);
          }
        }

      `}</style>
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-0 w-[520px] max-w-[52vw] select-none"
        src="/images/CLOUSD.png"
        style={{
          opacity: 0.2,
          animation: "home-cloud-drift-left 20s ease-in-out infinite",
        }}
      />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 w-[520px] max-w-[52vw] select-none"
        src="/images/CLOUSD.png"
        style={{
          opacity: 0.2,
          animation: "home-cloud-drift-right 20s ease-in-out infinite",
        }}
      />
    </section>
  );
}
