import React, { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import CanvasDraw from "react-canvas-draw-v2";

const Notepad = () => {
  const canvasRef = useRef(null);
  const [brushColor, setBrushColor] = useState("#444");
  const [brushRadius, setBrushRadius] = useState(2);

  const handleEraseAll = () => {
    if (canvasRef.current) {
      canvasRef.current.eraseAll();
    }
  };

  const handleUndo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();
    }
  };

  const handleResetView = () => {
    if (canvasRef.current) {
      canvasRef.current.resetView();
    }
  };

  return (
    <Layout>
      <div className="pb-20 w-full flex flex-col items-center">
        <div className="px-10 w-full flex justify-between mb-2 space-x-2">
          <h1 className="text-4xl font-bold">Notepad</h1>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-2">
              <button
                onClick={handleUndo}
                className="bg-success-dark text-white h-10 py-2 px-4 rounded transition-transform duration-200 transform hover:scale-105 active:scale-95"
              >
                Undo
              </button>
              <button
                onClick={handleEraseAll}
                className="bg-error text-white h-10 py-2 px-4 rounded transition-transform duration-200 transform hover:scale-105 active:scale-95"
              >
                Erase All
              </button>
              <button
                onClick={handleResetView}
                className="bg-info-dark text-white h-10 py-2 px-4 rounded transition-transform duration-200 transform hover:scale-105 active:scale-95"
              >
                Reset View
              </button>
            </div>
            <div className="flex gap-x-2">
              <label className="flex items-center space-x-2">
                <span>Brush Color:</span>
                <input
                  type="color"
                  value={brushColor}
                  onChange={(e) => setBrushColor(e.target.value)}
                  className="border rounded"
                />
              </label>
              <label className="flex items-center space-x-2">
                <span>Brush Radius:</span>
                <input
                  type="number"
                  value={brushRadius}
                  onChange={(e) => setBrushRadius(parseInt(e.target.value))}
                  className="border rounded w-16"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex mb-4 space-x-2"></div>
        <div className="border-2 border-card rounded-lg overflow-hidden">
          <CanvasDraw
            ref={canvasRef}
            canvasWidth={1100}
            canvasHeight={600}
            brushRadius={brushRadius}
            brushColor={brushColor}
            lazyRadius={0}
            catenaryColor="#0a0302"
            gridColor="rgba(150,150,150,0.17)"
            hideGrid={false}
            disabled={false}
            imgSrc=""
            saveData={null}
            immediateLoading={false}
            hideInterface={false}
            gridSizeX={25}
            gridSizeY={25}
            gridLineWidth={0.5}
            hideGridX={false}
            hideGridY={false}
            enablePanAndZoom={false}
            mouseZoomFactor={0.01}
            zoomExtents={{ min: 0.33, max: 3 }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Notepad;
