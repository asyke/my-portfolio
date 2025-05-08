import './Footer.scss'
const Footer = () => {
    return (
      <footer className="text-center py-6 border-t mt-10 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Asylbek Ibrakhimov. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;