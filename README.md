# Software Engineer (Backend & Data Engineering)

## Skills

**Programming Languages:** Python, JavaScript, Java, TypeScript, SQL, C, C++, PHP, Golang

**Cloud Platform:** AWS (Amazon Web Services), GCP (Google Cloud Platform)

**Data Engineering:** Apache Airflow, Apache Kafka, Apache Spark, Pandas, Numpy

**Front-End Development:** HTML, CSS, React, Bootstrap, jQuery, SASS

**Backend Development:** Node.js, Express, FastAPI, Django, Flask

**Databases:** Mongo, MySQL, Redis

**DevOps & Tools:** Linux, Git, Docker

**Automation & Web Scraping:** Selenium, Puppeteer

**Artificial Intelligence:** Large Language Model, Natural Language Processing, Computer Vision.
<br>

## Education

<div style="display: flex; align-items: center; margin-bottom: 10px;">
  <a href="https://mu.ac.in/" target="_blank"> <img src="assets/mu.jpeg" alt="Mumbai University" style="width: 30px; height: auto; margin-right: 5px;" /></a>
  <span>Bachelors of Science in Information Technology | University Of Mumbai (July 2019 - May 2022)</span>
</div>

<br>

## Work Experience
<div style="display: flex; align-items: center; margin-bottom: 10px;">
  <a href="https://findem.ai" target="_blank"> <img src="assets/findeminc_logo.jpeg" alt="Empty Logo" style="width: 30px; height: auto; margin-right: 10px;" /></a>&nbsp;&nbsp;
  <strong>Software Engineer II (Previously Data Engineering Intern & Software Engineer) | Findem (May 2021 – Present)</strong>
</div>

- Led development and optimization of scalable data infrastructure and AI-driven ingestion workflows for
the People Intelligence Platform.
- Built and scaled backend APIs, microservices, and large-scale ingestion pipelines processing 500M+
vendor records and 600M+ profile updates for enterprise clients.
- Developed 16+ automated data pipelines for profile ingestion and enrichment from platforms including
Doximity, ArtStation, Twitter/X, and other public sources.
- Built anomaly-detection pipelines leveraging AI to recreate and validate client search experiences,
helping identify inconsistencies and data discrepancies.
- Partnered with Product teams to build an AI-assisted fraud detection pipeline leveraging LLMs for
anomaly and profile-risk analysis.
- Contributed to AI-powered identity resolution services used to map and associate social media profiles
with LinkedIn entities.
- Built privacy automation APIs handling millions of opt-out and compliance-related requests, significantly
reducing manual operational overhead.
- Designed web crawlers, parsers, and workflow automation systems to improve large-scale data
acquisition reliability and throughput.
- Built and optimized internal ETL workflows to improve ingestion efficiency, monitoring, and data
consistency.
- Debugged and optimized complex multi-layer distributed systems and workflow pipelines to improve
reliability, scalability, and operational performance.
- Mentored and supported engineering initiatives around automation, data quality enforcement, and
large-scale workflow orchestration.


**Skills Used:** Apache Airflow, Docker, AWS, GCP, MongoDB, Express, TypeScript, JavaScript, Python, Flask, Git, Selenium, Puppeteer, Design Patterns, System Design
<br>

<div style="display: flex; align-items: center; margin-bottom: 10px;">
  <a href="https://github.com/nITech-ME" target="_blank"> <img src="assets/nitech_logo.png" alt="Empty Logo" style="width: 30px; height: auto; margin-right: 10px;" /></a>
  <strong>Full-Stack Developer | NiTech (July 2020 - May 2021)</strong>
</div>

- Designed, developed, and maintained the data pipeline of a web application, integrating multiple data sources with the backend powered by PHP's Laravel.
- Used Python's Selenium to scrape and extract data from various web sources, and implemented data cleaning, correlation, and merging algorithms to ensure high data quality.
- Deployed the data pipeline on a Linux server for a client based in Montenegro, ensuring smooth data transfer and seamless integration with existing systems.

**Skills Used:** Linux, MySQL, PHP, Python, Git, Selenium, React

<br>

<div style="display: flex; align-items: center; margin-bottom: 10px;">
  <img src="assets/lantern_edusport.jpg" alt="Lantern Edusport Foundation Logo" style="width: 30px; height: auto; margin-right: 10px;" />
  <strong>Program Manager Intern | Lantern Edusport Foundation (May 2020 - July 2020)</strong>
