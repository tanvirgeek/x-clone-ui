import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-textGray mb-2">
        Icon
      </div>

      <span>tanvirgeek reposted</span>

      {/* POST CONTENT */}

      <div className="flex gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image path="general/avatar.png" alt="" w={100} h={100} />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">TanvirGeek</h1>
              <span className="text-textGray">@tanvirgeek</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            luctus, odio vitae ultricies eleifend, libero ipsum ultricies enim,
            vel molestie urna tellus sed augue. Suspendisse tempor, magna nec
            rutrum aliquam, magna justo imperdiet urna, at facilisis tortor erat
            eu orci.
          </p>
          <Image path="general/post.jpeg" alt="" w={600} h={600} />
        </div>
      </div>
    </div>
  );
};

export default Post;
