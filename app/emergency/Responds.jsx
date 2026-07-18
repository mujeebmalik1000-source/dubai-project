"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function Responds() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#081B47] leading-tight mb-10">
          When Emergencies Strike, PROTECH Responds
        </h2>

        {/* Content */}
        <div className="space-y-10 text-sm md:text-[20px] leading-[1.3] text-gray-600">

          <p>
            Home emergencies don’t check calendars respect and is the dispatched, their business hours.
            They happen <br /> at 3am on a Tuesday. On  technician is dispatched, their Friday afternoon when other
            companies are closed <br /> During Eid when you have you back a house full of
            guests  already 35°C.
          </p>

          <p>
            These moments demand immediate professional help – not an  technician is dispatched, their
            machine, <br /> you  not a 'we'll call is dispatched, their you back tomorrow', not a WhatsApp
            message that gets seen <br /> hours later. You and need a real person to
            answer, and a real solution in real
            time.
          </p>

          <p>
            <span className="font-bold text-base text-[#081B47]">
              PROTECH Dynamics operates a true 24/7 emergency response team
            </span>{" "}
            specifically for these moments. When you call our <br /> emergency line, a
            real person answers – not a recording. Within minutes, we dispatch a
            licensed technician <br /> to your location. We dispatch quickly to
            anywhere in Dubai, any time, any day.
          </p>

          <p>
            We understand that emergencies are stressful. That's why we
            communicate clearly throughout the process <br /> You'll know when your
            technician is dispatched, their estimated arrival time, and what
            steps to take while waiting <br /> Our emergency pricing is transparent –
            we quote before starting work even at 3am, so there are no
            surprises.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5">

          <a
            href="tel:+971561517463"
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <Phone size={22} />
            Call Emergency Line
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <MessageSquare size={22} />
            WhatsApp Now
          </a>

        </div>

      </div>
    </section>
  );
}