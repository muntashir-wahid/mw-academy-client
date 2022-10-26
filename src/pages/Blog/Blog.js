import React from "react";

const Blog = () => {
  return (
    <section className="px-8 py-12">
      <h2 className="text-4xl text-center font-blod mb-16">
        Welcome to our blog
      </h2>

      {/* Blog 1 */}
      {/* What is cors? */}

      <article className="mb-10">
        <h3 className="text-2xl font-medium mb-6">What is cors?</h3>
        <p>
          <strong>Cross-Origin Resource Sharing (CORS)</strong> is an
          HTTP-header based mechanism that allows a server to indicate any
          origins (domain, scheme, or port) other than its own from which a
          browser should permit loading resources. CORS also relies on a
          mechanism by which browsers make a "preflight" request to the server
          hosting the cross-origin resource, in order to check that the server
          will permit the actual request. In that preflight, the browser sends
          headers that indicate the HTTP method and headers that will be used in
          the actual request.
        </p>
      </article>

      {/* Blog 2 */}
      {/* Why are you using firebase? What other options do you have to implement authentication? */}

      <article className="mb-10">
        <h3 className="text-2xl font-medium mb-6">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p></p>
      </article>

      {/* Blog 3 */}
      {/* How does the private route work? */}

      <article className="mb-10">
        <h3 className="text-2xl font-medium mb-6">
          How does the private route work?
        </h3>
        <p>
          Private Routes in React Router (also called Protected Routes) require
          a user being authorized to visit a route (read: page). So if a user is
          not authorized for a specific page, they cannot access it. The most
          common example is authentication in a React application where a user
          can only access the protected pages when they are authorized (which
          means in this case being authenticated). Authorization goes beyond
          authentication though. For example, a user can also have roles and
          permissions which give a user access to specific areas of the
          application.
        </p>
      </article>

      {/* Blog 4 */}
      {/* What is Node? How does Node work? */}

      <article className="mb-10">
        <h3 className="text-2xl font-medium mb-6">
          What is Node? How does Node work?
        </h3>
        <p className="mb-2">
          <strong>Node.js</strong> is an open-source backend javascript runtime
          environment. It is a used as backend service where javascript works on
          the server-side of the application. This way javascript is used on
          both frontend and backend. Node.js runs on chrome v8 engine which
          converts javascript code into machine code, it is highly scalable,
          lightweight, fast, and data-intensive.
        </p>
        <p className="mb-4">
          <strong>Working of Node.js:</strong>Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
        </p>
        <p className="mb-4">Node.js basically works on two concept</p>
        <ul className="list-disc list-inside">
          <li>Asynchronous</li>
          <li>Non-blocking I/O</li>
        </ul>
      </article>
    </section>
  );
};

export default Blog;
