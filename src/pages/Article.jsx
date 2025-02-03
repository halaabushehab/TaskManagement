import React from "react";
import { Link } from "react-router-dom";

import  { useState } from 'react';

const callouts = [
  {
    name: "5 Effective Strategies for Managing Daily Tasks",
    description:
      "Overview: Managing daily tasks effectively is crucial for productivity in today’s busy world. Here are five strategies to improve your daily productivity.",
    imageSrc:
      "https://i.pinimg.com/736x/ab/dd/c4/abddc4b79f0ed54ee605528cfd0e18f0.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    date: "15 Jan",
    tags: ["Travel", "Lifestyle"],
    href: "#",
  },
  {
    name: "How to Enhance Focus in a Busy Work Environment?",
    description:
      "In busy work environments, maintaining focus can be challenging. These tips can help you overcome distractions and boost your productivity.",
    imageSrc:
      "https://i.pinimg.com/736x/47/79/f2/4779f200d02304a65221cb55d66780e9.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    date: "20 Nov",
    tags: ["Travel", "Lifestyle"],
    href: "#",
  },
  {
    name: " How to Overcome Procrastination and Achieve Your Goals?",
    description:
      " Procrastination can hinder your ability to reach your goals. Here’s how to overcome it.",
    imageSrc:
      "https://i.pinimg.com/736x/74/52/89/7452891af8e33f7026fb594dec5a2bf7.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    date: "10 DEC",
    tags: ["Self-Improvement", "Journals"],
    href: "#",
  },
  {
    name: "Daily Tip: Practice 10 Minutes of Meditation Every Day",
    description: "Daily commute essentials",
    imageSrc:
      "https://i.pinimg.com/736x/1a/3e/ae/1a3eaecbf0ee8a87b81652136a796690.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    date: "10 JAN",
    tags: ["Travel", "Essentials"],
    href: "#",
  },

  {
    name: " Organize Your Study Space for Maximum Focus",
    description: "Essential habits for academic success",
    imageSrc:"https://i.pinimg.com/736x/93/a8/9c/93a89cda198a5a5e4d770bc4e06dd931.jpg",
    imageAlt: "A neatly organized study desk with books, a laptop, and a cup of coffee.",
    date: "05 FEB",
    tags: ["Productivity", "Focus"],
    href: "#",
  },
  {
    name: " Start Your Morning with a Healthy Routine",
    description: "Simple steps to boost your energy",
    imageSrc: "https://i.pinimg.com/736x/47/c2/77/47c27715f66eabf29489d5497db527d6.jpg",
    imageAlt: "A bright morning scene with a cup of tea, notebook, and fresh fruits on a table.",
    date: "08 FEB",
    tags: ["Health", "Lifestyle"],
    href: "#",
  }
  
];









