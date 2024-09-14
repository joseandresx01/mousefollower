import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [encendido, setEncendido] = useState(false);
  const [posicion, setPosicion] = useState({x:0, y:0})

  useEffect(() => {
    const perseguir = (e) => {
      setPosicion({x:e.clientX, y:e.clientY});
    };
    if (encendido) {
      window.addEventListener("pointermove", perseguir);
    }


    return ()=>{
      window.removeEventListener("pointermove", perseguir)
    }
  }, [encendido]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Mouse Follower:</h1>
      <button
        onClick={() => setEncendido(!encendido)}
        className="bg-blue-500 px-5 rounded-md"
      >
        {encendido ? "Desactivar" : "Activar"}
      </button>

      <div style={{
        border:'2px solid black',
        position: 'absolute',
        background: 'red',
        borderRadius: 200,
        height: 200,
        width: 200,
        top: posicion.y -1,
        left: posicion.x-100,
        zIndex:-1
      }}></div>
    </div>
  );
};

export default App;