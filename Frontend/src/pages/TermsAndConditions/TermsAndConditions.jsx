import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Terms & Conditions
        </h1>
        <section className="mb-8">
          <p className="text-gray-600 mb-4">
            Before using this website, please carefully read all of the terms
            and conditions. By accepting these terms and conditions, you are
            indicating that you have read and comprehended them. Please leave
            this website if you disagree with these terms or do not understand
            what they mean. The pages of manalifun.com are subject to these
            terms and conditions.
          </p>
          <p>
            Website Score:{" "}
            <a className="text-blue-500" href="https://www.delhimazza.com/">
              https://www.delhimazza.com/
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
