import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiDollarSign, FiUsers, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import '../styles/App.css';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Jaipur, Rajasthan",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹8-15 LPA",
      description: "Develop user-facing features using React.js, build reusable components and front-end libraries."
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹12-20 LPA",
      description: "Design and implement machine learning models, work on NLP and computer vision projects."
    },
    {
      id: 3,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Jaipur, Rajasthan",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-12 LPA",
      description: "Monitor security systems, conduct vulnerability assessments, and implement security protocols."
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹5-10 LPA",
      description: "Create user-centered designs, conduct user research, and design wireframes and prototypes."
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Analytics",
      location: "Jaipur, Rajasthan",
      type: "Full-time",
      experience: "3-7 years",
      salary: "₹10-18 LPA",
      description: "Analyze complex datasets, build predictive models, and provide data-driven insights."
    },
    {
      id: 6,
      title: "Project Manager",
      department: "Operations",
      location: "Jaipur, Rajasthan",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹15-25 LPA",
      description: "Lead project teams, manage timelines and budgets, and ensure successful project delivery."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health insurance coverage",
    "Flexible work hours",
    "Remote work options",
    "Learning & development budget",
    "Paid time off and holidays",
    "Latest tech equipment",
    "Team events and outings"
  ];

  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="careers-hero section">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Join Our Team</h1>
            <p className="hero-subtitle">
              Build the future of technology with us. We're looking for passionate individuals 
              who want to make a difference.
            </p>
            <motion.a 
              href="#openings"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Join Goklyn Technologies?</h2>
            <p className="section-description">
              We offer more than just a job - we offer a career with purpose and growth.
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FiCheck className="benefit-icon" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="jobs-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Current Openings</h2>
            <p className="section-description">
              Explore opportunities to grow with us. We're always looking for talented individuals.
            </p>
          </motion.div>

          <div className="jobs-container">
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={job.id}
                className="job-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-badge">{job.department}</div>
                </div>
                
                <div className="job-details">
                  <div className="job-detail">
                    <FiMapPin />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <FiBriefcase />
                    <span>{job.type}</span>
                  </div>
                  <div className="job-detail">
                    <FiCalendar />
                    <span>{job.experience}</span>
                  </div>
                  <div className="job-detail">
                    <FiDollarSign />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-actions">
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.button>
                  <button className="btn btn-outline">View Details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Hiring Process</h2>
            <p className="section-description">
              Simple, transparent, and designed to find the best talent.
            </p>
          </motion.div>

          <div className="process-steps">
            {[
              { number: "01", title: "Application", desc: "Submit your resume and portfolio" },
              { number: "02", title: "Screening", desc: "Initial phone/email screening" },
              { number: "03", title: "Interview", desc: "Technical and cultural interviews" },
              { number: "04", title: "Assignment", desc: "Practical task or project" },
              { number: "05", title: "Offer", desc: "Welcome to the team!" }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="process-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;