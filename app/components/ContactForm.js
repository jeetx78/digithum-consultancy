"use client";

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    const scriptId = "hubspot-forms-script";

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");

    script.id = scriptId;
    script.src =
      "https://js-na2.hsforms.net/forms/embed/245631851.js";

    script.defer = true;

    document.body.appendChild(script);

    return () => {
      // Keep the HubSpot script loaded if the component
      // is mounted again during client-side navigation.
    };
  }, []);

  return (
    <div className="form-panel hubspot-panel">
      <div className="form-header">
        <span className="kicker">
          Start a Conversation
        </span>

        <h3>
          Tell us what you&apos;re looking for.
        </h3>

        <p>
          Share a few details and Digithum Consultancy
          Services will get back to you.
        </p>
      </div>

      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="a593cbd7-04de-4ee2-8bca-755eae3b1133"
        data-portal-id="245631851"
      />
    </div>
  );
}