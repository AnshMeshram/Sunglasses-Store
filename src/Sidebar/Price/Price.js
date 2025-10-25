import Input from '../../components/Input';
import './Price.css';

function Price({ handleChange }) {
  const priceRanges = [
    { value: "all", title: "All", min: 0, max: Infinity },
    { value: "0-50", title: "$0-50", min: 0, max: 50 },
    { value: "100-150", title: "$100-150", min: 100, max: 150 },
    { value: "150+", title: "Over $150", min: 150, max: Infinity }
  ];

  return (
    <div className='ml'>
      <h1 className="sidebar-title-price-title">Price</h1>
        {priceRanges.map((range) => (
          <Input
            key={range.value}
            handleChange={handleChange}
            value={range.value}
            title={range.title}
            name='newPrice'
          />
        ))}
    </div>
  );
}

export default Price;
