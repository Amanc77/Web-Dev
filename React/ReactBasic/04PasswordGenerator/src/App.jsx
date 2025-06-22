import react from "react";
import { useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(false);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "";
    // Define character sets
    const numbers = "0123456789";
    const characters = "!@#$%^&*()_+[]{}|;:,.<>?";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    // Build the character set based on user selections

    if (numberAllowed) {
      str += numbers;
    }
    if (characterAllowed) {
      str += characters;
    }
    if (uppercaseAllowed) {
      str += uppercase;
    }
    if (lowercaseAllowed) {
      str += lowercase;
    }
    if (str.length === 0) {
      str = numbers + characters + uppercase + lowercase; // Default to all if none selected
    }

    let generatedPassword = "";
    // Generate password of specified length

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(randomIndex);
    }
    setPassword(generatedPassword);
  }, [
    length,
    numberAllowed,
    characterAllowed,
    uppercaseAllowed,
    lowercaseAllowed,
  ]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-white">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Password Generator
          </h1>

          {/* Password Display */}
          <div className="bg-gray-700 p-3 rounded-lg mb-4 flex justify-between items-center">
            <input
              type="text"
              placeholder={password || "Generated Password"}
              className="bg-transparent outline-none w-full text-lg placeholder:text-gray-400"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyToClipboard}
              className="ml-2 px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Copy
            </button>
          </div>

          {/* Password Length */}
          <div className="mb-4">
            <div className="flex justify-center items-center mb-2 text-2xl">
              <label className="block mb-1  mr-2 font-medium">
                Password Length:
              </label>
              <label htmlFor="Length: ">{length} "</label>
            </div>
            <input
              type="range"
              min="4"
              max="50"
              value={length}
              className="w-full"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="space-y-2 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-500"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              Include Numbers
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-500"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              Include Symbols
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-500"
                onChange={() => {
                  setUppercaseAllowed((prev) => !prev);
                }}
              />
              Include Uppercase Letters
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-500"
                onChange={() => {
                  setLowercaseAllowed((prev) => !prev);
                }}
              />
              Include Lowercase Letters
            </label>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold transition"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
