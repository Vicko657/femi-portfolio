import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div
      className="accordion accordion-flush portfolio-bg d-flex flex-row row"
      id="accordionFlushExample"
    >
      <div class="accordion-item portfolio-jbl">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <h2>Social Campaign JBL</h2>
            <p>Client: JBL</p>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body h-100">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>

      <div class="accordion-item portfolio-boarders">
        <h2 class="accordion-header ">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <h2>BBC Boarders Social Campaign</h2>
            <p>Client: BBC</p>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body h-100">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>

      <div class="accordion-item portfolio-plt">
        <h2 class="accordion-header ">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <h2>Pink Courtroom</h2>
            <p>Client: PLT</p>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body h-100">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>

      <div class="accordion-item portfolio-minor">
        <h2 class="accordion-header ">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            <h2>Minor Issues</h2>
            <p>Client: Channel 4.0</p>
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body h-100">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>

      <div class="accordion-item portfolio-worst">
        <h2 class="accordion-header ">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            <h2>Harry Pinero’s Worst In Class</h2>
            <p>Client: Channel 4.0</p>
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body h-100">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
    </div>
  );
}
