import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>
        <section className="mb-8">
          <p className="text-gray-600 mb-4">
            Details about the kinds of personal information that visitors of the
            website or app provide.
          </p>
          <p className="text-gray-600 mb-4">
            The reasons behind the collection of personal data and its intended
            use.
          </p>
          <p className="text-gray-600 mb-4">
            Whether and with whom third parties the personal data is exchanged,
            as well as the nature of those third parties.
          </p>
          <p className="text-gray-600 mb-4">
            Details on the methods by which users can see, update, or remove
            their personal information.
          </p>
          <p className="text-gray-600 mb-4">
            Details regarding the safety precautions taken to safeguard personal
            information.
          </p>
          <p className="text-gray-600 mb-4">
            Information on how cookies and other tracking technologies are used.
          </p>
          <p className="text-gray-600 mb-4">
            Details regarding users' rights under applicable privacy laws.
          </p>
          <p className="text-gray-600 mb-4">
            Details about how to get in touch with the privacy team or data
            protection officer of the website or app.
          </p>
          <div>
            <p>
              Website Score:{" "}
              <a className="text-blue-500" href="https://www.delhimazza.com/">
                https://www.delhimazza.com/
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
