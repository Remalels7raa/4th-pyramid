import { LazyLoadImage } from 'react-lazy-load-image-component';
 const CellFooter = ({content}) => {
  return (
    <div className="size-full rounded-lg center bg-zinc-200 dark:bg-zinc-900 text-xl">
      <img
        src={content}
        loading="lazy"
        alt="image"
        className="pointer-events-none h-full  w-full object-fit"
      />
      <LazyLoadImage
        src={content}
        loading="lazy"
        alt="image"
        className="pointer-events-none h-full  w-full object-fit"
        onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")}
      />
    </div>
  );
};

export default CellFooter;