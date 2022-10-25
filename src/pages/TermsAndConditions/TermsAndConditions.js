import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <article className="mt-10 p-10">
      <h2 className="text-3xl text-center font-semibold mb-6">
        Our Terms and Conditions
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
        asperiores. Voluptatem cupiditate nihil molestias corrupti earum
        repellendus labore maiores mollitia iste, illo ad quaerat libero! Omnis,
        similique incidunt veniam nostrum autem eveniet officia fugit corporis
        atque iusto? Sequi, dolorem unde!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil facilis
        cumque, at provident alias commodi vitae sed, assumenda sequi fugiat
        sint est nemo cupiditate deleniti possimus quos. Eum, ducimus suscipit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum, ea
        placeat, mollitia aliquid magni praesentium atque ab assumenda magnam
        neque deleniti vel perspiciatis repellat cumque rem sunt facilis, quia
        a! Facere ipsa quam, rem reiciendis quibusdam quod repudiandae accusamus
        impedit maiores eos quaerat ex eaque unde! Voluptas at facilis, saepe
        veniam rerum ipsum obcaecati, quaerat necessitatibus, ad id possimus
        impedit! Doloremque quos aperiam optio laudantium, saepe deleniti. Ipsam
        nobis expedita ipsa voluptas earum quas, est distinctio modi, hic sed
        rerum beatae officiis culpa, blanditiis dicta non autem dolorum? Sed.
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
