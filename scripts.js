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
    { date: '2020', title: 'Project Launch', description: 'Initial launch of our flagship product.' },
    { date: '2021 Q1', title: 'First Milestone', description: 'Reached 10,000 active users.' },
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
  const eventsPerPage = 3;
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
          <div class="timeline-description">${event.description}</div>
        </div>
        ${i < endIdx - 1 ? '<div class="timeline-arrow right"></div>' : ''}
      `;
  
      eventElement.innerHTML = eventHTML;
      timelineEvents.appendChild(eventElement);
  
      eventElement.addEventListener('click', function () {
        document.querySelectorAll('.timeline-event').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
      });
    }
  
    const firstEvent = document.querySelector('.timeline-event');
    if (firstEvent) firstEvent.classList.add('active');
  }
  
  function updateNavButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = (currentPage + 1) * eventsPerPage >= timelineData.length;
  }
  
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
  
  createTimelineEvents();
  updateNavButtons();
  


