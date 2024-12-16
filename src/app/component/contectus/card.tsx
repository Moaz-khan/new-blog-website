import { ButtonOutline } from "@/components/button";
import React from "react";

function Card() {
  return (
    <div className="card bg-base-100 image-full w-full max-w-sm mx-auto shadow-xl rounded-lg p-4 sm:p-6 md:p-8">
      <div>
        <div className="card-body">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md bg-transparent text-gray-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md bg-transparent text-gray-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-200">
                Comments
              </label>
              <textarea
                id="comments"
                placeholder="Enter your comments..."
                className="w-full p-2 mt-1 border border-gray-300 rounded-md bg-transparent text-gray-200 resize-none h-20 sm:h-24"
              />
            </div>
          </form>
          <div className="card-actions justify-end mt-4">
            <ButtonOutline text="Submit" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