const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4; // عدد المقالات لكل صفحة

  // حساب المقالات التي ستظهر في الصفحة الحالية
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = callouts.slice(indexOfFirstArticle, indexOfLastArticle);

  // حساب عدد الصفحات الكلي
  const totalPages = Math.ceil(callouts.length / articlesPerPage);

  // التعامل مع تغيير الصفحة
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  
  return (

    
    <div className="container my-5">

        
      {/* Hero Section */}
 
<section className="container-fluid position-relative text-center text-white mb-4" style={{ minHeight: '30vh' }}>
  <img
    src="https://i.pinimg.com/736x/56/ef/94/56ef943b3f42131b44b6797143d88711.jpg"
    className="img-fluid w-100"
    alt="صورة مقالات"
    style={{ objectFit: 'cover', height: '40vh' }} // Keeps the image at 30vh
  />
  <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-4 rounded">
  <h1 className="fw-bold">Welcome to the World of Articles</h1>
  <p className="lead">Enjoy reading the latest articles and exclusive content.</p>
  </div>
</section>
    
<div className="row">
        {/* الشريط الجانبي (Sidebar) */}
        <div className="col-lg-4">
  <div className="bg-white shadow-sm rounded p-4 mb-4">
    <h5 className="font-bold mb-3" style={{ color: '#9854CB' }}>Recent Post</h5>
    <ul className="list-unstyled">
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/ab/dd/c4/abddc4b79f0ed54ee605528cfd0e18f0.jpg"
          alt="Recent Post"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#9854CB' }}>
            5 Effective Strategies for Managing Daily Tasks...
          </Link>
          <small className="d-block text-muted">January 12, 2023</small>
        </div>
      </li>
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/a4/3c/7d/a43c7dd137390042df509efa40832a86.jpg"
          alt="Recent Post"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#9854CB' }}>
            Do you think extra work will make you successful?
          </Link>
          <small className="d-block text-muted">03 Hours ago</small>
        </div>
      </li>
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/c1/22/25/c122251436a35840803f5f9adfe51ac3.jpg"
          alt="Recent Post"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#9854CB' }}>
            Is Stress physically taking over your life?
          </Link>
          <small className="d-block text-muted">03 Hours ago</small>
        </div>
      </li>
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/d6/40/ba/d640ba4cb2f7c13addcdf066d65dcd71.jpg"
          alt="Recent Post"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#9854CB' }}>Office Furniture arrangement ideas</Link>
          <small className="d-block text-muted">03 Hours ago</small>
        </div>
      </li>
    </ul>
  </div>

  <div className="bg-white shadow-sm rounded p-4 mb-4">
    <h5 className="font-bold p-4 mb-4" style={{ color: '#9854CB' }}>Tag Clouds</h5>
    <div className="d-flex flex-wrap">
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#project</span>
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#technology</span>
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#travel</span>
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#restaurant</span>
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#life style</span>
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#design</span>
      <span className="badge m-2" style={{ backgroundColor: '#B7A3F7', color: '#fff' }}>#illustration</span>
    </div>
  </div>

  <div className="bg-white shadow-sm rounded p-4 mb-4">
    <h5 className="font-bold mb-3" style={{ color: '#9854CB' }}>Instagram Feeds</h5>
    <div className="d-flex flex-wrap">
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/736x/25/81/2b/25812ba4f53180e9443e76361c9bbef9.jpg"
        alt="Instagram feed"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/736x/ab/ac/78/abac785eebadf5e4cd7f07c86907d97c.jpg"
        alt="Instagram feed"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/736x/c6/7a/44/c67a44f9c5cd7f070cfab43648215d49.jpg"
        alt="Instagram feed"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/736x/1e/77/7d/1e777d63c1a5a2d9c5f943ddb07aef92.jpg"
        alt="Instagram feed"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/736x/5f/16/82/5f1682acb6c4d19dcaa142e61e49ca54.jpg"
        alt="Instagram feed"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/736x/c4/7e/18/c47e18518150b4cd1b9401bf11d6ab65.jpg"
        alt="Instagram feed"
        style={{ width: "30%" }}
      />
    </div>
  </div>


          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold">Newsletter</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary"  style={{  backgroundColor: '#B7A3F7' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

      {/* Main Content */}
<div className="col-lg-8">
  <div className="bg-gray-100">
    <h2 className="text-2xl font-bold">Collections</h2>

    <div>
      <div className="mt-6 space-y-12">
        {currentArticles.map((callout, index) => (
          <div
            key={callout.name}
            className="bg-white rounded-lg shadow-md overflow-hidden group relative"
          >
            <Link to={`/blog/${index}`} className="block">
              <div
                className="absolute top-4 left-4"
                style={{
                  backgroundColor: '#B7A3F7',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '4px 8px',
                  borderRadius: '4px',
                }}
              >
                {callout.date}
              </div>
              <img
                alt={callout.imageAlt}
                src={callout.imageSrc}
                className="w-full h-64 object-cover group-hover:opacity-75"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold" style={{ color: '#9854CB' }}>
                  {callout.name}
                </h3>
                <p className="mt-2" style={{ color: '#666' }}>
                  {callout.description}
                </p>
              </div>
              <div className="p-6 pt-0 flex justify-between text-sm" style={{ color: '#666' }}>
                {callout.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2 py-1"
                    style={{ backgroundColor: '#B7A3F7', color: '#fff' }}
                  >
                    {tag}
                  </span>
                ))}
                <span className="flex items-center">
                  <i className="fas fa-comments mr-1"></i> 01 Comments
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-10">
        <ul className="pagination justify-center space-x-2">
          <li className={`page-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ color: '#9854CB' }}
            >
              &laquo;
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
                style={{
                  backgroundColor: currentPage === index + 1 ? '#B7A3F7' : 'transparent',
                  borderColor: currentPage === index + 1 ? '#B7A3F7' : '#ccc',
                  color: currentPage === index + 1 ? '#fff' : '#9854CB',
                  padding: '8px 12px',
                  borderRadius: '4px',
                }}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ color: '#9854CB' }}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </div>

    </div>
    </div>
    </div>

  );
};

export default Article;