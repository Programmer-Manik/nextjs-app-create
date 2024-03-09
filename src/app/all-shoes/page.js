
export const metadata = {
   title:'all-shoes',
   description:'this  is all shoes '
}
const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes",{
   cache:'no-store'
  });
  const shoes = await res.json();
  //   console.log(shoes)
  return (
    <div>
      <h2 className="text-center text-4xl">Welcome to the AllShoesPage page</h2>
      <div className="grid grid-cols-3 gap-3 p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Bay Now</button>
                <button className="btn btn-outline btn-primary">details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
