import { useState } from 'react';
import { axiosInstance } from '../lib/axios';


function GreetingForm({ setResponse }) {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      if(!name) return setResponse('Name is required') 
      const res = await axiosInstance.get(`/greet?name=${name}`)   
      setResponse(res.data.message || res.data.error);
      setName('')
    } catch (error) {
      setResponse('An error occurred while fetching the greeting.');
    }
  };

  return (
    <div className="space-y-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Greeting
      </button>
    </div>
  );
}

export default GreetingForm;