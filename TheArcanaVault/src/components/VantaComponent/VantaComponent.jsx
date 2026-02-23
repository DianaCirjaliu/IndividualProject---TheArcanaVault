import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const VantaComponent = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // 2. Inițializăm efectul doar dacă nu există deja
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE, // Pasăm instanța de Three.js
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          // Poți adăuga și alte proprietăți de styling aici
          backgroundColor: 0x111111,
        }),
      );
    }

    // 3. Curățăm efectul când componenta este demontată pentru a evita leak-urile de memorie
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default VantaComponent;
