import './Category.css';
import Input from '../../components/Input';

function Category({ handleChange }) {
  return (
    <div className='sidebar-container'>
      <h1 className='sidebar-title'>Category</h1>
      <div className='sidebar-categories'>
        <label className='sidebar-label-container'>
          <input
            onChange={handleChange}
            type='radio'
            name='category'
            value=''
          />
          <span className='checkmark'></span>All
        </label>

        <Input
          handleChange={handleChange}
          value='punk'
          title='Punk'
          name='category'
        />

        <Input
          handleChange={handleChange}
          value='fancy'
          title='Fancy'
          name='category'
        />

        <Input
          handleChange={handleChange}
          value='modern'
          title='Modern'
          name='category'
        />
      </div>
    </div>
  );
}

export default Category;