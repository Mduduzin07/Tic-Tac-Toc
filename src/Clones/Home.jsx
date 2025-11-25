import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Tic Tac Toe</h1>
          <p className="text-xl text-gray-600">
            Do you have what it takes to beat this ME
          </p>
        </div>

        {/* Play Button */}
        <div className="mb-8">
          <Link to="/game">
            <button
              className="btn btn-primary btn-lg text-lg px-8 py-4 h-auto
             bg-slate-600 hover:text-slate-600 hover:bg-white transition-all
             duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            >
              🎮 Play Game
            </button>
          </Link>
        </div>

        {/* Features */}
        {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Game Features</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
              <span className="text-gray-700">3 AI Difficulty Levels</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
              <span className="text-gray-700">Smart Unbeatable AI</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
              <span className="text-gray-700">Beautiful Modern Design</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
