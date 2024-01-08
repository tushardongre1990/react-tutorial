const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀 .</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>You got everything. Ready to go !!</em>
      ) : (
        <em>
          💼You have {numItems} items in your list. And you have already packed
          ({percent}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
