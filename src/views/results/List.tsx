import React from 'react';
import { Link } from 'wouter';

function ResultsList(){
    return <div className="px-24 py-8">
        <div className="bg-white w-full min-h-screen rounded-lg shadow-xs p-[20px]">
            <Link to="/results/1234">
                Individual
            </Link>
        </div>
    </div>
}

export default ResultsList;