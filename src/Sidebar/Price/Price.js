import Input from '../../components/Input';
import './Price.css';

function Price({ handleChange }) {
  return (
    <div className='ml'>
      <h1 className="sidebar-title-price-title">Price</h1>
      <label className='sidebar-label-container'>
        <input
         type="radio" 
         onChange={handleChange} 
         value="" 
         name='newPrice' />
        <span className='checkmark'></span>All
      </label>
      <Input
      handleChange={handleChange}
      value={50}
      title='$0-50'
      name='newPrice'
      />
        <Input
      handleChange={handleChange}
      value={150}
      title='$100-150'
      name='newPrice'
      />
        <Input
      handleChange={handleChange}
      value={200}
      title='Over $150'
      name='newPrice'
      />
    </div>
  );
}

export default Price;
