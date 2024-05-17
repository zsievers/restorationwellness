import img1 from "../images/food.png";
import img2 from "../images/gym.png";

function Services() {
  return (
    <div
      className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
      id="services"
    >
      <div className="rounded overflow-hidden shadow-lg bg-white">
        <img
          src={img1}
          alt="weight loss"
          className="w-full h-96 object-cover"
        />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2">Weight Loss</div>
          <p className="text-gray-700">
            Includes consultation, weigh-in, goal-based meal suggestions, weekly
            meal evals, and mental/emotional support and encouragement check-ins
          </p>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg bg-white">
        <img
          src={img2}
          alt="weight loss"
          className="w-full h-96 object-cover"
        />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2">Personal Training</div>
          <p className="text-gray-700">
            Cardiovascular, Strength, Flexibility or a combination of all. 30 or
            60 minute sessions either at your home, my home, or via Zoom
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
