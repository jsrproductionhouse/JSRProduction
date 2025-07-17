const Blog4 = () => {
  const rentalServices = [
    {
      name: "Studografia: Cinematic Excellence in a Photo Studio for Portfolio Shoot",
      location: "Dehradun",
      services:
        ":  Studografia provides a full spectrum of professional photography services tailored to meet diverse creative and commercial needs. With a focus on cinematic storytelling, artistic vision, and technical precision, we create visuals that truly resonate. Whether you're an individual seeking a narrative-driven portfolio or a brand aiming to elevate its visual identity, Studografia delivers high-quality, studio-grade photography that brings your vision to life.",
      experience:
        "JSR Studios, known as JSR Production House, is the best place to shoot a portfolio in Dehradun. With an extensive background in filmmaking, JSR Studios provides portfolio shots in a cinematic way, and while it may not be widely known for that, JSR Studios is able to craft stunning and professional portfolios using state-of-the-art equipment to tell visually stunning stories. JSR Studios is experienced in filmmaking and has amazing camera guys, plus the latest equipment on the market. JSR Studios is a great choice for any striking, professional, and unique portfolio photos.",
      rating: "4.7/5",
      why: "A complete service provider with professional-grade gear, expert studios, and production coordination.",
      img: "/js2.png",
      link: "https://jsrproductionhouse.com/",
    },
    {
      name: "Photo Klicker Photography: Veteran Storytellers",
      link: "https://photoklickerphotography.com/",
      location: "Dehradun",
      services:
        "Wedding photography, pre-wedding shoots, portrait photography, fashion shoots.",
      experience:
        " Photo Klicker Photography is well known for its imaginative and professional style. Natural and expressive portfolio photos are guaranteed by their easygoing, unobtrusive nature. Clients praise their vivid colors and attention to detail. It's a great photo studio for portfolio shoot seekers who prefer high-quality edits and years of experience.",
      rating: "4.7/5",
      img: "/klicker.png",
      why: "Trusted for both equipment and production help, with well-equipped editing facilities.",
    },
    {
      name: "Dhyani Studio: Capturing Your Story",
      location: "Dehradun",
      link: "https://www.justdial.com/Dehradun/Dhyani-Studios-Divya-Vihar/9999PX135-X135-230926003945-P2S8_BZDET/services",
      services:
        "Wedding photography, candid photography, professional photography.",
      experience:
        "Personalized images with a narrative are Dhyani Studio's specialty. Their photographers are great at capturing real situations, making them ideal for portfolios that need a special, intimate touch.",
      rating: "4.7/5",
      img: "/dhyani.png",
      why: "Ideal for filmmakers seeking reliable camera rentals backed by local expertise.",
    },
    {
      name: "PANT Professional Photography: Quality and Customization",
      location: "Delhi (serves UK)",
      services: "Wedding photography, pre-wedding shoots, product photography",
      experience:
        "PANT offers customized packages and uses top-notch equipment. Their emphasis on both traditional and candid photography ensures a versatile portfolio of images. If you're looking for a photo studio for portfolio shoot with flexible packages and pricing, this is a reliable option.",
      rating: "N/A",
      img: "/pant.jpg",
      link: "https://www.instagram.com/pant.professional.photo.studio/?hl=en",
      why: "Known for specialized equipment and end-to-end production logistics.",
    },
    {
      name: "Studio Right Choice: A Legacy of Excellence",
      location: "Chandigarh (serves UK)",
      services: "Model photography, wedding photography, photo studios",
      experience:
        "Studio Right Choice has a solid reputation for producing top-notch photography. They are a reliable choice for professional portfolio shoots and a dependable photo studio for portfolio shoot veterans and beginners alike.",
      rating: "4.5/5",
      img: "/choice.png",
      link: "https://www.justdial.com/Dehradun/Studio-Right-Choice-Opp-Shiv-Mandir-Ballupur/9999PX135-X135-130612173040-C5U9_BZDET",
      why: "Longstanding presence and accessibility for Dehradun filmmakers.",
    },
    {
      name: "Sublime Studios: Creative and Modern",
      location: "Chandigarh (serves UK)",
      services:
        "Wedding photography, architecture photography, product photography",
      experience:
        " Sublime Studios blends creative vision with contemporary methods. Their staff has been photographing 130 weddings since 2019 and is prepared to produce imaginative and expert portfolio images.",
      rating: "4.5/5",
      img: "/sublime.png",
      link: "https://www.instagram.com/the_sublime_studios/",
      why: "Longstanding presence and accessibility for Dehradun filmmakers.",
    },
  ];

  const tableObj = [
    {
      service: "JSR Production House",
      location: "Film production, video production",
      offering: "Cinematic expertise, known for feature films",
      experience: "Leading provider",
      rating: "4.7/5",
    },
    {
      service: "Photo Klicker",
      location: "Wedding, portrait, and fashion photography",
      offering: "35+ years, 4K videography, led by Bobby Sharma",
      experience: "23 years",
      rating: "4.7/5",
    },
    {
      service: "Dhyani Studio",
      location: "Wedding, candid, professional",
      offering: "Blends styles, affordable",
      experience: "10 years",
      rating: "4.7/5",
    },
    {
      service: "PANT Photography",
      location: "Wedding, pre-wedding, produc",
      offering: "Customizable packages, founded by Sandesh Pant",
      experience: "Since 2009",
      rating: "N/A",
    },
    {
      service: "Studio Right Choice",
      location: "Model, wedding photography",
      offering: "Nearly 30 years in the field",
      experience: "25 years",
      rating: "4.5/5",
    },
    {
      service: "Sublime Studios",
      location: "Wedding, architecture, product",
      offering: "Modern techniques, diploma-trained founder",
      experience: "25 years",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="font-2 px-6 md:px-20 py-10 text-black">
      <p className="mb-6 text-xl md:text-2xl font-medium leading-relaxed">
        The charming capital of Uttarakhand, Dehradun, isn’t just known for its
        scenic charm, it's quickly becoming a hub for creative talent. Whether
        you're an <strong>aspiring model, actor, influencer,</strong> or{" "}
        <strong>a professional looking to elevate your personal brand</strong>,
        a powerful portfolio is your first step to standing out. But capturing
        your true essence of your personality requires more than just a camera,
        it takes the right studio house with vision, skill, and the advance
        equipment’s.
        <br />
        <br /> In this blog, we bring you the{" "}
        <strong>Top 6 Photo Studios in Dehradun</strong>
        that specialize in <strong>portfolio and ad shoots</strong>, each known
        for their unique approach and creative excellence. Leading the list is
        <strong> Studografia by JSR Production House </strong>, renowned for
        blending cinematic filmmaking techniques with cutting-edge photography
        to deliver visually stunning, narrative-rich portfolio shoots that set
        you apart.
        <br />
        <br /> If you're ready to invest in your brand image, these studios are
        where your transformation begins.
      </p>

      {rentalServices.map((service, index) => (
        <div
          key={index}
          className="mb-12 border-b border-gray-300 pb-6 flex flex-col md:flex-row gap-6"
        >
          <div className="flex flex-col items-start gap-4">
            <h3
              className="text-2xl md:text-3xl font-bold mb-2"
              onClick={() => window.open(service.link, "_blank")}
            >
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
                <strong>Specialties:</strong> {service.services}
              </p>
              {index != 0 ? (
                <p className="mb-2 text-lg font-medium">
                  <strong>Why it stands out:</strong> {service.experience}
                </p>
              ) : (
                <div className="mb-2 text-lg font-medium">
                  <p className="mb-[-20px] mt-5">
                    <strong>Why it stands out:</strong>
                  </p>
                  <p className="mt-4">
                    <strong>
                      Studografia (Venture of JSR Production House)
                    </strong>{" "}
                    is Dehradun’s leading studio house for high-impact visual
                    storytelling. Here's what makes it the top choice for{" "}
                    <strong>portfolio shoots, product photography</strong>, and{" "}
                    <strong>ad film shoots</strong>:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>
                      <strong>Cinematic Portfolio Shoots:</strong> Backed by a
                      strong foundation of JSR Production House in filmmaking,
                      Studografia crafts{" "}
                      <strong>narrative-driven portfolios</strong> with
                      cinematic flair. Each frame is directed with purpose,
                      capturing your personality, style, and story in the most
                      compelling way.Ideal for models, actors, and professionals
                      who want more than just standard portraits.
                    </li>
                    <li>
                      <strong>High-Precision Product Shoots:</strong> They help
                      brands make a lasting first impression. Using
                      <strong>
                        state-of-the-art lighting setups and lenses
                      </strong>
                      , they create clean, detail-rich product images ideal for
                      e-commerce, catalogs, and promotional materials.Whether
                      it's fashion, food, or tech, your product looks its
                      absolute best.
                    </li>
                    <li>
                      <strong>Professional Ad Shoots:</strong> Studografia
                      merges <strong> artistic direction</strong> with{" "}
                      <strong>technical excellence</strong> to produce visuals
                      for advertising. From concept to execution, our team
                      delivers ad shoots that align with your brand’s identity
                      and marketing goals—be it for digital, print, or TV..
                    </li>
                    <li>
                      <strong>Cutting-Edge Equipment & Creative Team:</strong>{" "}
                      With access to the latest cameras, lighting rigs, and
                      cinematic tools, combined with a crew of{" "}
                      <strong>experienced filmmakers and photographers</strong>,
                      we ensure every shoot meets the highest industry
                      standards.
                    </li>
                  </ul>
                  <p className="mt-4">
                    <strong>
                      Studografia isn’t just a photo studio; it’s a visual
                      storytelling house.
                    </strong>{" "}
                    Whether you're an individual or a brand, they help you stand
                    out through professional, striking, and uniquely crafted
                    visuals.
                  </p>
                </div>
              )}
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
              <th className="p-3">Studio Name</th>
              <th className="p-3">Specialities</th>
              <th className="p-3">Unique Features</th>
            </tr>
          </thead>
          <tbody>
            {tableObj.map((s, idx) => (
              <tr key={idx} className="border-t border-gray-300">
                <td className="p-3 font-medium">{s.service}</td>
                <td className="p-3 text-center">{s.location}</td>
                <td className="p-3 text-center">{s.offering}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
        Expert tips for successful portfolio shoots
      </h2>
      <p className="text-lg my-2">
        Want to make the most of your portfolio shoot? Here are some practical
        tips to help you prepare like a pro:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-medium">
        <li>
          <span className="font-bold text-black">Mix Up Your Wardrobe:</span>{" "}
          Bring a variety of outfits—think casual, formal, and one standout
          creative look. This gives your portfolio range and shows different
          sides of your personality or brand.
        </li>
        <li>
          <span className="font-bold text-black">
            Co-Create with Your Team:
          </span>{" "}
          Don’t just show up—
          <strong>get involved in the creative process</strong>. Discuss shoot
          themes, wardrobe styling, backgrounds, and posing ideas with your
          photographer or creative director ahead of time. Collaboration leads
          to more meaningful and cohesive shots
        </li>
        <li>
          <span className="font-bold text-black">Pick the Right Studio:</span>{" "}
          Choose a professional studio that aligns with your vision. Look for
          one with a strong portfolio and high-end equipment. And most
          importantly—clearly communicate your goals before the shoot.
        </li>
        <li>
          <span className="font-bold text-black">Practice Your Poses:</span>{" "}
          Spend some time in front of the mirror or take a few trial selfies to
          test your angles and expressions. It helps you feel more confident and
          natural during the shoot.
        </li>
        <li>
          <span className="font-bold text-black">Use Props Wisely:</span> Props
          can add context—but too many can distract.
          <strong> Keep it clean and intentional.</strong>
        </li>
        <li>
          <span className="font-bold text-black">
            Plan for the best light:{" "}
          </span>{" "}
          If you're shooting outdoors, aim for the{" "}
          <strong>early morning or golden hour (late afternoon)</strong> for
          soft, flattering natural light.
        </li>
        <li>
          <span className="font-bold text-black">Edit with purpose:</span>
          After the shoot, work with your photographer to{" "}
          <strong>select only the best shots</strong>. Professional retouching
          can elevate your final portfolio without over-editing.
        </li>
      </ul>

      <p className="text-lg my-2">
        These tips will help ensure your portfolio isn't just good—it’s
        unforgettable.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
        Why JSR Production House Leads the Pack
      </h2>
      <br />
      <p className="text-lg md:text-xl font-medium mb-4">
        What sets <strong>Studografia</strong> apart is its deep-rooted
        expertise in <strong>cinema and visual storytelling</strong>, born out
        of <strong>JSR Studios</strong>, the acclaimed filmmaking division of{" "}
        <strong>JSR Production House</strong>. With a rich portfolio that
        includes films like Mussoorie Boyz and 72 Hours: The Martyr Who Never
        Died, the team behind Studografia brings a level of cinematic depth and
        production quality rarely seen in typical photo studios.
        <br />
        <br /> Being a venture of an established film production house means
        <strong>Studografia has access to industry-grade tools</strong>—from
        <strong> high-end cinema lenses</strong> to advanced{" "}
        <strong>lighting setups</strong>, gimbals, and color grading tools. This
        allows them to create{" "}
        <strong>visually immersive, story-rich portfolio</strong>
        shoots that go far beyond simple portraits.
        <br />
        <br /> Whether you're a model, actor, interior designer, architect, or
        personal brand, Studografia specializes in crafting{" "}
        <strong>identity-driven portfolios</strong> that feel like a scene from
        a movie—stylized, polished, and unforgettable. If you’re looking for a
        portfolio that <strong>commands attention</strong>, tells a story, and{" "}
        <strong>elevates your image</strong>, Studografia is the gold standard
        in Dehradun
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">FAQs</h2>
      <ul className="space-y-4 text-lg font-medium">
        <li>
          <strong>What is the average duration of a portfolio shoot?</strong>
          <br /> A portfolio session often takes two to four hours. For accurate
          planning, talk with your chosen studio.
        </li>
        <li>
          <strong>
            What should I pack for the photo session for my portfolio?
          </strong>
          <br />
          Bring clothes, accessories, grooming items, and any other needed props
          as per discussion with the creative team of the studio house.
        </li>
        <li>
          <strong>
            Is it possible to use outdoor spaces in Dehradun for my portfolio
            shoot?
          </strong>
          <br /> Yes, Studografia offer outdoor shoots. Locations like Crimson
          Curry or JSR Inn in Kimadi provides visual appeal to the shoot
        </li>
      </ul>
    </div>
  );
};

export default Blog4;
