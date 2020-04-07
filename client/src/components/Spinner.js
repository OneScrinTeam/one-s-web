import React from "react";

export default function Spinner() {
  return (
    <div>
      <div class="loader">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
