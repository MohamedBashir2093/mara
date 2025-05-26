const patientForm = document.getElementById('patientForm');
const patientList = document.getElementById('patientList');
const reminderList = document.getElementById('reminderList');

let patients = [];
let reminders = [];

patientForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;

  const patient = { 
    id: Date.now(), 
    name, 
    phone, 
    appointmentDate, 
    appointmentTime 
  };
  
  patients.push(patient);
  displayPatients();
  patientForm.reset();
});

function displayPatients() {
  patientList.innerHTML = '';
  if (patients.length === 0) {
    patientList.innerHTML = '<li class="empty-state">No patients found. Add a new patient to get started.</li>';
    return;
  }

  patients.forEach(patient => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>
        <strong>${patient.name}</strong> 
        <span class="badge"><i class='fa-solid fa-calendar-days'></i> ${patient.appointmentDate}</span> 
        <span class="badge"><i class='fa-solid fa-clock'></i> ${patient.appointmentTime || 'Not set'}</span>
      </span>
    `;
    const generateBtn = document.createElement('button');
    generateBtn.innerHTML = '<i class="fa-solid fa-bell"></i> Generate Reminder';
    generateBtn.onclick = () => generateReminder(patient);
    li.appendChild(generateBtn);
    patientList.appendChild(li);
  });
}

function generateReminder(patient) {
  const message = `Hi ${patient.name}, this is a reminder for your appointment on ${patient.appointmentDate} at ${patient.appointmentTime || 'the scheduled time'}. We look forward to seeing you! Thank you for choosing our clinic.`;
  
  const reminder = {
    id: Date.now(),
    patientId: patient.id,
    message,
    sentStatus: false,
    channel: 'SMS',
    timestamp: new Date().toISOString()
  };
  
  reminders.push(reminder);
  displayReminders();
}

function displayReminders() {
  reminderList.innerHTML = '';
  if (reminders.length === 0) {
    reminderList.innerHTML = '<li class="empty-state">No reminders generated yet.</li>';
    return;
  }

  reminders.forEach(reminder => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="reminder-content">
        <p class="reminder-message">${reminder.message}</p>
      </div>
    `;
    reminderList.appendChild(li);
  });
}
