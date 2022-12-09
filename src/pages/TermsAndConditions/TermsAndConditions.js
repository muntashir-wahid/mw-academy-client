import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useChangeTitle from "../../hooks/useChangeTitle";

const TermsAndConditions = () => {
  const pdfRef = useRef();
  useChangeTitle("Terms and Conditions");

  return (
    <article className="mt-10 p-10" ref={pdfRef}>
      <h2 className="text-3xl text-center font-semibold mb-6">
        Our Terms and Conditions
      </h2>
      <p>
        These Terms of Use ("Terms") were last updated on Sept. 23, 2022. MW
        Academy’s mission is to improve lives through learning. We enable anyone
        anywhere to create and share educational content (instructors) and to
        access that educational content to learn (students). We consider our
        marketplace model the best way to offer valuable educational content to
        our users. We need rules to keep our platform and services safe for you,
        us, and our student and instructor community. These Terms apply to all
        your activities on the MW Academy website, the MW Academy mobile
        applications, our TV applications, our APIs, and other related services
        (“Services”). If you publish a course on the MW Academy platform, you
        must also agree to the Instructor Terms. We also provide details
        regarding our processing of personal data of our students and
        instructors in our Privacy Policy. If you are using MW Academy as part
        of your employer’s MW Academy Business learning and development program,
        you can consult our MW Academy Business Privacy Statement.
      </p>
      <p className="my-5">
        Go back to{" "}
        <Link to="/register" className="underline text-blue-500">
          Registration
        </Link>
      </p>
    </article>
  );
};

export default TermsAndConditions;
