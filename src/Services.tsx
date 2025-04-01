
import React from "react";
import { CgDesignmodo } from "react-icons/cg";


interface Service {
  title: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    { title: "Web Design" },
    { title: "Web Development" },
    { title: "Brand and Logo Design" },
    { title: "Content Writing" },
  ];

  return (
    <main id="services" className="flex flex-col justify-center items-center p-5">
      <h1 className="text-center text-3xl font-[times-new-roman] p-5 font-bold mb-5">
        My Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-sm shadow-gray-300 h-[150px]  
                       transition-all duration-500 hover:shadow-lg hover:shadow-gray-400  
                       hover:scale-105 flex flex-col justify-center items-center text-[#297B67] p-4"
          >
            <span className="text-4xl mb-2">
              <CgDesignmodo />
            </span>
            <p className="text-center text-xl font-[cursive]">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
