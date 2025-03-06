"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Local dataset for search
  const localData = [
    { 
      title: 'Web Development Course',
      slug: 'WEB-DEVELOPMENT'
    },
    { 
      title: 'Data Science Fundamentals', 
      imageSrc: '/path/to/datascience.jpg',
      description: 'Master data analysis and visualization',
      slug: 'data-science'
    },
    { 
      title: 'UI/UX Design', 
      imageSrc: '/path/to/uiux.jpg',
      description: 'Create beautiful and functional user interfaces',
      slug: 'ui-ux-design'
    },
    { 
      title: 'Machine Learning Basics', 
      imageSrc: '/path/to/ml.jpg',
      description: 'Introduction to AI and machine learning concepts',
      slug: 'machine-learning'
    },
    { 
      title: 'Career Development', 
      imageSrc: '/path/to/career.jpg',
      description: 'Advance your professional career with expert guidance',
      slug: 'career-development'
    }
  ];

  useEffect(() => {
    const query = searchParams.get('q'); // Get the query from the URL
    if (query) {
      setSearchQuery(query);
      performLocalSearch(query);
    }
  }, [searchParams]);

const performLocalSearch = (query) => {
    setLoading(true);
    
    // Simulate network delay for a more realistic experience
    setTimeout(() => {
        const filteredResults = localData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredResults.length > 0) {
            console.log(`Redirecting to: /courses/${filteredResults[0].slug}`); // Debugging statement
            // Redirect to the first matching course page
            router.push(`/courses/${filteredResults[0].slug}`);
        } else {
            setResults(filteredResults);
        }
        setLoading(false);
    }, 0);

  };

  return (
    <div className="w-full">
  
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div 
              key={index} 
            
              onClick={() => router.push(`/courses/${result.slug}`)}
            >
            
              
            </div>
          ))
        ) : (
          !loading && <p className="col-span-full text-center py-8">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
