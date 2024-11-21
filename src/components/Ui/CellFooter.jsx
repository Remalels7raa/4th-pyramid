 const CellFooter = ({content}) => {
  return (
    <div className="size-full rounded-lg center bg-zinc-200 dark:bg-zinc-900 text-xl">
      <img
        src={content}
        loading="lazy"
        alt="image"
        className="pointer-events-none h-full  w-full object-fit"
      />
    </div>
  );
};

export default CellFooter;