function showDetails(itemNumber) {
    const details = document.getElementById(`details-${itemNumber}`);
    const isVisible = details.style.display === 'block';
    
    // Hide all other details
    const allDetails = document.querySelectorAll('.timeline-details');
    allDetails.forEach(detail => detail.style.display = 'none');
    
    // Toggle the selected detail
    details.style.display = isVisible ? 'none' : 'block';
}
const timelineData = [
  { date: 'Oct. 30, 1959', title: 'Luther Jackson Murdered', description: '27-year-old Korean War veteran Luther Jackson was murdered by Philadelphia, Mississippi policeman Lawrence Rainey, who pulled Jackson from his parked car and fatally shot him. Rainey was never prosecuted and later became Neshoba County Sheriff, where he was implicated in covering up the 1964 murders of civil rights workers James Chaney, Andy Goodman, and Mickey Schwerner. Jackson’s murder, like many others, highlighted the systemic racism and police violence disproportionately targeting Black Americans during the Jim Crow era. Medgar Evers, as Mississippi NAACP field secretary, investigated Jacksons case, filing complaints and exposing the injustice to the national press in an effort to spur federal intervention. This case exemplifies how police violence and lack of accountability perpetuated fear and oppression in Black communities, fueling the broader civil rights movement.' },
  { date: 'Oct. 30, 1959', title: 'First Milestone', description: 'Reached 10,000 active users.' },
  { date: '2021 Q3', title: 'Expansion', description: 'Expanded to international markets.' },
  { date: '2022 Q1', title: 'Major Update', description: 'Released version 2.0 with new features.' },
  { date: '2022 Q4', title: 'Award Win', description: 'Won Industry Innovation Award.' },
  { date: '2023 Q2', title: 'Partnership', description: 'Strategic partnership with key industry players.' },
  { date: '2023 Q4', title: 'Technology Upgrade', description: 'Implemented AI-powered features.' },
  { date: '2024 Q1', title: 'Global Recognition', description: 'Reached 1 million active users.' }
];

const timelineEvents = document.getElementById('timelineEvents');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const modal = document.getElementById('eventModal');
const closeModal = document.getElementById('closeModal');

const eventsPerPage = 5;
let currentPage = 0;

function createTimelineEvents() {
  timelineEvents.innerHTML = '';
  const startIdx = currentPage * eventsPerPage;
  const endIdx = Math.min(startIdx + eventsPerPage, timelineData.length);

  for (let i = startIdx; i < endIdx; i++) {
    const event = timelineData[i];
    const eventElement = document.createElement('div');
    eventElement.className = 'timeline-event';

    const eventHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${event.date}</div>
        <div class="timeline-title">${event.title}</div>
      </div>
    `;

    eventElement.innerHTML = eventHTML;
    timelineEvents.appendChild(eventElement);

    eventElement.addEventListener('click', () => {
      openModal(event); // Open the modal with event data
    });
  }
}

function openModal(event) {
  document.getElementById('modalTitle').textContent = event.title;
  document.getElementById('modalDate').textContent = event.date;
  document.getElementById('modalDescription').textContent = event.description;

  modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    createTimelineEvents();
    updateNavButtons();
  }
});

nextBtn.addEventListener('click', () => {
  if ((currentPage + 1) * eventsPerPage < timelineData.length) {
    currentPage++;
    createTimelineEvents();
    updateNavButtons();
  }
});

function updateNavButtons() {
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = (currentPage + 1) * eventsPerPage >= timelineData.length;
}

// Initial Setup
createTimelineEvents();
updateNavButtons();
