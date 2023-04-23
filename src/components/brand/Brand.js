import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <section className="flex my-10 justify-center items-center flex-wrap ">
      <Image
        className="max-w-[150px] min-w-[120px] m-4"
        src="/assets/google.png"
        alt="google"
        width={100}
        height={100}
      />
      <Image
        className="max-w-[150px] min-w-[120px] m-4"
        src="/assets/atlassian.png"
        alt="brand"
        width={100}
        height={100}
      />
      <Image
        className="max-w-[150px] min-w-[120px] m-4"
        src="/assets/slack.png"
        alt="brand"
        width={100}
        height={100}
      />
      <Image
        className="max-w-[150px] min-w-[120px] m-4"
        src="/assets/dropbox.png"
        alt="brand"
        width={100}
        height={100}
      />
      <Image
        className="max-w-[150px] min-w-[120px] m-4"
        src="/assets/shopify.png"
        alt="brand"
        width={100}
        height={100}
      />
    </section>
  );
};

export default Brand;
