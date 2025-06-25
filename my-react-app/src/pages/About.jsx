import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Card 1 */}
      <Card title="About Us">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This page was created to demonstrate reusable React components in action. 
          We use Tailwind CSS and a Layout wrapper to keep everything neat and structured.
        </p>
      </Card>

      {/* Card 2 */}
      <Card title="Our Mission">
        <p className="text-gray-700 dark:text-gray-300">
          To build accessible, maintainable, and scalable front-end applications with simplicity and joy.
        </p>
      </Card>
    </div>
  );
};

export default About;
