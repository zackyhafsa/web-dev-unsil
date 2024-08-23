import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-text-header animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-text-header animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-text-header animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loading;
