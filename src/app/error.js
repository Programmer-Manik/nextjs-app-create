"use client"
const ErrorPage = ({error, reset}) => {
   // console.log(error)
  return (
    <div>
      <h2 className="text-center text-4xl text-red-400">SomeThing Went wrong!!!</h2>
      <h1 className="text-center text-4xl text-red-400">{error.message}</h1>
      <button className="btn btn-outline btn-primary" onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;
