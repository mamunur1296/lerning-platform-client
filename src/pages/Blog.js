import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <div className=" text-black">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">september 26, 2022</span>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                what is `cors`?
              </a>
              <p className="mt-2">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request. <br />
                For security reasons, browsers restrict cross-origin HTTP
                requests initiated from scripts. For example, XMLHttpRequest and
                the Fetch API follow the same-origin policy. This means that a
                web application using those APIs can only request resources from
                the same origin the application was loaded from unless the
                response from other origins includes the right CORS headers.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" text-black">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">september 26, 2022</span>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Why are you using `firebase`?
              </a>
              <p className="mt-2">
                Using Firebase in your project allows you to focus on the
                frontend and not so much on the backend because Firebase does a
                lot of things under the hood for you. Firebase also helps keeps
                costs low and reduces the need for boilerplate backend code.
                Firebase also helps you monitor errors.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" text-black">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">september 26, 2022</span>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                What other options do you have to implement authentication?
              </a>
              <p className="mt-2">
                5 Common Authentication Methods For Network Security
              </p>
              <li>Biometrics</li>
              <p>
                <small>
                  Biometrics is a term that refers to measuring unique
                  individual characteristics such as the retina, the iris,
                  fingerprints or even the face. Today, the term is generally
                  used by most people to describe a method for securing
                  computers and stored data requiring a user to undergo a scan
                  of the body part used for recognition.
                </small>
              </p>
              <li>Token Authentication</li>
              <p>
                <small>
                  A token is a material device that is used to access secure
                  systems. Common forms include a dongle, card, or RFID chip. A
                  token makes it more difficult for a hacker to access an
                  account since they must have long credentials and the tangible
                  device itself, which is much harder for a hacker to obtain.
                </small>
              </p>
              <li>Transaction Authentication</li>
              <p>
                <small>
                  The fundamental idea surrounding transaction authentication is
                  context — this method seeks out reasonable mistakes when
                  comparing known data about a user with the details of a
                  current transaction.
                </small>
              </p>
              <li>Multi-Factor Authentication (MFA)</li>
              <p>
                <small>
                  When you log in to an account that has MFA enabled, in
                  addition to entering your password, you must either enter in
                  an added generated code, or authorize login with a “push”
                  request to a secondary device. In the event your password is
                  compromised, your account can remain secure as the
                  cybercriminal is unable to authenticate the secondary
                  requirement.
                </small>
              </p>
              <li>Out-of-Band Authentication (OOB)</li>
              <p>
                <small>
                  A specific type of MFA, OOB utilizes totally separate
                  channels, like mobile devices, to authenticate transactions
                  that originated on a computer. Any transaction that requires
                  deposits from one place to another, like a large money
                  transfer, would generate a phone call, text or notification on
                  an app that there is more authentication required for the
                  transaction to be completed. With two necessary channels, it
                  is much more difficult for a hacker to steal money.
                </small>
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" text-black">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">september 26, 2022</span>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                How does the private route work?
              </a>
              <p className="mt-2">
                A VPN works by routing a device's internet connection through a
                private service rather than the user's regular internet service
                provider (ISP). The VPN acts as an intermediary between the user
                getting online and connecting to the internet by hiding their IP
                address.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" text-black">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">september 26, 2022</span>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                What is Node? How does Node work?
              </a>
              <p className="mt-2">
                <li>Node</li>
                <p>
                  <small>
                    Node provides access to several important global objects for
                    use with Node program files. When writing a file that will
                    run in a Node environment, these variables will be
                    accessible in the global scope of your file.
                  </small>
                </p>
                <li>Node worke</li>
                <p>
                  <small>
                    Node.JS works and runs on the VB JavaScript engine. An
                    essential thing to comprehend is that Node isn’t a web
                    server. In this article will give a simple method to
                    comprehend the outline of how Node.JS works? along with its
                    functions, what makes Node.JS extraordinary and clarify that
                    it’s something other than server-side JavaScript.
                  </small>
                </p>
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
