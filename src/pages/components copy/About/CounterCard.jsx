const CounterCard = ({ count, Icon, description }) => {
  return (
    <div className="relative bg-cyan-600 text-white p-6 rounded-xl shadow-lg shadow-zinc-600 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-200 hover:text-cyan-600 group">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:bg-opacity-20 group-hover:bg-cyan-600">
          <Icon className="w-10 h-10 text-white transition-colors duration-500 group-hover:text-cyan-600" />
        </div>
        <h3 className="text-4xl hover:text-cyan-600 Amiri-font font-bold transition-transform duration-500 group-hover:scale-110">
          {count}
        </h3>
        <p className="text-xl Amiri-font font-bold  transition-colors duration-100 group-hover:text-cyan-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CounterCard;
