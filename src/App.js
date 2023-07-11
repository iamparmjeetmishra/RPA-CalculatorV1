import React from "react";
import "./index.css";
import Button from "./components/button";
export const App = () => {
  return (
    <div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <button var> text</button>
      <div class="">
        <div class="p-5 text-white text-center text-3xl bg-purple-900">
          <span class="text-orange-500">Calcu</span>lator
        </div>
        <div class="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">
          2000 + 100
        </div>
        <div class="p-5 text-white text-right text-3xl bg-purple-800">
          = <span class="text-orange-500">2100</span>
        </div>

        <div class="flex items-stretch bg-purple-900 h-24">
          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              %
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              (
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              )
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              ÷
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-purple-900 h-24">
          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              7
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              8
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              9
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              ×
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-purple-900 h-24">
          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              4
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              5
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              6
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              -
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-purple-900 h-24">
          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              1
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              2
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              3
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              +
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-purple-900 h-24 mb-4">
          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              +
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              0
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              .
            </button>
          </div>

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
