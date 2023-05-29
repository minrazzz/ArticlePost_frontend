import React from "react";

const Comment = () => {
  return (
    <>
      <div className="list py-3 px-3  rounded-md bg-slate-50 dark:bg-[#121e3a] mb-4">
        <div className="flex justify-start items-center pb-3 ">
          <h1 className="text-md font-semibold dark:text-white">Minraj</h1>
          <p className="text-md font-semibold mx-2 dark:text-white">-</p>
          <p className="text-xs font-semibold text-[#888888] italic dark:text-white">
            2023 Jan 7{" "}
          </p>
        </div>
        <div className="info">
          <p className="text-sm dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatibus, dolor saepe aspernatur incidunt est sequi
            aperiam ducimus perspiciatis deleniti totam debitis quod quibusdam
            earum nemo officia voluptatum! Nulla, laborum!
          </p>
        </div>
      </div>
    </>
  );
};

export default Comment;
