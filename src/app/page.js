export const metadata = {
  title: "home page",
  description:'this is home page '
};
const Page = async () => {
  const res = await fetch("http://localhost:5000/shoes",{
    // cache:"force-cache"
    next:{
      revalidate:5,
    },
  });
  const shoes = await res.json();
  // console.log(data)
  return (
    <div>
      <h2 className="text-center text-4xl">Welcome to the Page page</h2>
      <div className=" flex justify-around items-center p-5">
        {shoes.slice(0 , 3).map((data) => (
          <div 
          key={data.id}
          className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
               {data.title}
                <div className="badge badge-secondary">{data.price}</div>
              </h2>
              <p>{data.description}</p>
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

export default Page;
