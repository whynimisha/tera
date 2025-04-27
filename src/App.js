import React, { useState } from "react";
import "./App.css";

const SustainableFashionGuide = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", message: "" });

  const [showRecycleOptions, setShowRecycleOptions] = useState(false);
  const [recycleFormOpen, setRecycleFormOpen] = useState(false);
  const [recycleInfo, setRecycleInfo] = useState({
    name: "",
    phone: "",
    pinCode: "",
    clothesCount: ""
  });

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setShowRecycleOptions(false);
    setRecycleFormOpen(false);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${contactInfo.name}!`);
    setContactInfo({ name: "", email: "", message: "" });
  };

  const handleRecycleClick = () => {
    setRecycleFormOpen(true); // Show the form when Recycle is clicked
    setShowRecycleOptions(false); // Hide the Recycle options
  };

  return (
    <div className="container background-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#" onClick={() => handleMenuClick("home")}>Home</a>
          <a href="#" onClick={() => handleMenuClick("about")}>About</a>
          <a href="#" onClick={() => handleMenuClick("tips")}>Tips & Guide</a>
          <a href="#" onClick={() => handleMenuClick("brands")}>Sustainable Brands</a>
        </div>

        <div className="nav-right">
          <span className="icon">🤍</span>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Content Display */}
      <div className="content">
        {activeSection === "home" && (
          <div>
            <header className="header">
              <h1>🌿 Sustainable Fashion Guide</h1>
              <p>Make eco-conscious fashion choices</p>
            </header>

            <section className="card-container">
              <div className="card" onClick={() => setShowRecycleOptions(true)}>
                <h2>♻ Recycle/Upcycle</h2>
                <p>Learn how to recycle and upcycle old clothes and fabrics.</p>
              </div>

              <div className="card" onClick={() => alert("You clicked Purchase!")}>
                <h2>🛍 Shop</h2>
                <p>Buy eco-friendly and sustainable fashion items.</p>
              </div>

              <div className="card" onClick={() => alert("You clicked Donation!")}>
                <h2>🎁 Donation</h2>
                <p>Donate unused clothes to help those in need.</p>
              </div>
            </section>

            {/* Show Recycle or Upcycle Options below Cards */}
            {showRecycleOptions && (
              <div className="options-popup">
                <h3>Select an Option:</h3>
                <button onClick={handleRecycleClick}>Recycle</button>
                <button onClick={() => alert("Upcycle option coming soon!")}>Upcycle</button>
              </div>
            )}

            {/* Recycle Form */}
            {recycleFormOpen && (
              <form className="recycle-form" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We will reach out to you soon.");
                setRecycleFormOpen(false);
                setRecycleInfo({ name: "", phone: "", pinCode: "", clothesCount: "" });
              }}>
                <h3>Recycle Clothes</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={recycleInfo.name}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={recycleInfo.phone}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, phone: e.target.value })}
                  required
                />
                <input
                  type="text"
                  name="pinCode"
                  placeholder="Pin Code"
                  value={recycleInfo.pinCode}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, pinCode: e.target.value })}
                  required
                />
                <input
                  type="number"
                  name="clothesCount"
                  placeholder="Number of Clothes"
                  value={recycleInfo.clothesCount}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, clothesCount: e.target.value })}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            )}

            {/* Text Section that appears after scrolling */}
            <section className="sustainability-text-section">
              <h2>Your One Stop Ground for Sustainability</h2>
              <p>
                We are dedicated to helping you make sustainable fashion choices that benefit both the planet and people.
                Join the movement towards a more eco-friendly wardrobe.
              </p>
            </section>

            {/* Footer Contact Section */}
            <section className="contact-section">
              <div className="contact-column">
                <h2>About Us</h2>
                <p>Company</p>
                <p>Blogs</p>
                <p>Sustainability</p>
                <p>Stores</p>
              </div>

              <div className="contact-column">
                <h2>Help</h2>
                <p>Track Order</p>
                <p>Returns and Refund</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>User Policy</p>
                <p>FAQ</p>
              </div>

              <div className="contact-column">
                <h2>Contact Us</h2>
                <p>📧 terra@gmail.com</p>
              </div>

              <div className="contact-column">
                <h2>Follow Us</h2>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="social-icon"
                  />
                </a>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SustainableFashionGuide;