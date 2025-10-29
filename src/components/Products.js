import Card from './Card';

function Products({ results }) {
  return (
    <section className="card-container grid grid-cols-3 gap-6 p-6">
      {results.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          category={product.category}
          color={product.color}
          company={product.company}
        />
      ))}
    </section>
  );
}

export default Products;
