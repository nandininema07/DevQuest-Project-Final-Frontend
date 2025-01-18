import React from "react";
const ParallaxCard = () => {
  return (
    <div className="bg-slate-100 text-black mb-10 p-16 rounded-md">
      <div className="text-left">
        <p className="text-6xl font-semibold">Lorem ipsum dolor sit amet.</p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro?
        </p>
      </div>
      <div className="">
        <div className="border-2 bg-[#f7dcb9] text-black p-5 my-10 rounded-xl">
          <div className="flex items-center justify-evenly my-10">
            <p className="text-3xl font-bold">Lorem, ipsum dolor.</p>
            <div className="text-left space-y-3">
              <ul className="space-y-1">
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
              </ul>
              <button className="rounded-full bg-black border text-white border-black py-2 px-5 hover:bg-transparent hover:text-black transition-all duration-500">
                Try out Now
              </button>
            </div>
          </div>
          <p className="px-10 m-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            quibusdam nisi sit architecto placeat, iusto quam aspernatur ducimus
            totam tempora! At velit fuga excepturi mollitia provident atque
            nobis pariatur minus molestias, eos quasi recusandae, qui minima
            dignissimos nam distinctio id nostrum quis, dolores dicta
            perferendis. Quo perferendis qui ea unde?
          </p>
        </div>
        <div className="border-2 bg-[#b382db] text-black p-5 my-10 rounded-xl">
          <div className="flex items-center justify-evenly my-10">
            <p className="text-3xl font-bold">Lorem, ipsum dolor.</p>
            <div className="text-left space-y-3">
              <ul className="space-y-1">
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
              </ul>
              <button className="rounded-full bg-black border text-white border-black py-2 px-5 hover:bg-transparent hover:text-white hover:border-white transition-all duration-500">
                Try out Now
              </button>
            </div>
          </div>
          <p className="px-10 m-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            quibusdam nisi sit architecto placeat, iusto quam aspernatur ducimus
            totam tempora! At velit fuga excepturi mollitia provident atque
            nobis pariatur minus molestias, eos quasi recusandae, qui minima
            dignissimos nam distinctio id nostrum quis, dolores dicta
            perferendis. Quo perferendis qui ea unde?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxCard;
