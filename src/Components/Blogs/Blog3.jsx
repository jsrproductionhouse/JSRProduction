const Blog3 = () => {
  const services = [
    {
      id: 1,
      name: "JSR Production House",
      img: "/js3.png", // Replace with correct image path
      founders:
        "Tarun Rawat (Founder), associated with JSR Group, founded by Jaswant Singh Rawat",
      location: "Dehradun, Uttarakhand",
      website: "https://www.jsrgroup.in",
      projects: [
        "72 Hours: Martyr Who Never Died (2019)",
        "Mussoriie Boyz (upcoming)",
        "Saumya-Ganesh (upcoming)",
        "Desi Kalakaar (upcoming)",
      ],
      desc: "A pioneer in Uttarakhand's film industry, JSR Production House, situated in Dehradun, is renowned for its expertise in creating feature films of the highest caliber. Its first Hindi feature film, 72 Hours: Martyr Who Never Died (2019), was a biographical drama about the valiant actions of Rifleman Jaswant Singh Rawat. Mussoriie Boyz is one of the fascinating upcoming projects set in the picturesque locations of Mussoorie and Dehradun.",
      table: {
        Established: "2015",
        Services:
          "Feature films, music videos, documentaries, commercials, equipment rental",
      },
    },
    {
      id: 2,
      name: "RC Vision Technics",
      img: "/rcv.png", // Replace with correct image path
      founders: "Vinay Chanana (Director & Producer)",
      location: "Dehradun, Uttarakhand",
      website: "https://rcvisiontechnics.com", // Replace with actual URL
      projects: [],
      desc: "RC Vision Technics has served Dehradun since 2000 and is a reliable veteran in the region’s filmmaking community. With over two decades of experience, it offers services like production planning, equipment rental, and consultation, making it a dependable partner for filmmakers in Uttarakhand.",
      table: {
        "Years in Business": "23 (since 2000)",
        Services: "Film production, equipment rental, and planning",
        "Key Figure": "Vinay Chanana (Director & Producer)",
      },
    },
    {
      id: 3,
      name: "PLUNEX PRODUCTIONS",
      img: "/plunex.png", // Replace with correct image path
      founders: "Not specified",
      location: "Dehradun, Uttarakhand",
      website: "https://plunex.in",
      projects: ["Commercial videos", "Short films", "Documentaries"],
      desc: "PLUNEX PRODUCTIONS is a modern production house known for its innovative storytelling and professional approach. Operating in Dehradun, it produces a wide range of content including ad films, music videos, and documentaries, and is well-regarded for its post-production services.",
      table: {
        "Years in Business": "7 (since 2018)",
        Services:
          "Film production, ad films, short films, music videos, post-production",
      },
    },
    {
      id: 4,
      name: "Bala-G Production",
      img: "/balaG.png", // Replace with correct image path
      founders: "Not specified",
      location: "Rishikesh, Uttarakhand",
      website: "https://balagproduction.com", // Replace with actual URL
      projects: [
        "Contributions to Bollywood films",
        "Web series",
        "Documentaries",
        "G20 global events",
      ],
      desc: "Based in Rishikesh, Bala-G Production is quickly becoming a prominent name in regional and national cinema. With contributions to Bollywood and major events like the G20, it represents a bridge between local talent and global storytelling.",
      table: {
        "Years in Business": "Recent (Year not specified)",
        Services: "Films, web series, documentaries, music, broadcasting",
      },
    },
    {
      id: 5,
      name: "VHS Media LLP",
      img: "/VHS.png", // Replace with correct image path
      founders: "Jaswant Singh Rawat, Tarun Singh Rawat",
      location: "Dehradun, Uttarakhand",
      website: "https://vhsmedia.com", // Replace with actual URL
      projects: ["Associated with Mussoriie Boyz"],
      desc: "VHS Media LLP, co-founded by Jaswant Singh Rawat and Tarun Singh Rawat, is an emerging player in Uttarakhand’s film production scene. Closely linked to JSR Production House, it is known for its collaborative film projects and continues to grow its footprint.",
      table: {
        "Years in Business": "4 (since 2021)",
        Services: "Media production, collaborative projects",
      },
    },
  ];

  return (
    <div className="font-2 px-6 md:px-20 py-10 text-black">
      <p className="mb-6 text-xl md:text-2xl font-medium leading-relaxed">
        Uttarakhand, a picture-perfect Himalayan state, is emerging as a
        prosperous film hub due to its thriving creative economy and natural
        beauty. The state offers a fascinating backdrop for filmmakers, with its
        majestic snow-capped hills and lush green valleys, inspiring a new breed
        of film production houses to tell compelling stories.
        <br />
        <br />
        The following are the five leading production companies based in
        Uttarakhand, which include JSR Production House at the top, based on
        their exceptional feature film production capabilities, and other
        emerging companies developing the area's film production capacity.
      </p>

      {services.map((s) => (
        <div key={s.id} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {s.id}. {s.name}
          </h3>
          <img
            src={s.img}
            alt={s.name}
            className="w-full max-w-xl mb-4 rounded shadow-md"
          />

          <p className="mb-2 text-lg font-medium">
            <strong>Founding Members:</strong> {s.founders}
          </p>

          <p className="mb-2 text-lg font-medium">
            <strong>Location:</strong> {s.location}
          </p>

          <p className="mb-2 text-lg font-medium">
            <strong>Website:</strong>{" "}
            <a
              href={s.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {s.website}
            </a>
          </p>

          <p className="mb-2 text-lg font-medium">
            <strong>Notable Projects:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-base">
            {s.projects.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-base border border-gray-500 text-black mb-6">
              <thead className="bg-gray-200 text-black font-semibold">
                <tr>
                  <th className="p-3">Attribute</th>
                  <th className="p-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(s.table).map(([key, value], idx) => (
                  <tr key={idx} className="border-t border-gray-300">
                    <td className="p-3 font-medium">{key}</td>
                    <td className="p-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog3;
