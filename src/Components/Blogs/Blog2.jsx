const Blog2 = () => {
  const rentalServices = [
    {
      name: "JSR Production House and JSR Studios",
      link: "https://jsrproductionhouse.com/",
      location: "Dehradun",
      services: "Training and mentorship in film and video production",
      experience:
        "JSR Studios provides hands-on opportunities in professional settings, engaging students in pre-production, production, and post-production for films, ads, and branding projects. Activities include scriptwriting, cinematography, 4K tours, drone shooting, and modern editing, mirroring industry workflows.",
      rating: "4.7/5",
      why: "Based in Dehradun, JSR Studios, under JSR Production House, excels in film production (Mussoorie Boyz (2022), 72 Hours: Martyr Who Never Died (2019)), video production for interiors and branding, and equipment rental (DSLR, drones). Led by producer Tarun Singh Rawat, their creative team leverages Uttarakhand’s film-friendly policies, including tax incentives and support from the Uttarakhand Film Development Council, to deliver cinematic training.",
      img: "/js.png",
    },
    {
      name: "Doon Film School",
      link: "https://doonfilmschool.com/",
      location: "Dehradun",
      services:
        " One- and two-year diploma programs in filmmaking, acting, and audio-visual arts",
      experience:
        "Doon Film School operates its own Doon Film Studios, equipped with post-production rooms, lighting apparatus, green screen facilities, and cinema cameras. \nThrough practical assignments that involve writing, filming, and editing, students receive thorough instruction in filmmaking.",
      rating: "4.7/5",
      img: "/doon.png",
      why: "The school, which is situated at 171/123, Araghar, Haridwar Road, Dehradun, places a strong emphasis on both creative and technical abilities. The two-year diploma program prepares students for a variety of professions in the film business.",
    },
    {
      name: "Fame Pathshala School of Cinema",
      link: "https://famepathshala.com/",
      location: "Dehradun",
      services:
        "Courses in filmmaking, acting, modeling, entertainment, and photography",
      experience:
        "Fame Pathshala, affiliated with RC Vision Technics, a production company founded in 2002, provides access to cutting-edge equipment and opportunities to work on a range of projects, including commercial productions and short films.",
      rating: "4.7/5",
      img: "/fame.png",
      why: " Fame Pathshala, which is situated at 10/3 Convent Road in Dehradun, is well-known for its extensive curriculum and knowledgeable professors. Students explore opportunities to appear in short films and prepare for professional auditions.",
    },
  ];

  const tableObj = [
    {
      service: "JSR Studios and JSR Production House",
      location: "Training in Film and Video Production",
      offering:
        "Hands-on pre-production, cinematography, 4K tours, drone shooting, editing",
      experience:
        "Cinematic projects (Mussoorie Boyz, 72 Hours: Martyr Who Never Died), equipment rental, Uttarakhand film policy support",
      rating: "4.7/5",
    },
    {
      service: "Doon Film Schoo",
      location: "Diploma in Filmmaking, Acting, AV Arts",
      offering: "Studio-based training in shooting, editing",
      experience: "Industry-focused curriculum",
      rating: "4.7/5",
    },
    {
      service: "Fame Pathshala",
      location: "Courses in Filmmaking, Acting, Modeling",
      offering: "Advanced equipment, project work",
      experience: "Industry connections via RC Vision Technics",
      rating: "4.7/5",
    },
  ];

  return (
    <div className="font-2 px-6 md:px-20 py-10 text-black">
      <p className="mb-6 text-xl md:text-2xl font-medium leading-relaxed">
        Nestled in the Himalayas, Uttarakhand is known for its picturesque
        scenery and is becoming a more and more popular place to shoot movies.
        For ambitious filmmakers, this natural setting and a growing film
        industry backed by the{" "}
        <strong>Uttarakhand Film Development Council</strong> make for the
        perfect combination. A key component of film education is hands-on
        experience, which helps students develop their technical proficiency,
        comprehend industry processes, and create professional portfolios.
        <strong>
          {" "}
          If you’re searching for a film school for practical experience,
          Uttarakhand’s leading institutes offer access to both stunning
          landscapes and working film environments.
        </strong>
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-4">
        Criteria for Selecting a Film School for Practical Experience
      </h2>

      <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-medium">
        <li>
          <span className="font-bold text-black">
            Access to Professional Equipment:
          </span>{" "}
          Gaining technical expertise requires exposure to industry-standard
          lighting, cameras, and editing software.
        </li>
        <li>
          <span className="font-bold text-black">Practical Projects</span>{" "}
          Students can apply their theoretical knowledge in real-world
          situations through programs that prioritize project-based learning.
        </li>
        <li>
          <span className="font-bold text-black">
            Industry Relationships and Internships:
          </span>{" "}
          Collaborations with production companies or business experts offer
          exposure to the real world and networking opportunities.
        </li>
        <li>
          <span className="font-bold text-black">Skilled Faculty:</span>{" "}
          Teachers with real-world expertise provide perspectives on
          contemporary business procedures.
        </li>
        <li>
          <span className="font-bold text-black">Portfolio Building:</span>{" "}
          Opportunities to produce movies, shorts, or other media projects are
          essential.
        </li>
      </ul>

      <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6">
        Top Film Schools in Uttarakhand: Choosing a Film School for Practical
        Experience
      </h2>

      {rentalServices.map((service, index) => (
        <div
          key={index}
          className="mb-12 border-b border-gray-300 pb-6 flex flex-col md:flex-row gap-6"
        >
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {service.name}
            </h3>
            <div className="w-full max-w-[70%] flex flex-col">
              <img
                src={service.img}
                alt={service.name}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="mb-2 text-lg font-medium">
                <strong>Programs Offered:</strong> {service.services}
              </p>
              <p className="mb-2 text-lg font-medium">
                <strong>Practical Experience:</strong> {service.experience}
              </p>

              <p className="text-lg font-medium">
                <strong>Notable Attributes:</strong> {service.why}
              </p>
              <p className="text-lg font-medium">
                <strong>Contact Us:</strong>{" "}
                <div
                  className="cursor-pointer text-blue-500"
                  onClick={() => window.open(service.link, "_blank")}
                >
                  {service.name}
                </div>
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
              <th className="p-3">Institution</th>
              <th className="p-3">Programs Offered</th>
              <th className="p-3">Practical Experience</th>
              <th className="p-3">Notable Features</th>
            </tr>
          </thead>
          <tbody>
            {tableObj.map((s, idx) => (
              <tr key={idx} className="border-t border-gray-300">
                <td className="p-3 font-medium">{s.service}</td>
                <td className="p-3">{s.location}</td>
                <td className="p-3">{s.offering}</td>
                <td className="p-3">{s.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
        Why JSR Studios and JSR Production House Stand Out
      </h2>
      <p className="text-lg md:text-xl font-medium mb-4">
        SR Studios, under JSR Production House, excels in film production
        (Mussoorie Boyz, 72 Hours: Martyr Who Never Died), offering hands-on
        training in cinematography, 4K tours, drone shooting, and editing. Based
        in Dehradun, their equipment rental and cinematic expertise, led by
        Tarun Singh Rawat, leverage Uttarakhand’s film policies for practical
        student training. For any student trying to find a film school for
        practical experience, the JSR Production House offers a rare and
        complete learning opportunity.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">FAQs</h2>
      <ul className="space-y-4 text-lg font-medium">
        <li>
          <strong>What makes JSR Studios’ training program the best?</strong>
          <br /> Access to professional facilities, projects like Mussoorie
          Boyz, and expertise in film production, video production, equipment
          rental.
        </li>
        <li>
          <strong>
            Do these schools provide industry links or internships?
          </strong>
          <br />
          Yes, JSR Studios, Doon Film School, and Fame Pathshala (via RC Vision
          Technics) offer industry connections and project opportunities. Verify
          with each.
        </li>
        <li>
          <strong>What equipment do these schools have?</strong>
          <br /> JSR Studios offers cinema cameras, drones, lighting, editing
          suites. Doon Film School and Fame Pathshala provide modern technology.
          Check specifics.
          <br /> Whether you prioritize industry ties or access to professional
          gear, choosing a film school for practical experience means checking
          what they can offer beyond the classroom
        </li>
      </ul>
    </div>
  );
};

export default Blog2;
