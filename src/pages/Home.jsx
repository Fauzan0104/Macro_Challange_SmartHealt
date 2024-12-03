import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Home() {
    return (
        <>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Healthy Life</title>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                      body {
                        font-family: 'Roboto', sans-serif;
                      }
                      .card:hover {
                        transform: scale(1.05);
                        transition: transform 0.3s ease-in-out;
                      }
                      .card img {
                        object-fit: cover;
                        height: 200px;
                        width: 100%;
                      }
                      .card-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 100%;
                      }
                      .card a {
                        display: block;
                        padding: 12px;
                        background-color: #2f8555;
                        color: white;
                        text-align: center;
                        font-weight: bold;
                        text-decoration: none;
                        border-radius: 8px;
                        transition: background-color 0.3s ease, transform 0.3s ease;
                      }
                      .card a:hover {
                        background-color: #276749;
                        transform: scale(1.05);
                      }
                      /* Custom Dropdown Style */
                      .dropdown {
                        position: relative;
                        display: inline-block;
                      }
                      .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: white;
                        min-width: 160px;
                        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
                        z-index: 1;
                        border-radius: 8px;
                        margin-top: 8px;
                        transition: opacity 0.3s ease;
                      }
                      .dropdown:hover .dropdown-content {
                        display: block;
                        opacity: 1;
                      }
                      .dropdown-content a {
                        color: #333;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block;
                        text-align: left;
                      }
                      .dropdown-content a:hover {
                        background-color: #f1f1f1;
                      }
                    `,
                }}
            />
           
            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-start mb-4">
                    <button className="text-green-600 text-2xl">
                        <i className="fas fa-arrow-left" />
                    </button>
                </div>
                <h1 className="text-center text-3xl font-bold text-green-700 mb-8">
                    Resep Makanan Sehat
                </h1>
                {/* Card Grid with horizontal layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    <div className="card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all mb-16">
                        <div className="card-content">
                            <img
                                alt="Sandwich on a wooden board"
                                className="w-full rounded-lg shadow-md mb-4"
                                src="https://storage.googleapis.com/a1aa/image/AtiTDXgoT4YFIFFLSCJpkeimbv5a2hv877YNt6BzW28y5H5JA.jpg"
                            />
                            <Link to="/sarapan" className="hover:bg-green-700">
                                Sarapan
                            </Link>
                        </div>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all mb-16">
                        <div className="card-content">
                            <img
                                alt="Fried chicken on a plate"
                                className="w-full rounded-lg shadow-md mb-4"
                                src="https://storage.googleapis.com/a1aa/image/ieiqRwgqQhSJNSueNcAPvJiXhFA84xlNEbG4fTAtSkGHnfIPB.jpg"
                            />
                            <Link to="/makansiang" className="hover:bg-green-700">
                                Makan Siang
                            </Link>
                        </div>
                    </div>
                    <div className="card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all mb-16">
                        <div className="card-content">
                            <img
                                alt="Dinner table with various dishes"
                                className="w-full rounded-lg shadow-md mb-4"
                                src="https://storage.googleapis.com/a1aa/image/G2QE5vY9ZFaxK9g0iyrzINTePRffRsW2Dw0FtFsv0gYDnfIPB.jpg"
                            />
                            <Link to="/makanmalam" className="hover:bg-green-700">
                                Makan Malam
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">© 2024 Healthy Life. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
