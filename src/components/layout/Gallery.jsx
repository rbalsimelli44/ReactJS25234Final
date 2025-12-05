import { useState, useRef } from "react";
import { Titulo } from "../utils/Titulos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import "../../styles/gallery.css";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const imagePosition = useRef({ x: 0, y: 0 });

  const images = [
    { src: "https://picsum.photos/1200/800?random=1", caption: "Producto en Oferta" },
    { src: "https://picsum.photos/1200/800?random=2", caption: "Calidad Garantizada" },
    { src: "https://picsum.photos/1200/800?random=3", caption: "Envíos a Todo el País" },
    { src: "https://picsum.photos/1200/800?random=4", caption: "Nuevas Tendencias" },
    { src: "https://picsum.photos/1200/800?random=5", caption: "Compra Segura" }
  ];

  const intervalSpeed = 3500;

  /** --- LIGHTBOX HANDLERS --- **/

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(1);
    imagePosition.current = { x: 0, y: 0 };
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    resetZoom();
  };

  const resetZoom = () => {
    setZoom(1);
    imagePosition.current = { x: 0, y: 0 };
  };

  /** --- ZOOM CON SCROLL --- **/
  const handleWheel = (e) => {
    const zoomDelta = e.deltaY * -0.0015;
    setZoom((prev) => Math.min(Math.max(prev + zoomDelta, 1), 4)); // zoom 1x a 4x
  };

  /** --- PAN (ARRASTRAR CON EL MOUSE) --- **/
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsPanning(true);
      panStart.current = { x: e.clientX - imagePosition.current.x, y: e.clientY - imagePosition.current.y };
    }
  };

  const handleMouseMove = (e) => {
    if (isPanning) {
      imagePosition.current = {
        x: e.clientX - panStart.current.x,
        y: e.clientY - panStart.current.y,
      };
    }
  };

  const handleMouseUp = () => setIsPanning(false);

  return (
    <section className="container py-4">

      <div className="text-center mb-4">
        <Titulo texto="OFERTA HOY 35% DESCUENTO" />
      </div>

      {/* CAROUSEL PRINCIPAL */}
      <div
        id="galleryCarousel"
        className="carousel slide carousel-fade shadow-lg rounded overflow-hidden"
        data-bs-ride="carousel"
        data-bs-interval={intervalSpeed}
        data-bs-wrap="true"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={img.src}
                className="d-block w-100"
                style={{ width: "90%", objectFit: "cover", height: "450px", cursor: "zoom-in" }}
                onClick={() => setLightboxIndex(index)}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 p-3 rounded">{img.caption}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ======== LIGHTBOX FULLSCREEN ======== */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Cerrar */}
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>

          {/* Anterior */}
          <button className="lightbox-arrow left" onClick={prevImage}>
            ❮
          </button>

          {/* Siguiente */}
          <button className="lightbox-arrow right" onClick={nextImage}>
            ❯
          </button>

          {/* Imagen con zoom */}
          <img
            src={images[lightboxIndex].src}
            className="lightbox-image"
            style={{
              // transform: `scale(${zoom}) translate(${imagePosition.current.x / zoom}px, ${imagePosition.current.y / zoom}px)`,
              cursor: zoom > 1 ? "grab" : "zoom-in",
            }}
          />
        </div>
      )}
    </section>
  );
};
