import React from "react";
import {
  MoreHorizontal,
  Heart,
  Send,
  MessageCircle,
  Repeat,
} from "react-feather";
const Feed = () => {
  return (
    <div className="container mx-auto max-w-[600px]">
      <div className="flex p-4">
        <img
          className="w-12 h-12 rounded-full object-cover "
          src="https://images.unsplash.com/profile-1647622860382-04ffa445028c?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt="img"
        />

        <div className="w-full px-2 py-4 border-b-[2px] border-[rgba(49,49,50,1)]">
          {/* Thread header */}
          <div className="flex gap-2 justify-between ">
            <strong>Elizabeth Navarrete</strong>
            <div className="flex gap-2 justify-between">
              <p className="text-[#6c6969]">7hrs ago</p>
              <MoreHorizontal />
            </div>
          </div>

          {/* Thread Body */}
          <div className="py-4">
            <span>
              Social Media Manager 👩🏻‍💻 and Photographer. Currently living in
              Managua, Nicaragua.
            </span>
          </div>

          {/* Thread Icons */}
          <div className="flex gap-4 py-3">
            <Heart size={22} />
            <Repeat size={22} />
            <MessageCircle size={22} />
            <Send size={22} />
          </div>

          {/* Thread Replies & Likes */}
          <div className="flex gap-4">
            <p className="text-[#6c6969]">19 Replies</p>
            <p className="text-[#6c6969] font-bold">.</p>
            <p className="text-[#6c6969]">21 Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
