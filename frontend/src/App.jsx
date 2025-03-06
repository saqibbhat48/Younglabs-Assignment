import GreetingForm from './components/GreetingForm';
import GreetingDisplay from './components/GreetingDisplay';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 transform transition-all hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Greeting App
        </h1>
        <GreetingForm setResponse={setResponse} />
        <GreetingDisplay response={response} />
      </div>
    </div>
  );
}

export default App;