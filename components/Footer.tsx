import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-grey">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-near-black">AI4I.ai</h3>
            <p className="text-soft-grey mt-2 text-sm">Championing Ireland's AI-powered future.</p>
          </div>
          <div>
            <h4 className="font-semibold text-near-black tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="text-soft-grey hover:text-near-black transition-colors">About Us</a></li>
              <li><a href="#sectors" className="text-soft-grey hover:text-near-black transition-colors">Key Sectors</a></li>
              <li><a href="#news" className="text-soft-grey hover:text-near-black transition-colors">Headlines</a></li>
              <li><a href="#" className="text-soft-grey hover:text-near-black transition-colors">Get Involved</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-near-black tracking-wide">Connect</h4>
            <p className="text-soft-grey mt-4 text-sm">Stay up to date with the latest from the Irish tech scene.</p>
            {/* Social media icons would go here */}
          </div>
        </div>
        <div className="mt-12 border-t border-border-grey pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI4I.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;