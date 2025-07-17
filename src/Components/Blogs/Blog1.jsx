const Blog1 = () => {
  const rentalServices = [
    {
      name: "JSR Production House",
      location: "Dehradun",
      services:
        "Extensive rental inventory, grips, lighting systems, high-end cameras, and studio space at JSR Studios. Also provides full production support.",
      experience:
        "Known for producing Mussoriie Boyz and 72 Hours: Martyr Who Never Died, and leveraging Uttarakhand’s film-friendly incentives.",
      rating: "4.7/5",
      why: "A complete service provider with professional-grade gear, expert studios, and production coordination.",
      img: "/gallery1.jpg",
      link: "https://jsrproductionhouse.com/",
    },
    {
      name: "RC Vision Technics",
      location: "Dehradun",
      services:
        "Film and digital cameras, drones, gimbals, and audio/video editing facilities. Also offers production services.",
      experience:
        "Over 23 years in business with a 4.7/5 Justdial rating (102 reviews).",
      rating: "4.7/5",
      img: "/rcv.png",
      link: "http://www.rcvisiontechnics.com/",
      why: "Trusted for both equipment and production help, with well-equipped editing facilities.",
    },
    {
      name: "Winterline Productions",
      location: "Dehradun",
      services:
        "Specializes in digital camera rentals and video production services like corporate films and documentaries.",
      experience:
        "Founded in 2003; operational since 2015 with a 4.7/5 rating on Justdial (52 reviews).",
      rating: "4.7/5",
      img: "/winterline.png",
      link: "https://www.winterlineproduction.com/",
      why: "Ideal for filmmakers seeking reliable camera rentals backed by local expertise.",
    },
    {
      name: "Trisna Films",
      location: "Delhi (serves UK)",
      services:
        "Grip rentals (cranes, jibs, Steadicam), lighting (Arri par, HMI), cameras (Arri Alexa, RED, Canon), site scouting, and filming authorization.",
      experience:
        "Operating since 2009, facilitating shoots across Uttarakhand.",
      rating: "N/A",
      img: "/trisha.png",
      link: "https://www.trisnafilms.com/uttarakhand-film-video-production-services-dehradun-uttarakhand-india.html",
      why: "Known for specialized equipment and end-to-end production logistics.",
    },
    {
      name: "Saya Films",
      location: "Chandigarh (serves UK)",
      services:
        "Camera and shooting equipment rentals. Inventory includes professional-grade cameras and accessories.",
      experience:
        " With 25 years of service and a 4.5/5 rating on Justdial (295 reviews).",
      rating: "4.5/5",
      img: "/saya.png",
      link: "https://sayafilms.com/",
      why: "Longstanding presence and accessibility for Dehradun filmmakers.",
    },
  ];

  const tableObj = [
    {
      service: "JSR Production House",
      location: "Dehradun",
      offering: "Equipment rental, studio, and production support",
      experience: "Leading provider",
      rating: "4.7/5",
    },
    {
      service: "RC Vision Technics",
      location: "Dehradun",
      offering: "Equipment rental, editing, and production support",
      experience: "23 years",
      rating: "4.7/5",
    },
    {
      service: "Winterline Productions",
      location: "Dehradun",
      offering: "Camera rentals, video production",
      experience: "10 years",
      rating: "4.7/5",
    },
    {
      service: "Trisna Films",
      location: "Delhi (serves UK)",
      offering: "Camera, grip, light rental + permits",
      experience: "Since 2009",
      rating: "N/A",
    },
    {
      service: "Saya Films",
      location: "Chandigarh (serves UK)",
      offering: "Camera and gear rentals",
      experience: "25 years",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="font-2 px-6 md:px-20 py-10 text-black">
      <p className="mb-6 text-xl md:text-2xl font-medium leading-relaxed">
        Due to the film-friendly regulations of the Uttarakhand Film Development
        Council, Uttarakhand is becoming an increasingly popular filming
        destination, thanks to its stunning Himalayan backdrop and rich cultural
        heritage. For filmmakers and creators to fulfill their projects, it is
        essential to have access to excellent production line rental services.
        This includes technical support and essential items such as cameras,
        lighting, grips, and studio space.
        <br />
        <br />
        The five top production line rental services in Uttarakhand are listed
        below, with <strong>JSR Production House</strong> ranked first due to
        its offerings and solid reputation in the industry.
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-4">
        Criteria for Selecting Production Line Rental Services
      </h2>
      <p className="text-lg md:text-xl mb-4 font-medium">
        Filmmakers should consider the following when choosing any production
        line rental service:
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-medium">
        <li>
          <span className="font-bold text-black">Range of Equipment:</span>{" "}
          Services offering a wide variety of cameras, lighting, grips, and
          accessories.
        </li>
        <li>
          <span className="font-bold text-black">Condition and Quality:</span>{" "}
          High-quality, well-maintained equipment ensures professional results.
        </li>
        <li>
          <span className="font-bold text-black">
            Flexibility and Rental Rates:
          </span>{" "}
          Competitive pricing and adaptable leasing durations for different
          budgets.
        </li>
        <li>
          <span className="font-bold text-black">Technical Support:</span>{" "}
          Qualified technicians enhance on-set productivity.
        </li>
        <li>
          <span className="font-bold text-black">Accessibility:</span> Proximity
          to filming hubs, such as Dehradun or Mussoorie, reduces logistical
          issues.
        </li>
        <li>
          <span className="font-bold text-black">Reputation:</span> Positive
          reviews and industry experience indicate service reliability.
        </li>
      </ul>

      <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6">
        Top 5 Production Line Rental Services in Uttarakhand
      </h2>

      {rentalServices.map((service, index) => (
        <div
          key={index}
          className="mb-12 border-b border-gray-300 pb-6 flex flex-col md:flex-row gap-6"
        >
          <div className="flex flex-col items-start gap-4">
            <h3
              className="text-2xl md:text-3xl font-bold mb-2 hover:text-blue-500 cursor-pointer"
              onClick={() => window.open(service.link, "_blank")}
            >
              {index + 1} {service.name}
            </h3>
            <div className="w-full max-w-[70%] flex flex-col">
              <img
                src={service.img}
                alt={service.name}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-base font-semibold italic mb-2">
                Location: {service.location}
              </p>
              <p className="mb-2 text-lg font-medium">
                <strong>Services Offered:</strong> {service.services}
              </p>
              <p className="mb-2 text-lg font-medium">
                <strong>Experience:</strong> {service.experience}
              </p>
              <p className="mb-2 text-lg font-medium">
                <strong>Rating:</strong> {service.rating}
              </p>
              <p className="text-lg font-medium">
                <strong>Why Choose {service.name}:</strong> {service.why}
              </p>
            </div>
          </div>
        </div>
      ))}

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
        Comparison Table
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-base border border-gray-500 text-black">
          <thead className="bg-gray-200 text-black font-semibold">
            <tr>
              <th className="p-3">Service</th>
              <th className="p-3">Location</th>
              <th className="p-3">Key Offerings</th>
              <th className="p-3">Experience</th>
              <th className="p-3">Rating</th>
            </tr>
          </thead>
          <tbody>
            {tableObj.map((s, idx) => (
              <tr key={idx} className="border-t border-gray-300">
                <td className="p-3 font-medium">{s.service}</td>
                <td className="p-3">{s.location}</td>
                <td className="p-3">{s.offering}</td>
                <td className="p-3">{s.experience}</td>
                <td className="p-3">{s.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
        Why JSR Production House Excels
      </h2>
      <br />
      <p className="text-lg md:text-xl font-medium mb-4">
        JSR offers a full-service model with professional studios, technical
        assistance, and high-quality equipment. Their past work on films like{" "}
        <i>Mussoriie Boyz</i> proves their reliability. Having JSR Studios
        available helps creators have more control on set.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">FAQs</h2>
      <ul className="space-y-4 text-lg font-medium">
        <li>
          <strong>What equipment does JSR Production House provide?</strong>
          <br /> A wide variety of cameras, lighting gear, grips, and studio
          access.
        </li>
        <li>
          <strong>
            Are Uttarakhand-based services more reliable than out-of-state ones?
          </strong>
          <br />
          Local services like JSR and RC Vision offer better logistical ease.
        </li>
        <li>
          <strong>How can filmmakers ensure equipment quality?</strong>
          <br /> Check customer reviews, request maintenance records, and
          inspect equipment on-site.
        </li>
      </ul>
    </div>
  );
};

export default Blog1;
