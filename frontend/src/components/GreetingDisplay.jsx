function GreetingDisplay({ response }) {
    return (
      <>
        {response && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-300 to-teal-100 rounded-xl border border-green-100 text-center text-gray-700 font-medium animate-fade-in">
            {response}
          </div>
        )}
      </>
    );
  }
  
  export default GreetingDisplay;