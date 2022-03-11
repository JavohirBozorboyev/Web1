module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container: {
      center: true,
      padding: "10px",
    },

    extend: {
      colors: {
        black: "#000",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        x4: "0px 0px 4px gray",
        x5: "0px 0px 20px gray",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  plugins: [],
};
