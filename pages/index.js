
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "Plot",
    budget: "",
    purpose: "Home",
    date: "",
    time: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{
      fontFamily: "Arial",
      background: "#f3f5fa",
      minHeight: "100vh",
      color: "#172554"
    }}>
      <header style={{
        background: "#10264a",
        color: "white",
        padding: "28px 20px"
      }}>
        <h1>Gaurav Real Estate</h1>
        <p>Your Property. Your Future.</p>
        <p>Raipur, Chhattisgarh</p>
      </header>

      <section style={{ padding: 20 }}>
        <h2>Find Your Dream Property 🏡</h2>
        <p>
          Plots | Flats | Duplex | Investment
        </p>

        <div style={{
          background: "white",
          padding: 18,
          borderRadius: 14,
          marginTop: 20
        }}>
          <h2>Our Projects</h2>

          <h3>Mahadev Vihar</h3>
          <p>Old Dhamtari Road, Raipur</p>

          <hr />

          <h3>Shivalaya Park</h3>
          <p>Pirda, near KPS School, Raipur</p>
        </div>

        <div style={{
          background: "white",
          padding: 18,
          borderRadius: 14,
          marginTop: 20
        }}>
          <h2>🤖 AI Property Assistant</h2>
          <p>
            Namaste! Aap apni property requirement
            batayein. Hamari team aapko suitable
            property aur site visit mein help karegi.
          </p>

          <form onSubmit={submit}>
            <h3>Your Name</h3>
            <input
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={update}
              required
              style={inputStyle}
            />

            <h3>Mobile Number</h3>
            <input
              name="phone"
              placeholder="10 digit mobile number"
              value={form.phone}
              onChange={update}
              type="tel"
              pattern="[0-9]{10}"
              required
              style={inputStyle}
            />

            <h3>Property Type</h3>
            <select name="property" value={form.property}
              onChange={update} style={inputStyle}>
              <option>Plot</option>
              <option>Flat</option>
              <option>Duplex</option>
              <option>Commercial</option>
            </select>

            <h3>Your Budget</h3>
            <input
              name="budget"
              placeholder="Example: 15-25 lakh"
              value={form.budget}
              onChange={update}
              required
              style={inputStyle}
            />

            <h3>Buying Purpose</h3>
            <select name="purpose" value={form.purpose}
              onChange={update} style={inputStyle}>
              <option value="Home">For my home</option>
              <option value="Investment">Investment</option>
              <option value="Commercial">Business</option>
            </select>

            <h3>Preferred Site Visit Date</h3>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={update}
              style={inputStyle}
            />

            <h3>Preferred Time</h3>
            <select name="time" value={form.time}
              onChange={update} style={inputStyle}>
              <option value="">Select time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <button type="submit" style={{
              ...inputStyle,
              background: "#173d77",
              color: "white",
              border: 0,
              marginTop: 20
            }}>
              Request Site Visit
            </button>
          </form>

          {submitted && (
            <div style={{
              background: "#e4f8e9",
              padding: 15,
              borderRadius: 10,
              marginTop: 15
            }}>
              <h3>Thank you, {form.name}!</h3>
              <p>
                Your demo enquiry has been received
                on this page. Database connection is
                still pending.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer style={{
        background: "#10264a",
        color: "white",
        padding: 22,
        textAlign: "center"
      }}>
        <h3>Gaurav Sansare</h3>
        <p>Real Estate Consultant</p>
        <p>+91 7974894460</p>
      </footer>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: 13,
  marginTop: 5,
  border: "1px solid #ccc",
  borderRadius: 8,
  boxSizing: "border-box",
  fontSize: 16
};
