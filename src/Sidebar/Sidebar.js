 import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

function Sidebar({ handleChange, isOpen }) { // Add isOpen prop here
  return (
    <section className={`sidebar ${isOpen ? 'active' : ''}`}> {/* Add the active class here */}
      <div className='logo-container'>
        <h1 className='sidebar-title' style={{ fontSize: '500%' }}>🕶</h1>
      </div>

      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;