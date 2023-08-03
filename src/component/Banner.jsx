import bannerimg from '../assets/banner-women.png'

const Banner = () => {
  return (
    <div className="bg-[#FBF0E4] h-fit md:h-[300px] flex flex-col md:flex-row justify-center md:justify-between  md:px-40 items-center overflow-hidden">
      <div className=" md:w-[50%] px-5 md:px-0 pt-5">
        <h1 className="text-[#003D2A] text-xl md:text-4xl font-bold mb-5">Grab Upto 50% Off On Selected Headphone</h1>
        <div className="bg-[#003D2A] w-fit text-white rounded-2xl  px-5 py-1 cursor-pointer">Buy Now</div>
      </div>
      <div className="md:w-[50%] flex justify-center md:justify-end">
        <img src={bannerimg} alt="women-with-headphone" className='w-[60%]' />
      </div>
    </div>
  );
};

export default Banner;
