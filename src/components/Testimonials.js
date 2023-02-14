import Testimonial from "./Testimonial";

export default function Testimonials({ data }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((testimonial) => {
            return <Testimonial {...testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
}
