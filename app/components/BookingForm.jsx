"use client";


import { useState } from "react";

export default function BookingForm() {

const [formData, setFormData] = useState({

 
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  property: "",
  location: "",
  budget: "",
  date: "",
  time: "",
  timeline: "",
  details: "",
  attachment: null,
});

 const [isSubmitting, setIsSubmitting] = useState(false);
 const [message, setMessage] = useState("");


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};




const handleFileChange = (e) => {
  setFormData({
    ...formData,
    attachment: e.target.files[0],
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setMessage("");

  try {
    let attachmentUrl = "";

    // 1. File selected hai to Cloudinary par upload karo
    if (formData.attachment) {
      const cloudinaryData = new FormData();

      cloudinaryData.append("file", formData.attachment);
      cloudinaryData.append(
        "upload_preset",
        "dubai-bookings"
      );

      cloudinaryData.append("folder", "dubai-bookings");

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/xnjypzo4/auto/upload",
        {
          method: "POST",
          body: cloudinaryData,
        }
      );

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) {
        console.error("Cloudinary Error:", uploadData);
        throw new Error("File upload failed");
      }

      // Cloudinary se URL
      attachmentUrl = uploadData.secure_url;
    }

    // 2. MongoDB ke liye booking data
    const bookingData = {
      fullName: formData.fullName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      property: formData.property,
      location: formData.location,
      budget: formData.budget,
      date: formData.date,
      time: formData.time,
      timeline: formData.timeline,
      details: formData.details,

      // Cloudinary URL
      attachment: attachmentUrl,
    };

    // 3. MongoDB API ko data bhejo
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Booking failed");
    }

    // 4. Success message
    setMessage("Booking Request Submitted Successfully!");

    // 5. Form reset
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      property: "",
      location: "",
      budget: "",
      date: "",
      time: "",
      timeline: "",
      details: "",
      attachment: null,
    });

  } catch (error) {
    console.error("Booking Error:", error);
    setMessage(
      "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};






  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Personal Information */}
      <div>
        <h3 className="text-2xl font-bold text-[#08152E] mb-6">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
              
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Company Name
            </label>

            <input
               type="text"
               name="company"
               value={formData.company}
               onChange={handleChange}
               placeholder="Company (Optional)"
               className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
            />
            
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
           <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
            />
          </div>

        </div>
      </div>

      {/* Project Information */}

      <div>
        <h3 className="text-2xl font-bold text-[#08152E] mb-6">
          Project Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Service Required
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
            >
                

            <option value="">Select Service</option>
            <option value="AC Repair">AC Repair</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Painting">Painting</option>
            <option value="Renovation">Renovation</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Handyman">Handyman</option>
            
            </select>
          </div>



     <div>
        <label className="block mb-2 font-medium">
             Property Type
        </label>

       <select
          name="property"
          value={formData.property}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
       >
         <option value="">Select Property</option>
         <option value="Apartment">Apartment</option>
         <option value="Villa">Villa</option>
         <option value="Office">Office</option>
         <option value="Shop">Shop</option>
         </select>

       </div>

         

          <div>
            <label className="block mb-2 font-medium">
              Project Location
            </label>

             <input
               type="text"
               name="location"
               value={formData.location}
               onChange={handleChange}
               placeholder="Enter your project location"
               className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
            />

            
          </div>



          <div>
            <label className="block mb-2 font-medium">
                   Budget Range
           </label>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
          >
            <option value="">Select Budget</option>
            <option value="Below AED 500">Below AED 500</option>
            <option value="AED 500 - 1,000">AED 500 - 1,000</option>
            <option value="AED 1,000 - 5,000">AED 1,000 - 5,000</option>
            <option value="AED 5,000 - 10,000">AED 5,000 - 10,000</option>
            <option value="Above AED 10,000">Above AED 10,000</option>
          </select>
          </div>


         

          <div>
            <label className="block mb-2 font-medium">
              Preferred Date
            </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
              />
          </div>



          <div>
            <label className="block mb-2 font-medium">
              Preferred Time
            </label>

            <input
             type="time"
             name="time"
             value={formData.time}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
            />
          </div>


          <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
             Timeline
          </label>

         <select
           name="timeline"
           value={formData.timeline}
           onChange={handleChange}
           className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896]"
         >
        <option value="">Select Timeline</option>
        <option value="Emergency">Emergency</option>
        <option value="Within 24 Hours">Within 24 Hours</option>
        <option value="Within 3 Days">Within 3 Days</option>
        <option value="Within a Week">Within a Week</option>
        <option value="Within a Month">Within a Month</option>
        <option value="Flexible">Flexible</option>
        </select>
        </div>



          

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Project Details
            </label>
            
            <textarea
              rows={6}
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Please describe your project in detail..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#184896] resize-none"
            ></textarea>
           </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Attachment
            </label>

            <input
              type="file"
              name="attachment"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#184896] file:text-white file:cursor-pointer"
            />

             <p className="text-sm text-gray-500 mt-2">
                Upload photos, drawings or documents (JPG, PNG, PDF)
             </p>

            {formData.attachment && (
              <p className="mt-2 text-sm text-green-600">
                 Selected File: {formData.attachment.name}
              </p>
            )}
          </div>

        </div>
      </div>



      {message && (
         <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-center text-green-700 font-medium">
            {message}
         </div>
       )}
 

    <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-[#184896] hover:bg-[#123b79] disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300"
>
  {isSubmitting ? "Submitting..." : "Submit Request"}
</button>





    </form>
  );
}