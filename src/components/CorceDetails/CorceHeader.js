import React, { useContext } from "react";
import img from "../../assets/favicon.png";
import { jsPDF } from "jspdf";
import {
  FaDownload,
  FaRecordVinyl,
  FaQuestion,
  FaBookOpen,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvaider";

const CorceHeader = ({ data }) => {
  const { user } = useContext(AuthContext);
  const handalPdF = () => {
    const doc = new jsPDF("a4", false);
    doc.addImage(img, "png", 10, 10, 10, 10);
    doc.setFontSize(15);
    doc.text(20, 16, "All-It-BD");
    doc.setFontSize(10);
    doc.text(20, 19, "Programing");
    doc.setFontSize(20);
    doc.text(20, 35, "Cource Information");
    doc.setFontSize(15);
    doc.text(20, 50, " Student Name :");
    doc.text(20, 60, " Student Email :");
    doc.text(20, 70, "Cource Name : ");
    doc.text(20, 80, "LIVE CLASS : ");
    doc.text(20, 90, "RECORDED CLASS : ");
    doc.text(20, 100, " QUESTIONS : ");
    doc.text(20, 110, "admitted people  : ");
    doc.text(20, 120, "Price : ");
    doc.text(20, 150, "About us : ");

    doc.text(80, 70, data.title);
    doc.text(80, 80, data.subject);
    doc.text(80, 90, data.class);
    doc.text(80, 100, data.mcq);
    doc.text(80, 110, data.inroll);
    doc.text(80, 120, data.price + "$");
    doc.text(
      50,
      150,
      "Create portfolio projects that showcase your new skills to help land "
    );
    doc.text(
      20,
      155,
      "land your dream job. Master your language with lessons, quizzes, and projects  "
    );
    doc.text(
      20,
      160,
      "designed for real-life scenarios.Leader in Online Tech Ed · Level Up Your Skills ·  "
    );
    doc.text(
      20,
      165,
      " Beginner-Friendly · Free 7 Day Pro Trial Courses: Python, JavaScript, SQL, Machine   "
    );
    doc.text(20, 170, "Learning, HTML, React, CSS  ");

    doc.save("all-it-bd-a4.pdf");
  };
  return (
    <div>
      <section className="mt-10">
        <div className="flex justify-between align-middle ">
          <h1 className=" text-xl md:text-4xl  border-3 text-gray-800 ">
            {data?.title}
          </h1>
          <div>
            <button
              className="btn me-5  text-sm md:text-xl  bg-green-500"
              onClick={handalPdF}
            >
              Download
              <FaDownload className=" text-sm md:text-xl ms-5"></FaDownload>
            </button>
          </div>
        </div>
        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex bg-red-100 items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <FaBookOpen className="text-3xl text-red-400  "></FaBookOpen>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  <p>Live Class</p>
                  <p className="text-red-600">{data?.class}</p>
                </h6>
              </div>
              <div className="text-center">
                <div className="flex bg-green-100 items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <FaRecordVinyl className="text-3xl text-green-400 "></FaRecordVinyl>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  <p>Recorded class and lecture slides</p>
                  <p className="text-red-600">{data?.subject}</p>
                </h6>
              </div>
              <div className="text-center">
                <div className="flex bg-red-100 items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <FaQuestion className="text-3xl text-red-400 "></FaQuestion>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  <p>
                    Solutions to each chapter's impersonal questions with
                    explanations
                  </p>
                  <p className="text-red-600">{data?.mcq}</p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorceHeader;
