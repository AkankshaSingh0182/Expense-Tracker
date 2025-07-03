// App.js or HomePage.js
import React from 'react';
import './Home.css'; // External CSS file


function HomePage() {
  return (
    <div className="container">
      
      <main className="main-content">
        <section className="text-section">
          <h2>Welcome to Expensify!</h2>
          <p>
            Keep track of your expenses easily and manage your finances
            effectively with our user-friendly expense tracker.
          </p>
        </section>

        <section className="image-section">
          <img src="https://media.licdn.com/dms/image/v2/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=L4d5P81GijVgU4u1yJtFLVsIqATkfWTrymEPSd_C6_o" alt="Expense Illustration" />
        </section>
      </main>
    </div>
  );
}

export default HomePage;