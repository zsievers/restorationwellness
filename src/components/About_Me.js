import headshot from "../images/cindy.JPG";

export default function About_Me() {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="px-2 py-1">
        <img
          src={headshot}
          alt=""
          className="h-full w-auto object-cover rounded-full"
        />
      </div>
      <div className="rounded overflow-hidden px-6 py-4">
        <p className="text-md md:text-base lg:text-2xl">
          My name is Cindy Giles and I have 30 years of experience in the world
          of health and fitness. My personal journey of seeking and finding
          Hope, Confidence, and Freedom is long and winding, which is why it is
          my mission to connect with you and encourage you towards this holistic
          healing.
          <br />
          <br />
          It is my passion for relationships that is the steady, undercurrent of
          Restoration Wellness. Physical fitness and healthy eating are factors
          that can greatly improve one’s quality of life; but it is forming
          meaningful relationships and community that are essential to healthy,
          overall well-being. I look forward to meeting with you, discussing
          your goals, and forming a working relationship that can encourage and
          motivate you in the direction of change- internal and external.
        </p>
      </div>
    </div>
  );
}
