import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {

  const navigate = useNavigate();

  // Detect small screens (mobile/tablet)
  const isMobile = window.innerWidth < 1024; // adjust breakpoint if needed

  useEffect(() => {
    // If desktop, skip splash entirely
    if (!isMobile) {
      navigate("/home");
      return;
    }

    // Show splash for 3.5s on mobile
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, isMobile]);

  if (!isMobile) return null; // don't render splash on desktop

  return (
    <div className="splash-container flex items-center justify-center h-screen bg-black">
      <div className="heart">
        <img
          className="main-logo"
          src="/images/logo.png"
          alt="logo de fundacion mgas"
        />
      </div>
    </div>
  );
}
