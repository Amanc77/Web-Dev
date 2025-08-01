import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "../components/InputBox";

function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-900">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount=""
                currencyOptions={["usd", "inr", "eur"]} // sample options
                onCurrencyChange={() => {}}
                onAmountChange={() => {}}
                selectedCurrency="usd"
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => {}}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <InputBox
                label="to"
                currencyOptions={["usd", "inr", "eur"]} // sample options
                amount=""
                onCurrencyChange={() => {}}
                selectedCurrency="inr"
                amountDisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert USD to INR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
