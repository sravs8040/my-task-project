const CardComponent = ({ name, status, removeCard }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{status}</p>
      <button
        onClick={removeCard}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CardComponent;
