import { jobList } from "./data.js";

const aside = document.querySelector("aside");
const section= document.querySelector("section")
// Function to dynamically display each job in the jobList array
function showJob() {
  let elem = "";
  jobList.forEach(function (job) {
    elem += `
    <div class="p-1-15 mt-2">
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
        <p class="bg-tertiary text-primary d-flex">${job.askingAmount}</p>
      </div>
    </div>
    <hr class="mt-1" />
    `;
  });
  aside.innerHTML = elem;
}

showJob();
