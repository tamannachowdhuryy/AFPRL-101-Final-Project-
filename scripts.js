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
    description: '27-year-old Korean War veteran Luther Jackson was murdered by Philadelphia, Mississippi policeman Lawrence Rainey, who pulled Jackson from his parked car and fatally shot him. Rainey was never prosecuted and later became Neshoba County Sheriff, where he was implicated in covering up the 1964 murders of civil rights workers James Chaney, Andy Goodman, and Mickey Schwerner. Jackson’s murder, like many others, highlighted the systemic racism and police violence disproportionately targeting Black Americans during the Jim Crow era. Medgar Evers, as Mississippi NAACP field secretary, investigated Jacksons case, filing complaints and exposing the injustice to the national press in an effort to spur federal intervention. This case exemplifies how police violence and lack of accountability perpetuated fear and oppression in Black communities, fueling the broader civil rights movement.(zinnedproject)'
  },
  { 
    date: 'June 17, 1965', 
    title: ' Jackson, Mississippi', 
    description: 'Photographer Matt Herron captured a powerful moment in 1965 when a Mississippi Highway Patrolman, Hughie Kohler, tried to confiscate a U.S. flag from 5-year-old Anthony Quin during a civil rights protest in Jackson, Mississippi. Anthony and his mother, Aylene Quin, were protesting the disenfranchisement of African Americans by attempting to see Governor Paul Johnson but were denied entry and sat on the steps. The U.S. flag symbolized support for racial integration and federal law, standing in contrast to the Confederate flag, which represented opposition to civil rights. In the South, displaying the U.S. flag was a defiant act, often met with violent reactions from segregationists. Both Anthony Quin, who became Dr. Wayne Anthony Quin, and Matt Herron, the photographer, were honored for their roles in documenting and advancing civil rights.(zinnedproject)',
    image: 'img/jackson.jpg'
  },
  { 
    date: 'Feb. 8, 1968', 
    title: 'Orangeburg Massacre', 
    description: 'The Orangeburg Massacre on February 8, 1968, resulted in the deaths of three young men—Henry Smith, Samuel Hammond, and Delano Middleton—and injuries to 28 students after South Carolina state police fired on peaceful protesters at South Carolina State College. The protest, sparked by a Black Vietnam War veteran’s denial of access to a segregated bowling alley, escalated after students clashed with police, leading to a violent crackdown involving armed law enforcement and National Guard troops. Despite claims of self-defense, evidence showed the police fired without provocation, targeting unarmed students, many of whom were shot in the back or side. Cleveland Sellers, a bystander and former Student Nonviolent Coordinating Committee leader, was scapegoated, wounded, and sentenced to a year in prison for "inciting a riot," though he was pardoned 23 years later. The massacre, largely overshadowed in history, remains a tragic example of racial injustice and excessive force during the Civil Rights Movement, with no officers held accountable for the killings.(zinnedproject)',
    image: 'img/Smith-Hammond-Middleton-Orangeburg.jpg'
  },

  { 
    date: 'April 6, 1968', 
    title: 'Bobby Hutton Killed by Oakland Police', 
    description: 'Robert James "Bobby" Hutton (Apr 21, 1950 – Apr 6, 1968) was the first recruit and treasurer of the Black Panther Party (BPP). Born in Arkansas, Huttons family moved to Oakland, California, as part of the Great Migration, escaping racial violence in the South. On April 6, 1968, at just 17 years old, Hutton was killed during a shootout with Oakland police, despite having surrendered. He was shot over twelve times. Since 1998, "Lil Bobby Hutton Day" has been held annually in DeFremery Park, West Oakland, to honor his legacy. His life and death highlight the struggles of the Black Panther Party, COINTELPRO, and systemic policing issues.(zinnedproject)',
    image: 'img/63106.webp'
  },

  { 
    date: 'Nov. 25, 2006', 
    title: 'Sean Bell Murdered', 
    description: 'Sean Elijah Bell (1983–2006) was tragically killed on November 25, 2006, in Queens, New York, the night of his bachelor party and just a day before his wedding. Bell and his two friends, Trent Benefield and Joseph Guzman, were shot at a total of 50 times by five NYPD officers, both in uniform and undercover. Bell died from his injuries, while Benefield and Guzman were severely wounded. The incident highlighted the systemic issue of police violence disproportionately affecting communities of color. Educator Renee Watson reflects on how Bells story resonates deeply in classrooms, sharing her experiences teaching about his death in her article The Murder of Sean Bell: From Pain to Poetry. Watson recalls a seventh grader voicing a fear of being unjustly shot by the police during a class discussion on hopes and fears for their community. Students expressed a desire for better schools, safer neighborhoods, and peace, but also acknowledged the presence of violence, drugs, bullying, and police brutality. Bells death continues to serve as a focal point in discussions about systemic racism, police accountability, and the broader movement for Black lives. It underscores the urgent need for justice and reform to address the pervasive inequities faced by marginalized communities.(zinnedproject)',
    image: 'img/Sean_Bell_Nicole_Paultre_and_their_daughter.jpg'
  },

  { 
    date: '2002–2010', 
    title: 'Aggregated Data on Police Killings in Los Angeles County', 
    description: 'Between 2002 and 2010 from Civic Responses to Police Violence by Desmond A and Jonathan T., Los Angeles County experienced a troubling pattern of police violence, with 294 officer-involved killings documented during this period. These killings disproportionately affected Black and Hispanic communities, with Black individuals being six times more likely to be killed by police compared to white individuals, reflecting long-standing racial inequities in law enforcement practices. Alarmingly, 17% of the victims were unarmed, with some incidents resulting from misinterpreted threats, such as mistaking a water hose nozzle for a weapon. Despite the severity of these cases, none of the involved officers faced criminal charges, highlighting systemic failures in accountability and justice. Adding to the injustice, only 18% of these killings were covered by the media, leaving most incidents invisible to the broader public and amplifying the sense of neglect felt by affected communities. However, these tragedies often became catalysts for civic engagement, as residents in neighborhoods closest to the killings showed significant increases in voter registration and turnout, particularly among Black and Hispanic populations. This political mobilization underscored the community’s demand for systemic change and accountability. While these killings reflected a pervasive pattern of racial injustice and unchecked police power, they also sparked critical conversations and reform efforts, such as ballot measures like Proposition 66 and Proposition 5, which aimed to reduce sentencing severity and reform drug penalties. This period in Los Angeles County’s history illustrates both the enduring impact of police violence on marginalized communities and their resilience in transforming grief and outrage into political action. (Police and Protests: The Inequity of Police Responses to Racial Justices Demonstrations by Sandhya Kajeepeta and Daniel K.N. Johnson ',
    image: 'img/graph1.webp'
  },

  { 
    date: 'Aug. 9, 2014', 
    title: 'Michael Brown Killed by Police', 
    description: 'On August 9, 2014, Michael Brown, an African American teenager, was fatally shot by Darren Wilson, a white police officer, in Ferguson, Missouri. Brown had recently graduated from high school and was preparing to start a program in heating and air conditioning repair at Vatterott College. His death, occurring under contentious circumstances, sparked nationwide protests and became a catalyst for the Black Lives Matter movement, highlighting issues of systemic racism and police brutality.Four years after Browns death, on August 7, 2018, Wesley Bell, a city council member, won the Democratic primary for St. Louis County prosecutor, defeating seven-term incumbent Bob McCulloch. McCulloch had been criticized for failing to secure an indictment against Wilson. This political shift was seen as a response to the widespread demand for accountability and justice following Browns death. Michael Browns legacy continues to fuel activism and reforms aimed at addressing racial inequities in policing and the justice system. (zinnedproject)',
    image: 'img/Michael_Brown_grad-335x256.jpg'
  },
  { 
    date: 'July 11, 2020', 
    title: 'Donavan La Bella', 
    description: 'On July 11, 2020, Donavan La Bella, a 26-year-old protester in Portland, Oregon, was participating in a racial justice demonstration against police violence. Standing with his hands raised, he held a speaker playing the song "Black Lives Matter" by Dax. Federal officers deployed a smoke or tear gas canister toward him, which he attempted to move away. Moments later, an officer fired an impact munition that struck La Bella in the face, fracturing his skull and causing severe injuries, including permanent brain damage that affected his cognitive abilities and impulse control. This incident exemplifies the excessive force disproportionately used during racial justice protests, as highlighted in the Thurgood Marshall Institutes analysis of police responses. The tragedy of La Bella’s injuries underscores the inequity of law enforcement actions during demonstrations calling for racial equity and justice.(Civic Responses to Police Violence by Desmond Ang and  Jonathan Tebes',
    image: 'img/orlando.webp'
  },
  
  { 
    date: 'May 24, 2022', 
    title: 'Uvalde School Shooting', 
    description: 'On May 24, 2022, a tragic mass shooting occurred at Robb Elementary School in Uvalde, Texas, where 19 children and 2 teachers were killed while nearly 400 law enforcement officers stood by without intervening. The school, attended predominantly by Latinx students, suffered unimaginable loss, including 9-year-old Uziyah Garcia, 10-year-olds Amerie Jo Garza, Jose Flores, Xavier Lopez, and Annabell Guadalupe Rodriguez, as well as fourth-grade teachers Eva Mireles and Irma Garcia. The massacre, which occurred just 10 days after another mass shooting in Buffalo, was the deadliest school shooting in nearly a decade, following the 2012 Sandy Hook Elementary School tragedy. The gunman reportedly purchased one of his weapons on his 18th birthday earlier that month. The community and the nation were left reeling, with memorials of flowers and toys erected to honor the victims and calls for accountability for the lack of police intervention. The incident reignited national debates on gun control, school safety, and law enforcements responsibilities during crises. The event has since been remembered through documentaries and discussions, including Democracy Now!s analysis of the Uvalde tragedy and its broader social and political implications. (zinnedproject)',
    image: 'img/Uvalde-Mass-Shooting-Robb-Elementary-650x366.jpg'
  },

  

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

