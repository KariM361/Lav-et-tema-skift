import style from "./Gallery.module.scss";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section className={style.gallery}>
      {images.map((src, index) => (
        <img
          key={src + index}
          src={src}
          alt="gallery"
          className={style.image}
        />
      ))}
    </section>
  );
}
