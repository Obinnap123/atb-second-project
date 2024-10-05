import { jobList } from "./data.js";

const aside = document.querySelector("aside");
const section = document.querySelector("section");
const urlParam = new URLSearchParams(window.location.search).get("id");
// Function to dynamically display each job in the jobList array

function showJobs() {
  let elem = "";
  const singleJob = jobList.find(function (job) {
    return job.id === Number(urlParam);
  });
  console.log(singleJob, urlParam);
  elem += `
    <div class="content-section">
              <div class="section-div-one">
                <h1>${singleJob.jobtitle}</h1>
                <a href="" class="btn btn-secondary">Apply</a>
              </div>
              <div class="section-div-two">
                <span class="section-div-two-span"
                  >${singleJob.secondLocation} <span class="slash">/</span> ${singleJob.company}
                  <span class="slash">/</span> INFORMATION TECHNOLOGY</span
                >
                <p>Date Posted: 20/07/202</p>
              </div>
              <hr class="mt-3" />

              <div class="main-content">
                ${singleJob.description}
                  <div class="jobinfo mt-4">
                    <p>Required Educational Level: ${singleJob["education level"]}</p>
                    <p>Experience Level: ${singleJob["experience level"]}</p>
                    <p>Job Type: ${singleJob["job type"]}</p>
                    <p>Job Type Role: ${singleJob["job role type"]}</p>
                    <p>Location: ${singleJob.thirdLocation}</p>
                    <p>Salary:${singleJob.amount} - ${singleJob.askingAmount}</p>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <a href="" class="btn btn-secondary">Apply </a>
              </div>
            </div>
    `;

  section.innerHTML = elem;
}
function jobsList() {
  let elem = "";
  jobList.forEach(function (job) {
    elem += `
    <a href="./index.html?id=${job.id}">
    <div class="p-1-15 mt-1 bb job-listing">
      <img src="${job.imagePath}" alt="" />
      <span class="sidebar-span-one">${job.jobtitle}</span><br />
      <span class="sidebar-span-two">${job.company} </span>

      <div class="location-price">
        <p class="bg-tertiary text-primary d-flex align-items-center">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="filter: brightness(1.5)"
            class="image"
          >
            <g clip-path="url(#clip0_15944_6527)">
              <path
                d="M10.5 5.5C10.5 9 6 12 6 12C6 12 1.5 9 1.5 5.5C1.5 4.30653 1.97411 3.16193 2.81802 2.31802C3.66193 1.47411 4.80653 1 6 1C7.19347 1 8.33807 1.47411 9.18198 2.31802C10.0259 3.16193 10.5 4.30653 10.5 5.5Z"
                stroke="#D62196"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 7C6.82843 7 7.5 6.32843 7.5 5.5C7.5 4.67157 6.82843 4 6 4C5.17157 4 4.5 4.67157 4.5 5.5C4.5 6.32843 5.17157 7 6 7Z"
                stroke="#D62196"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_15944_6527">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span class="ml-1" style="text-wrap: nowrap">${job.location}</span>
        </p>
        <p class="bg-tertiary text-primary d-flex">${job.Amount}</p>
      </div>
    </div>
    
    </a>
    `;
  });
  aside.innerHTML = elem;
}

jobsList();
showJobs();
