const Footer = () => {
  return (
    <footer className="w-full h-4 mt-4 flex items-center justify-center border-t-2">
      <span className="text-xs font-mono font-medium">
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
