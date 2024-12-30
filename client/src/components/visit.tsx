import { openGoogleMap } from "@/lib/utils";

export default function Visit() {
  return (
    <section id="visit" className="pt-2">
      <div className="bg-white py-2">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-[27px] font-bold py-4">Address & Location</h1>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="relative h-[300px] rounded-2xl overflow-hidden mb-2 md:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4817.531127843961!2d77.52254607579195!3d8.24015480083626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f4fcf3e739c9%3A0xc5b5099a4ba140a7!2sOur%20Lady%20of%20Sorrows%20Church!5e1!3m2!1sen!2sin!4v1735323814551!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold max-w-xl">
                Devasahayammount, Aralvaimozhi, <br /> Kanyakumari District,{" "}
                <br /> Tamil Nadu, India
              </h3>

              <button
                className="mb-8 text-white font-bold mt-2 p-3 text-center md:text-start bg-accent text-[16px] rounded-lg"
                onClick={() => openGoogleMap()}
              >
                Open on Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
