# Living Legacy

Living Legacy is a React-based web platform that allows users to connect with eachother and learn more about historical figures of black history. It leverages GraphQL with Apollo Client for efficient data handling and tailwind for a responsive, user-friendly interface.

## Features

- **Chatbot**: Users can talk to AI pretending to be historical figures so that they can learn more about black history.
- **Comments**: Users have the option comment on other users posts
- **User Authentication**: The application includes user authentication for secure access to personal posts and comments.
- **Responsive Design**: Implemented using tailwind, ensuring a seamless experience across different devices.

## Technologies Used

- React.js
- MongoDB
- Express.js
- Apollo Client
- Bootstrap
- GraphQL

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm

### Installation


1. **Clone the repository**
   ```bash
   git clone [repository-url]

2. **Install dependencies**
- For the server:
cd server
npm install
- For the client:
cd ../client
npm install

## Running the Application
- Use the following command to run both the client and the server concurrently:

## File Structure

- `App.jsx`: Root component that sets up the Apollo Client and routing.
- `main.jsx`: Entry point for the React application.
- `SinglePost.jsx`: Component to isolate single posts to view comments
- `PostDisplay.jsx`: Component to display the posts from all users sorted from most recent
- `LoginForm.jsx` & `SignupForm.jsx`: Components for user authentication.
- `Navbar.jsx`: Navigation component.
- `App.css`: Stylesheet for the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
