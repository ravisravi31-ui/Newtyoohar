import React from "react";

export default function ThankYouOrder() {
  return (
    <div className="text-center py-20 bg-red-50">
      <h1 className="text-3xl font-bold text-red-700 mb-4">
        Thank You for Choosing Tyoohar Ghar!
      </h1>
      <p className="text-gray-700">
        Our team will contact you soon via WhatsApp to confirm payment and
        delivery details.
      </p>
      <a
        href="/"
        className="inline-block mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Back to Home
      </a>
    </div>
  );
}
