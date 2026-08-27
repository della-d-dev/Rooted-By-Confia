"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Rooted By Confia?",
    answer:
      "Rooted By Confia is a premium herbal haircare brand focused on nourishing healthy hair with carefully selected natural ingredients.",
  },
  {
    question: "Are your products suitable for all hair types?",
    answer:
      "Yes. Our products are formulated for natural, relaxed, braided, and transitioning hair.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery timelines vary by location, but most orders arrive within 2–5 business days.",
  },
  {
    question: "How often should I use the products?",
    answer:
      "For best results, follow the usage directions provided with each product and maintain a consistent haircare routine.",
  },
];



export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">

      <div className="section-heading">
        <p className="section-tag">FAQ</p>

        <h2>Frequently Asked Questions</h2>

        <p className="section-description">
          Everything you need to know before beginning your healthy hair journey.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >

              {faq.question}

              <span>
                {openIndex === index ? "−" : "+"}
              </span>

            </button>

            {openIndex === index && (

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}