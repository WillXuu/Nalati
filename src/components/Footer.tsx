const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} 那拉提·雪山居. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          由 [您的名字或工作室] 精心打造
        </p>
      </div>
    </footer>
  );
};

export default Footer; 