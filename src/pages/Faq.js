import React from "react";

const Faq = () => {
  return (
    <div>
      <section className=" w-11/12 mx-auto text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                what is parpas of this website
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Website logo. The logo section of the website will commonly be
                the space for identifying the website brand. While personal
                blogs and other non-brand-driven websites may only include the
                name of the website here, this spot is the first point of call
                for establishing a brand on the website. Header. The header is
                the top portion of the website, often containing the website
                logo as well as the main menu. The header is often a permanent
                fixture of the website, where the main content might scroll
                beneath it. Menu. Menus, often placed at an easy-to-reach place
                on the website, provide a way to navigate the website in an easy
                way. A main menu is often contained in the header, or on a
                collapsible pane (especially in mobile views of websites), and
                allows navigation through the pages of the website. Body. The
                body area of a website is the area of the website that contains
                the most content. There are a number of different kinds of
                content. Specific pages will contain specific content.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                what is work it
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Work It is an American television sitcom that aired on ABC from
                January 3 to January 10, 2012. Set in St. Louis, the series is
                about two men who must dress as women in order to keep a job in
                a bad economy. The series had received overwhelmingly negative
                reviews.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                suscipit erat?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Justo libero tellus integer tincidunt justo semper consequat
                venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                pretium sodales vel magna et massa euismod vulputate sed.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How can we benefit from this?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                We can all benefit from a little white noise, whether it's the
                whir of crickets or airplanes overhead. The airline will
                undoubtedly benefit from the agreement, most particularly on
                that first hop of the
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What do you need to join here?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Or pay annually and save 44%. $99.99 / year. Play premium
                editions of select new-release games days before they launch.
                Get unlimited access to a library of premium edition Electronic
                Arts games
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
