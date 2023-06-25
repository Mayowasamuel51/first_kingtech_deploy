import React from "react";
import Navabr from "./Navabr";

const Broadcast = () => {
  return (
    <>
     <Navabr/>
      <div className="w-full relative top-[4em] p-8 mb-10">
        <h2 className="text-2xl text-orange-500 px-8">Broadcast a Message</h2>
      </div>

      <div class="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans mx-8">
        <div class="row sm:flex">
          <div class="col sm:w-1/2">
            <div class="box border rounded flex flex-col shadow bg-white">
              <div class="box__title bg-slate-400 px-3 py-2 border-b">
                <h3 class="text-white text-xl font-medium">Write a Message</h3>
              </div>
              <textarea
                placeholder="..."
                class="text-grey-darkest flex-1 p-2 m-1 bg-transparent focus:outline-none"
                name="tt"
                rows={10}
                cols={30}
              >
              </textarea>
            </div>
            <div className="p-2 mt-2 mx-auto">
            <button className="uppercase text-white bg-orange-500 px-8 py-3">Send</button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Broadcast;
