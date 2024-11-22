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
  { 
    date: 'Oct. 30, 1959', 
    title: 'Luther Jackson', 
    image: 'img/Luther-Jackson-detail.jpg', 
    description: '27-year-old Korean War veteran Luther Jackson was murdered by Philadelphia, Mississippi policeman Lawrence Rainey, who pulled Jackson from his parked car and fatally shot him. Rainey was never prosecuted and later became Neshoba County Sheriff, where he was implicated in covering up the 1964 murders of civil rights workers James Chaney, Andy Goodman, and Mickey Schwerner. Jackson’s murder, like many others, highlighted the systemic racism and police violence disproportionately targeting Black Americans during the Jim Crow era. Medgar Evers, as Mississippi NAACP field secretary, investigated Jacksons case, filing complaints and exposing the injustice to the national press in an effort to spur federal intervention. This case exemplifies how police violence and lack of accountability perpetuated fear and oppression in Black communities, fueling the broader civil rights movement.'
  },
  { 
    date: 'June 17, 1965', 
    title: ' Jackson, Mississippi', 
    description: 'Photographer Matt Herron captured a powerful moment in 1965 when a Mississippi Highway Patrolman, Hughie Kohler, tried to confiscate a U.S. flag from 5-year-old Anthony Quin during a civil rights protest in Jackson, Mississippi. Anthony and his mother, Aylene Quin, were protesting the disenfranchisement of African Americans by attempting to see Governor Paul Johnson but were denied entry and sat on the steps. The U.S. flag symbolized support for racial integration and federal law, standing in contrast to the Confederate flag, which represented opposition to civil rights. In the South, displaying the U.S. flag was a defiant act, often met with violent reactions from segregationists. Both Anthony Quin, who became Dr. Wayne Anthony Quin, and Matt Herron, the photographer, were honored for their roles in documenting and advancing civil rights.',
    image: 'img/jackson.jpg'
  },
  { 
    date: 'Feb. 8, 1968', 
    title: 'Orangeburg Massacre', 
    description: 'The Orangeburg Massacre on February 8, 1968, resulted in the deaths of three young men—Henry Smith, Samuel Hammond, and Delano Middleton—and injuries to 28 students after South Carolina state police fired on peaceful protesters at South Carolina State College. The protest, sparked by a Black Vietnam War veteran’s denial of access to a segregated bowling alley, escalated after students clashed with police, leading to a violent crackdown involving armed law enforcement and National Guard troops. Despite claims of self-defense, evidence showed the police fired without provocation, targeting unarmed students, many of whom were shot in the back or side. Cleveland Sellers, a bystander and former Student Nonviolent Coordinating Committee leader, was scapegoated, wounded, and sentenced to a year in prison for "inciting a riot," though he was pardoned 23 years later. The massacre, largely overshadowed in history, remains a tragic example of racial injustice and excessive force during the Civil Rights Movement, with no officers held accountable for the killings.',
    image: 'img/Smith-Hammond-Middleton-Orangeburg.jpg'
  },
  { 
    date: '2022 Q1', 
    title: 'Major Update', 
    description: 'Released version 2.0 with new features.',
    image: 'path/to/image4.jpg'
  },
  { 
    date: '2022 Q4', 
    title: 'Award Win', 
    description: 'Won Industry Innovation Award.',
    image: 'path/to/image5.jpg'
  },

  { 
    date: '2022 Q4', 
    title: 'Award Win', 
    description: 'Won Industry Innovation Award.',
    image: 'path/to/image5.jpg'
  },
  { 
    date: '2022 Q4', 
    title: 'Award Win', 
    description: 'Won Industry Innovation Award.',
    image: 'path/to/image5.jpg'
  },
  { 
    date: '2022 Q4', 
    title: 'Award Win', 
    description: 'Won Industry Innovation Award.',
    image: 'path/to/image5.jpg'
  },
  
  { 
    date: '2022 Q4', 
    title: 'Award Win', 
    description: 'Won Industry Innovation Award.',
    image: 'path/to/image5.jpg'
  },
  { 
    date: '2022 Q4', 
    title: 'Award Win', 
    description: 'Won Industry Innovation Award.',
    image: 'path/to/image5.jpg'
  }

  

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

  // Add the image to the modal
  const modalImageContainer = document.getElementById('modalImageContainer');
  modalImageContainer.innerHTML = `<img src="${event.image}" alt="${event.title}" class="modal-image">`;

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
