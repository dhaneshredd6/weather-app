<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Weather App - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background: #f4f4f4;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code {
      background-color: #eee;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background-color: #272822;
      color: #f8f8f2;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    ul {
      padding-left: 20px;
    }
  </style>
</head>
<body>

  <h1>🌤️ Weather App using Open-Meteo API</h1>
  <p>This is a simple and responsive weather application built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. It fetches real-time weather data from the <strong>Open-Meteo API</strong> and displays the current weather conditions for a given location.</p>

  <h2>🔗 Live Demo</h2>
  <p><a href="https://your-live-demo-url.com" target="_blank">Link to your deployed project (replace with actual URL)</a></p>

  <h2>📌 Features</h2>
  <ul>
    <li>Fetches real-time weather data using Open-Meteo API</li>
    <li>Displays temperature, weather condition, wind speed</li>
    <li>User input for location or coordinates</li>
    <li>Responsive UI</li>
    <li>Error handling</li>
  </ul>

  <h2>🛠️ Technologies Used</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Open-Meteo API</li>
  </ul>

  <h2>📦 Setup and Installation</h2>
  <pre><code>git clone https://github.com/your-username/weather-app.git
cd weather-app</code></pre>
  <p>Then open <code>index.html</code> in your browser.</p>

  <h2>🔑 Open-Meteo API</h2>
  <p>This project uses the <a href="https://open-meteo.com/" target="_blank">Open-Meteo API</a> which does <strong>not</strong> require an API key.</p>
  <p><strong>Example Endpoint:</strong></p>
  <pre><code>https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true</code></pre>

  <h2>✍️ Usage</h2>
  <ol>
    <li>Open the app</li>
    <li>Enter city name or coordinates</li>
    <li>Click "Get Weather"</li>
    <li>View weather data</li>
  </ol>

  <h2>📁 File Structure</h2>
  <pre><code>weather-app/
├── index.html
├── style.css
├── script.js
└── readme.html</code></pre>

  <h2>✅ To Do / Improvements</h2>
  <ul>
    <li>7-day forecast support</li>
    <li>Weather icons</li>
    <li>Geolocation support</li>
    <li>Recent search history</li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>

  <h2>🙌 Acknowledgements</h2>
  <ul>
    <li><a href="https://open-meteo.com/" target="_blank">Open-Meteo API</a></li>
    <li><a href="https://fontawesome.com/" target="_blank">Font Awesome</a> (if used)</li>
  </ul>

  <h2>👤 Author</h2>
  <p><strong>Your Name</strong><br/>
  <a href="https://github.com/your-username" target="_blank">GitHub</a> • 
  <a href="https://your-portfolio.com" target="_blank">Portfolio</a></p>

</body>
</html>
