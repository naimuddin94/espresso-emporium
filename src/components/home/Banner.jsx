const Banner = () => {
  return (
    <div className="bg-[url('/images/more/3.png')] bg-cover bg-center bg-no-repeat h-[calc(100vh-4rem)] flex justify-end items-center px-20">
      <div className="max-w-xl space-y-2">
        <h2 className="text-4xl font-rancho text-white">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p>
          It&rsquo;s coffee time - Sip & Savor - Relaxation in every sip! Get
          the nostalgia back!! Your companion of every moment!!! Enjoy the
          beautiful moments and make them memorable.
        </p>
        <h3 className="bg-[#E3B577] px-5 py-2 w-fit font-rancho font-semibold text-lg rounded text-slate-600">Learn More</h3>
      </div>
    </div>
  );
};

export default Banner;
