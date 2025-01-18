import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-500 pb-6">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">YourCompany</h2>
            <p className="text-sm text-gray-400 mt-2">
              Empowering your success through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:info@yourcompany.com"
                  className="hover:underline text-indigo-400"
                >
                  info@yourcompany.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <span className="font-medium">Address:</span> 123 Main Street,
                YourCity, YourCountry
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <span className="font-medium">Follow us:</span>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
               Facebook
              </a>{" "}
              {" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>{" "}
               {" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
               Instagram
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} YourCompany. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
