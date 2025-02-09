Upcoming Book Releases - React Mini Project

📌 Project Overview

This React-based mini-project allows users to manage and display a list of upcoming book releases. Users can view books sorted by their release dates, add new books with proper validation, mark books as wishlisted, and see a countdown timer for each release with real-time updates.

🎯 Features

1️⃣ Book Listing

Displays all books with details such as title, author, genre, and release date.

Books are sorted in ascending order based on their release date.

2️⃣ Add Book Form

Users can add a new book by entering:

Title

Author

Release Date

Genre

Validation: An alert is shown if any field is left blank.

Newly added books automatically appear in the sorted list.

3️⃣ Wishlist Functionality

Users can toggle books as "Wishlisted" to mark favorites.

A button is provided to add/remove books from the wishlist.

Wishlist changes persist within the session.

4️⃣ Countdown Timer

Each book displays a countdown timer showing time left until release (in days and hours).

After release, the timer updates to "Released!" and a badge indicates the book is now available.

🔧 Tech Stack

Frontend: React.js

State Management: useState, useEffect

Styling: CSS

📂 Project Structure

📁 src
├── 📁 components
│ ├── 📄 AddBook.jsx # Form component to add new books
│ ├── 📄 BookCard.jsx # Displays individual book details & wishlist button
│ ├── 📄 CountdownTimer.jsx # Handles real-time countdown
│ ├── 📄 BookList.jsx # Displays list of books sorted by release date
│ ├── 📄 Wishlist.jsx # Handles wishlist feature
│ └── 📄 HomePage.jsx # Main component integrating all features
├── 📄 App.jsx # Root component
├── 📄 index.css # Global styles
└── 📄 index.js # Entry point

🚀 How to Run the Project

Clone the repository:

git clone https://github.com/your-username/book-releases.git
cd book-releases

Install dependencies:

npm install

Start the development server:

npm start

Open http://localhost:3000 in your browser.

🎨 UI/UX Considerations

Clean & minimal design for better readability.

Consistent styling using CSS for a polished appearance.

User-friendly interactions (e.g., alerts, smooth toggles, countdown animations).

📌 Future Enhancements

Local storage integration to persist books beyond session.

Dark mode toggle for better accessibility.

API integration to fetch upcoming book releases dynamically.
