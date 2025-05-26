# HealthTech Reminder System

A modern web application for managing patient appointments and sending automated reminders. Built with HTML, CSS, and JavaScript.

https://mohamedbashir2093.github.io/mara/

## Features

- 📝 Add and manage patient appointments
- 🕒 Schedule appointments with date and time
- 🔔 Generate appointment reminders
- 📱 Mobile-responsive design
- 🎨 Modern and clean user interface
- 💾 Local data storage (in-memory)

## Tech Stack

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for development)

### Installation

1. Clone the repository:
```bash
git clone  https://github.com/MohamedBashir2093/mara.git
```

2. Navigate to the project directory:
```bash
cd health-reminder-app
```

3. Open `index.html` in your web browser:
```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node's http-server
npx http-server
```

## Usage

### Adding a Patient

1. Fill in the patient details:
   - Patient Name
   - Phone Number
   - Appointment Date
   - Appointment Time

2. Click "Add Patient" to save the information

### Managing Appointments

- View all patients in the "Patients List" section
- Each patient entry shows:
  - Name
  - Appointment Date
  - Appointment Time
  - Generate Reminder button

### Generating Reminders

1. Find the patient in the list
2. Click "Generate Reminder"
3. The reminder will appear in the "Reminders" section

## Project Structure

```
health-reminder-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Data Structure

### Patient Object
```javascript
{
  id: number,
  name: string,
  phone: string,
  appointmentDate: string,
  appointmentTime: string
}
```

### Reminder Object
```javascript
{
  id: number,
  patientId: number,
  message: string,
  sentStatus: boolean,
  channel: string,
  timestamp: string
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add data persistence (localStorage or backend)
- [ ] Implement email notifications
- [ ] Add appointment editing functionality
- [ ] Add patient search and filtering
- [ ] Implement appointment calendar view
- [ ] Add user authentication
- [ ] Add appointment cancellation feature

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for the icons
- Modern CSS techniques for the UI
- Vanilla JavaScript for the functionality

## Contact



Project Link: https://mohamedbashir2093.github.io/mara/
