"use client";

import Image from "next/image";

export default function TestimonialModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div className="modal-container active" data-modal-container>
      <div className="overlay active" data-overlay onClick={onClose}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose} data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src={data?.img || "/placeholder.svg?height=80&width=80"}
              alt={data?.title || "Testimonial"}
              width={80}
              height={100}
              data-modal-img
            />
          </figure>

          <Image src="/placeholder.svg?height=30&width=30" alt="quote icon" width={30} height={30} />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {data?.title || "No Title"}
          </h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div data-modal-text>
            <p>{data?.text || "No testimonial available."}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