</div>

 Lantern Edusport Foundation – A nonprofit organization dedicated to promoting education and sports among underserved communities.

- Coordinated the distribution of learning materials and assigned tasks to students, adhering to a structured monthly calendar to ensure smooth program execution.
- Assessed student submissions to identify areas for improvement and provided constructive feedback to support their academic and personal development.
- Fostered open and transparent communication by actively engaging with students, addressing queries, and building a supportive learning environment.
- Prepared and delivered accurate and timely reports to stakeholders, tracking progress and milestones throughout the program.
- Conducted risk analysis for program activities, proactively identifying potential challenges and collaborating with the core team to implement effective solutions.

**Skills Used:** Teaching, Communication, Problem Solving

<br>

## Projects

### Applications Fraud Detection System
[![Project Link](https://img.shields.io/badge/Project-Link-blue)](https://www.findem.ai/blog/introducing-authenticity-suite)

Designed and developed an AI-driven fraud detection and candidate verification system to identify suspicious profiles at scale. Built data ingestion and enrichment pipelines to aggregate candidate information from multiple public sources. Leveraged Large Language Models (LLMs) for resume analysis and anomaly detection, and developed machine learning models for profile image validation and career progression plausibility checks. Applied heuristic-based filtering, automated classification, and validation workflows to improve detection accuracy, reduce false positives, and enhance profile verification reliability across large-scale candidate datasets.

**Technologies**: Python, Large Language Model(LLM), NLP, Computer Vision, REST API. 

![Fraud Detection System](/assets/findem-fraud.webp)

<br>

### AI Profile Verification System
[![Project Link](https://img.shields.io/badge/Project-Link-blue)](https://www.findem.ai/products/copilot-sourcing)

Built an AI-assisted profile verification system to validate profile freshness, identity accuracy, and email ownership across large-scale datasets. Developed automated verification workflows using pre-trained AI models and heuristic-based matching techniques to assess profile authenticity and confidence scores. Implemented entity matching and validation logic to improve verification reliability, reduce manual review effort, and enhance data quality across high-volume profile processing pipelines.

**Technologies**: Python, NLP, REST API. 

![Fraud Detection System](/assets/findem-copilot.jpeg)

<br>

### Rate Limiter
[![Project Link](https://img.shields.io/badge/Project-Link-blue)](https://github.com/shaikhsajid1111/rate-limiter)

Developed a high-performance, distributed rate-limiting library for Node.js/Express, engineered to solve the "shared-state" challenge in clustered environments. By shifting logic from the application layer to the database, the system ensures consistent throttling across multiple server instances without sacrificing speed.

Key Technical Achievements:

<b>Architectural Design</b>: Leveraged the Strategy Pattern to create a backend-agnostic core, supporting both Redis (Sliding Window Log) and Memcached (Fixed Window) providers.

<b>Atomic Operations</b>: Implemented Lua scripting in Redis to guarantee atomicity during high-concurrency bursts, successfully preventing race conditions and limit bypasses.

<b>Performance Engineering</b>: Validated via k6 load testing, achieving a throughput of 4,600+ Requests Per Second with a stable p95 latency of 16ms.

<b>Infrastructure & DevOps</b>: Containerized the entire ecosystem using Docker Compose, including the application, database cluster, and automated performance testing suite.

**Technologies**: Redis, Node.js, TypeScript, Docker, Memcached.

![Fraud Detection System](https://raw.githubusercontent.com/shaikhsajid1111/rate-limiter/refs/heads/main/rate-limiter-stats.png)

<br>

### Social Media Profile Scraper
[![Project Link](https://img.shields.io/badge/Project-Link-blue)](https://github.com/shaikhsajid1111/social-media-profile-scrapers)
![GitHub Repo stars of Social Media Profile Scrapers](https://img.shields.io/github/stars/shaikhsajid1111/social-media-profile-scrapers?style=social)



Get social media's public profile data using scripts provided in this project. Contains scripts for Facebook, Instagram, Twitter, GitHub, Medium, and Pinterest. It uses python's selenium framework.

**Technologies**: Python, Selenium and Requests.

![Social Media Scraper](/assets/social-media-scraperjpeg.jpeg)

<br>

### Twitter Scraper Selenium
[![Project Link of Twitter Scraper Selenium](https://img.shields.io/badge/Project-Link-blue)](https://github.com/shaikhsajid1111/twitter-scraper-selenium)
![GitHub Repo stars of Twitter Scraper Selenium](https://img.shields.io/github/stars/shaikhsajid1111/twitter-scraper-selenium?style=social)
[![PyPI version of Twitter Scraper Selenium](https://badge.fury.io/py/twitter-scraper-selenium.svg)](https://badge.fury.io/py/twitter-scraper-selenium)

Twitter scraper is a maintained python library to scrape data from Twitter profiles, keywords, or hashtags.
- User can get the data in JSON format or even the CSV format.
- It is a headless mode browser automation.
- It is available on PyPi as well.

**Technologies**: Python, Selenium and Requests.

![Twitter Scraper Selenium](/assets/twitter-scraper.jpeg)

<br>

### Facebook Page Scraper
[![Project Link of Facebook Page Scraper](https://img.shields.io/badge/Project-Link-blue)](https://github.com/shaikhsajid1111/facebook_page_scraper)
![GitHub Repo stars of Facebook Page Scraper](https://img.shields.io/github/stars/shaikhsajid1111/facebook_page_scraper?style=social)
[![PyPI version of Facebook Page Scraper](https://badge.fury.io/py/facebook_page_scraper.svg)](https://badge.fury.io/py/facebook_page_scraper)

Facebook Page scraper is maintained python library to extract post's data from the Facebook page's front end.
- Extract data without getting blocked even a single time, no problem with getting your IP blocked.
- Post's data can be extracted in form of JSON as well as CSV files very easily.
- Made with Python, simple to import and install via pip

**Technologies**: Python, Selenium and Requests.

![Facebook Scraper](/assets/fb_scraper.jpeg)
<br>

## Certificates

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/fcc_secondary_small.png" alt="Freecodecamp Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong><a style="font-size: 1.1em; color: #333;" href="https://freecodecamp.org/certification/sajidshaikh/responsive-web-design" target="_blank">Responsive Web Design</a></strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Freecodecamp - February 2019</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/fcc_secondary_small.png" alt="Freecodecamp Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong>
    <a style="font-size: 1.1em; color: #333;" href="https://freecodecamp.org/certification/sajidshaikh/data-visualization" target="_blank"> Data Visualization </a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Freecodecamp - March 2021</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/fcc_secondary_small.png" alt="Freecodecamp Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong>
    <a style="font-size: 1.1em; color: #333;" href="https://freecodecamp.org/certification/sajidshaikh/information-security-v7" target="_blank">Information Security </a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Freecodecamp - March 2021</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/fcc_secondary_small.png" alt="Freecodecamp Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong>
    <a style="font-size: 1.1em; color: #333;" href="https://freecodecamp.org/certification/sajidshaikh/javascript-algorithms-and-data-structures" target="_blank">Javascript Algorithms and Data Structures</a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Freecodecamp - March 2021</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/fcc_secondary_small.png" alt="Freecodecamp Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong>
    <a style="font-size: 1.1em; color: #333;" href="https://freecodecamp.org/certification/sajidshaikh/scientific-computing-with-python-v7" target="_blank">Scientific Computing with Python</a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Freecodecamp - March 2021</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/fcc_secondary_small.png" alt="Freecodecamp Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong style="font-size: 1.1em; color: #333;">
    <a style="font-size: 1.1em; color: #333;" href="https://freecodecamp.org/certification/sajidshaikh/apis-and-microservices" target="_blank">Back End Development and APIs</a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Freecodecamp - November 2020</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/HackerRank_Icon-1000px.png" alt="hackerrank Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong>
    <a style="font-size: 1.1em; color: #333;" href="https://www.hackerrank.com/certificates/b0fadb25235f" target="_blank">Rest API Certificate</a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">HackerRank - October 2020</span>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px; padding: 15px;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <img src="assets/udemy-icon.png" alt="Udemy Logo" style="width: 40px; height: auto; margin-right: 10px;" />
    <strong>
    <a style="font-size: 1.1em; color: #333;" href="https://www.udemy.com/certificate/UC-95a4d33a-1e7c-4218-a98c-d258ead5ca06/" target="_blank">Python Django Full Stack Developer</a>
    </strong>
  </div>
  <span style="font-size: 0.9em; color: #777;">Udemy - March 2021</span>
</div>

<div style="width: 50%; margin: 0 auto;">
  <hr>
</div>
