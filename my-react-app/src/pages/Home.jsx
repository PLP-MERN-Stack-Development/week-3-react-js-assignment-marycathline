import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Card 1 */}
      <Card title="Welcome to MySite">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is the home page of our beautifully structured Vite + React + Tailwind app.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Card>

      {/* Card 2 */}
      <Card title="Why Choose Us">
        <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
          <li>Reusable Components</li>
          <li>Modern Layout</li>
          <li>Responsive Design</li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;
