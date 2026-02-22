const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote • Full-time",
    salary: "$130,000 - $175,000",
    status: "not applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA • Part-time",
    salary: "$80,000 - $120,000",
    status: "not applied",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
  },
  {
    id: 4,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
  },
  {
    id: 5,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
  },
  {
    id: 6,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
  },
  {
    id: 7,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
  },
  {
    id: 8,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "New York • Full-time",
    salary: "$90,000 - $140,000",
    status: "not applied",
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
          class="btn btn-ghost btn-sm absolute right-2 top-2">
        <span class="text-red-500">
          🗑️ <i class="fa-sharp fa-regular fa-circle-trash"></i>
        </span>
          </button>

        <div class="card-body">
          <h2 class="card-title">${job.company}</h2>
          <p class="font-medium">${job.role}</p>
          <p class="text-sm text-gray-500">
            ${job.location} • ${job.salary}
          </p>

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
