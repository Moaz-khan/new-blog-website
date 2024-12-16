import { ButtonOutline } from "@/components/button";
import React from "react";

function Card() {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <div>
        <div className="card-body">
          <form>
            <h2>Name</h2>
            <input type="text" name="Name" id="Name" className="bg-transparent" />
            <h2>Email</h2>
            <input type="email" name="email" id="email" className="bg-transparent after:fill-transparent" />
            <div className="flex flex-col space-y-1.5">
              <h2>Comments</h2>
              <textarea
                id="comments"
                placeholder="Enter your comments..."
                className="resize-none border p-2 rounded-md bg-transparent"
              />
            </div>
          </form>
          <div className="card-actions justify-end mt-3">
            <ButtonOutline text="Submit" href="#"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
