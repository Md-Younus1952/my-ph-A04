const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote • Full-time",
    salary: "$130,000 - $175,000",
    status: "not applied",
    Description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA • Part-time",
    salary: "$80,000 - $120,000",
    status: "not applied",
    Description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
    Description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    role: "Backend Engineer",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
    Description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 5,
    company: "Innovation Labs",
    role: "UI/UX Designer",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
    Description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
    Description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
    Description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    location: "New York • Full-time",
    salary: "$130,000 - $175,000",
    status: "not applied",
    Description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects. Competitive salary, remote work options, and a collaborative environment await you.",
  },
];

const jobList = document.getElementById("jobList");

function renderJobs(filter = "all") {
  jobList.innerHTML = "";

  let filteredJobs = jobs.filter((job) => {
    if (filter === "all") return true;
    return job.status === filter;
  });

  document.getElementById("jobCounter").innerText =
    filteredJobs.length + " jobs";

  filteredJobs.forEach((job) => {
    jobList.innerHTML += `
      <div class="card bg-base-100 shadow relative">

        <!-- Trash Icon Top Right -->
        <button onclick="deleteJob(${job.id})"
          class="btn btn-gost btn-sm absolute right-2 top-2 mt-2">
        <span class="text-red-500">
        <i class="fa-regular fa-trash-can"></i>
        </span>
          </button>

        <div class="card-body">
          <h2 class="card-title">${job.company}</h2>
          <p class="font-medium">${job.role}</p>
          <p class="text-sm text-gray-500">${job.location} • ${job.salary}</p>

          <div class="mt-2">
            <span class="badge ${
              job.status === "interview"
                ? "badge-success"
                : job.status === "rejected"
                  ? "badge-error"
                  : "badge-neutral"
            }">
              ${job.status.toUpperCase()}
            </span>
            <p class="mt-2 text-sm">${job.Description || "No description provided."}</p>
          </div>

          <div class="card-actions mt-4">
            <button class="btn btn-success btn-sm"
              onclick="updateStatus(${job.id}, 'interview')">
              Interview
            </button>

            <button class="btn btn-error btn-sm"
              onclick="updateStatus(${job.id}, 'rejected')">
              Rejected
            </button>
          </div>

        </div>
      </div>
    `;
  });

  updateStats();
}

function updateStatus(id, newStatus) {
  const job = jobs.find((j) => j.id === id);
  job.status = newStatus;
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex((j) => j.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
    renderJobs();
  }
}

function filterJobs(type) {
  renderJobs(type);
}

function updateStats() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(
    (j) => j.status === "interview",
  ).length;
  document.getElementById("rejectedCount").innerText = jobs.filter(
    (j) => j.status === "rejected",
  ).length;
}

renderJobs();
