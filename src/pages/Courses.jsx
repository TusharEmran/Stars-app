import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coverImage from '../pictures/cover.jpg'; // Update with your actual cover image

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRoutine, setActiveRoutine] = useState(null);
  const [bgColor, setBgColor] = useState('bg-cover bg-center');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const routines = [
    {
      title: "Engineering Section",
      details: "Structured courses for engineering students, covering all core and advanced subjects.",
      bgColor: "bg-blue-600",
      aos: "fade-right",
      batches: [
        { name: "Batch A - Morning", time: "8:00 AM - 11:00 AM", days: "Monday - Friday" },
        { name: "Batch B - Evening", time: "4:00 PM - 7:00 PM", days: "Monday - Friday" },
      ],
    },
    {
      title: "Academic Section",
      details: "Comprehensive curriculum for high school and college-level students.",
      bgColor: "bg-green-600",
      aos: "fade-up",
      subSections: [
        {
          sectionTitle: "Class 11-12",
          batches: [
            { name: "Batch A - Morning", time: "8:30 AM - 11:30 AM", days: "Monday - Friday" },
            { name: "Batch B - Afternoon", time: "12:30 PM - 3:30 PM", days: "Monday - Friday" },
          ],
        },
        {
          sectionTitle: "Class 9-10",
          batches: [
            { name: "Batch A - Morning", time: "9:00 AM - 12:00 PM", days: "Monday - Friday" },
            { name: "Batch B - Afternoon", time: "1:00 PM - 4:00 PM", days: "Monday - Friday" },
          ],
        },
      ],
    },
    {
      title: "Special Batch Section",
      details: "Exclusive training programs for competitive exams & university admission tests.",
      bgColor: "bg-purple-600",
      aos: "fade-left",
      subSections: [
        {
          sectionTitle: "Class 11-12",
          batches: [
            { name: "Batch A - Intensive", time: "7:00 AM - 10:00 AM", days: "Monday - Wednesday" },
            { name: "Batch B - Weekend", time: "Saturdays & Sundays, 10:00 AM - 2:00 PM", days: "Saturday - Sunday" },
          ],
        },
        {
          sectionTitle: "Class 9-10",
          batches: [
            { name: "Batch A - Evening", time: "4:00 PM - 7:00 PM", days: "Tuesday - Saturday" },
            { name: "Batch B - Weekend", time: "Saturdays, 10:00 AM - 2:00 PM", days: "Saturday" },
          ],
        },
      ],
    },
  ];

  const handleRoutineClick = (routine) => {
    setActiveRoutine(routine);
    setBgColor(routine.bgColor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div
        className={`min-h-screen ${bgColor} text-white bg-cover bg-center`}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="text-center mb-10 pt-16 relative z-10">
          <h1 className="text-4xl font-bold text-white" data-aos="zoom-in">📚 Academic Programs</h1>
          <p className="text-white mt-4 max-w-3xl mx-auto" data-aos="fade-up">
            Explore our well-structured academic programs designed for students in various disciplines. We offer customized learning options to help you excel in your studies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col justify-center relative z-10" data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-white">Why Choose Our Programs?</h2>
            <p className="text-white mt-3">
              We offer expert-guided learning with a well-structured curriculum to help students achieve their academic goals. Our programs include diverse schedules and flexible learning options to suit different needs.
            </p>
          </div>

          <div className="flex justify-center relative z-10" data-aos="fade-up">
            <div className="max-w-[250px] md:block hidden drop-shadow-lg" />
          </div>

          <div className="space-y-6 relative z-10">
            {routines.map((routine, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg text-white ${routine.bgColor} transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                data-aos={routine.aos}
                onClick={() => handleRoutineClick(routine)}
              >
                <h3 className="text-2xl font-semibold">{routine.title}</h3>
                <p className="mt-2">{routine.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && activeRoutine && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{activeRoutine.title} - Available Batches</h3>
              <button onClick={closeModal} className="text-xl font-bold text-gray-600">✖</button>
            </div>

            {activeRoutine.batches ? (
              <ul className="mt-4">
                {activeRoutine.batches.map((batch, batchIndex) => (
                  <li key={batchIndex} className="py-2">
                    <div className="text-lg font-semibold">{batch.name}</div>
                    <div className="text-sm text-gray-600">{batch.time}</div>
                    <div className="text-sm text-gray-600">{batch.days}</div>
                  </li>
                ))}
              </ul>
            ) : (
              activeRoutine.subSections.map((section, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{section.sectionTitle}</h4>
                  <ul className="mt-2">
                    {section.batches.map((batch, batchIndex) => (
                      <li key={batchIndex} className="py-2">
                        <div className="text-lg font-semibold">{batch.name}</div>
                        <div className="text-sm text-gray-600">{batch.time}</div>
                        <div className="text-sm text-gray-600">{batch.days}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Courses;
