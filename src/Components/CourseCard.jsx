import PropTypes from "prop-types";

const CourseCard = ({ course, enrollCall }) => {
  const {
    title,
    duration,
    batchSize,
    highlights,
    perks,
    learning,
    curriculum,
    software,
    image,
  } = course;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row w-full max-w-7xl lg:max-w-5xl mx-auto overflow-hidden">
      {/* Left: Image + Button */}
      <div className="md:w-1/3 w-full hidden lg:flex flex-col items-center justify-between bg-gray-100">
        <div className="w-full aspect-[4/3] md:aspect-auto lg:h-full">
          <img
            src={
              image ||
              "https://res.cloudinary.com/dsea9eyps/image/upload/v1698737148/samples/a9netvmy3epwecuknnpq.png"
            }
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 w-full flex justify-center">
          <button
            onClick={enrollCall}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Right: Info */}
      <div className="p-6 md:w-2/3 w-full flex flex-col gap-4 text-gray-800 text-sm">
        <h2 className="text-2xl font-bold">{title}</h2>

        <div className="space-y-1 font2">
          {duration && (
            <p>
              <span className="font-semibold">Duration:</span> {duration}
            </p>
          )}

          {batchSize && (
            <p>
              <span className="font-semibold">Batch Size:</span> {batchSize}
            </p>
          )}
        </div>

        {highlights?.length > 0 && (
          <div className="font2">
            <p className="font-semibold">Highlights:</p>
            <ul className="list-disc ml-5 opacity-80">
              {highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {perks?.length > 0 && (
          <div className="font2">
            <p className="font-semibold">Perks:</p>
            <ul className="list-disc ml-5 opacity-80">
              {perks.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
          </div>
        )}

        {learning?.length > 0 && (
          <div className="font2">
            <p className="font-semibold">What You’ll Learn:</p>
            <ul className="list-disc ml-5 opacity-80">
              {learning.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {curriculum && (
          <div className="font2">
            <p className="font-semibold">Curriculum:</p>
            {Object.entries(curriculum).map(([section, items]) => (
              <div key={section} className="ml-4 mt-2">
                <p className="font-medium">{section}:</p>
                <ul className="list-disc ml-5 opacity-80">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {software?.length > 0 && (
          <div className="font2">
            <p className="font-semibold">Software Covered:</p>
            <ul className="flex flex-col lg:flex-row lg:gap-3 ml-5 opacity-80">
              {software.map((item, i) => (
                <li className="flex gap-1 items-center" key={i}>
                  <span>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex lg:hidden w-full items-center justify-center">
          <button
            onClick={enrollCall}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string,
    fees: PropTypes.string,
    batchSize: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    perks: PropTypes.arrayOf(PropTypes.string),
    learning: PropTypes.arrayOf(PropTypes.string),
    curriculum: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
    software: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default CourseCard;
