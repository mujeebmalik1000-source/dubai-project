
"use client";

import { useEffect, useState } from "react";

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("Wrench");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");

  async function fetchServices() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/services");
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Services load nahi hui.");
      }

      console.log("Services from API:", data.services);
      setServices(data.services || []);
    } catch (err) {
      setError(err.message || "Services load nahi hui.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  function handleTitleChange(value) {
    setTitle(value);
    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    );
  }

  async function handleAddService(e) {
    e.preventDefault();
    setAdding(true);
    setError("");

    try {
        console.log("Editing ID:", editingId);
      const response = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, icon, description, slug }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Service add nahi hui.");
      }

      setTitle("");
      setIcon("Wrench");
      setDescription("");
      setSlug("");
      setShowForm(false);

      await fetchServices();
      alert("Service successfully add ho gayi!");
    } catch (err) {
      setError(err.message || "Service add nahi hui.");
    } finally {
      setAdding(false);
    }
  }




  function handleEditClick(service) {
  console.log("Selected service:", service);

  const id = service?._id?.toString();

  if (!id) {
    alert("Service ID nahi mili. Refresh List par click karein.");
    return;
  }

  setEditingId(id);
  setTitle(service.title || "");
  setIcon(service.icon || "Wrench");
  setDescription(service.description || "");
  setSlug(service.slug || "");
  setShowForm(true);
}








async function handleDeleteService(id, serviceTitle) {
  const confirmed = window.confirm(
    `Kya aap "${serviceTitle}" service delete karna chahte hain?`
  );

  if (!confirmed) return;

  try {
    const response = await fetch(`/api/services/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Service delete nahi hui.");
    }

    await fetchServices();
    alert("Service delete ho gayi!");
  } catch (err) {
    alert(err.message || "Service delete nahi hui.");
  }
}

async function handleSaveService(e) {
  e.preventDefault();
  setError("");

  if (!editingId) {
    await handleAddService(e);
    return;
  }

  setAdding(true);

  try {
    console.log("Editing ID:", editingId);

    const response = await fetch(
      `/api/services/${editingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          icon,
          description,
          slug,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Service update nahi hui.");
    }

    setEditingId(null);
    setTitle("");
    setIcon("Wrench");
    setDescription("");
    setSlug("");
    setShowForm(false);

    await fetchServices();
    alert("Service update ho gayi!");
  } catch (err) {
    setError(err.message || "Service update nahi hui.");
  } finally {
    setAdding(false);
  }
}

  
// function handleEditClick(service) {
//   setEditingId(service._id);
//   setTitle(service.title);
//   setIcon(service.icon);
//   setDescription(service.description || "");
//   setSlug(service.slug);
//   setShowForm(true);
// }

// async function handleDeleteService(id, serviceTitle) {
//   const confirmed = window.confirm(
//     `Kya aap "${serviceTitle}" service delete karna chahte hain?`
//   );

//   if (!confirmed) return;

//   try {
//     const response = await fetch(`/api/services/${id}`, {
//       method: "DELETE",
//     });

//     const data = await response.json();

//     if (!response.ok || !data.success) {
//       throw new Error(data.message || "Service delete nahi hui.");
//     }

//     await fetchServices();
//     alert("Service delete ho gayi!");
//   } catch (err) {
//     alert(err.message || "Service delete nahi hui.");
//   }
// }

// async function handleSaveService(e) {
//   e.preventDefault();

//   if (!editingId) {
//     await handleAddService(e);
//     return;
//   }

//   setAdding(true);

//   try {
//     const response = await fetch(`/api/services/${editingId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, icon, description, slug }),
//     });

//     const data = await response.json();

//     if (!response.ok || !data.success) {
//       throw new Error(data.message || "Service update nahi hui.");
//     }

//     setEditingId(null);
//     setTitle("");
//     setIcon("Wrench");
//     setDescription("");
//     setSlug("");
//     setShowForm(false);

//     await fetchServices();
//     alert("Service update ho gayi!");
//   } catch (err) {
//     alert(err.message || "Service update nahi hui.");
//   } finally {
//     setAdding(false);
//   }
// }



  return (
    <main className="min-h-screen bg-gray-100 px-6 pb-6 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6  mt-14 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Manage Services
              </h1>
              <p className="mt-2 text-gray-500">
                Manage all services displayed on your website.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="cursor-pointer rounded-xl bg-[#184896] px-5 py-3 font-semibold text-white hover:bg-[#123875]"
            >
              {showForm ? "Cancel" : "+ Add Service"}
            </button>
          </div>
        </div>

        {showForm && (
          <form
            onSubmit={handleSaveService}
            className="mb-6 grid grid-cols-1 gap-5 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2"
          >
            <h2 className="text-xl font-bold text-gray-900 md:col-span-2">
             {editingId ? "Edit Service" : "Add New Service"}
            </h2>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Service Title
              </label>
              <input
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="AC Repair"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#184896]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Icon Name
              </label>
              <input
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                placeholder="Snowflake"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#184896]"
              />
              <p className="mt-1 text-xs text-gray-500">
                Example: Snowflake, Wrench, Plug, Paintbrush
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                URL Slug
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="ac-repair"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#184896]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Description
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Professional AC repair service"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#184896]"
              />
            </div>

            <button
              type="submit"
              disabled={adding}
              className="cursor-pointer rounded-xl bg-[#184896] px-5 py-3 font-semibold text-white disabled:opacity-60 md:col-span-2"
            >
              {adding
                ? "Saving..."
                : editingId
                ? "Update Service"
                : "Save Service"}
            </button>
          </form>
        )}

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-900">
              Existing Services
            </h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-[#184896]">
              {services.length} Services
            </span>
          </div>

          {error && (
            <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {loading ? (
            <p className="text-gray-500">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-gray-500">No services found.</p>
          ) : (
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="flex flex-col gap-3 rounded-xl border border-gray-200 p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {service.description || "No description"}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      Icon: {service.icon} · Slug: {service.slug}
                    </p>
                  </div>


                  
<div className="flex flex-wrap items-center gap-2">
  <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
    Active
  </span>

  <button
    type="button"
    onClick={() => handleEditClick(service)}
    className="cursor-pointer rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
  >
    Edit
  </button>

  <button
    type="button"
    onClick={() => handleDeleteService(service._id, service.title)}
    className="cursor-pointer rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
  >
    Delete
  </button>
</div>



                  
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={fetchServices}
            className="mt-5 cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Refresh List
          </button>
        </section>
      </div>
    </main>
  );
}