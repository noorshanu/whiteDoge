function Hero() {
  return (
    <section className=" pt-4  pb-[4rem]">
      <div className="container-wrapper">
        <h1 className=" font-groot-one text-2xl text-center sm:text-3xl font-semibold my-4 max-w-full sm:max-w-3xl mx-auto text-[#ffffff] border-2 border-[#f45a7c] rounded-2xl bg-[#029586cf] sm:text-[#ffffff] ">
        GABE laughter meets profits, and the bark leads to the moon!
        </h1>
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <div>
                <img
                  src="images/hore3.png"
                  alt=""
                  className=" mx-auto floating hidden sm:block"
                />
              </div>
            </div>
            <div className=" w-full ">
              <div>
                <img src="images/hero.png" alt="" className=" mx-auto " />
              </div>
            </div>

            <div className=" w-full hidden sm:block">
              <div>
                <img
                  src="images/hero2.png"
                  alt=""
                  className=" mx-auto floating h-[280px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" py-2">
          <a
            href="#"
            target="_blank"
            className="my-2 font-groot-one flex justify-center text-xs  text-white  border-[#f45a7c] sm:text-lg font-semibold border-2  rounded-2xl bg-[#029586cf] max-w-xl py-1 mx-auto"
          >
            {" "}
            Contract : 5f65PYwzhSEHfDBqMdqJoQnHyQVMnWQuiVzG7WaX4gu9
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://t.me/gabe_solana"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#ffffffcf] shadow-lg shadow-black/40 text-black  font-bold  border-[#f45a7c] border-2"
          >
            join telegram
          </a>

          <a
            href="#"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#ffffffcf] shadow-lg shadow-black/40 text-black  font-bold  border-[#f45a7c] border-2"
          >
            DEXTOOLS
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
