
const Footer = () => {
    return (
        <footer className="w-full mt-10 py-4 border-t text-center text-sm text-white bg-blue-800">
            <p>&copy; {new Date().getFullYear()} Legoland. Created by Denys Holenko.</p>
            <p>Information and images provided by <a href="https://www.lego.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Lego</a>.</p>
        </footer>
    );
};

export default Footer;
