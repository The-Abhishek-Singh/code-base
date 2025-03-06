

"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Comprehensive dataset for search (courses and other services)
  const searchData = [
    // Courses
    { 
      title: 'Web Development Course',
      slug: 'WEB-DEVELOPMENT',
      type: 'course',
      description: 'Learn modern web development techniques',
    },
    { 
      title: 'DATA SCIENCE & AI', 
      slug: 'DATA-SCIENCE-&-AI',
      type: 'course',
      description: 'Master data science and artificial intelligence concepts',
    },
    { 
      title: 'INDUSTRIAL AUTOMATION', 
      slug: 'INDUSTRIAL-AUTOMATION',
      type: 'course',
      description: 'Learn about industrial automation systems',
    },
    { 
      title: 'CYBER SECURITY', 
      slug: 'CYBER-SECURITY',
      type: 'course',
      description: 'Defend systems against cyber threats',
    },
    { 
      title: 'AWS DEVOPS', 
      slug: 'AWS-DEVOPS',
      type: 'course',
      description: 'Master AWS cloud and DevOps practices',
    },
    { 
      title: 'Application Development', 
      slug: 'Application-Development',
      type: 'course',
      description: 'Build powerful applications across platforms',
    },
    { 
      title: 'CLOUD COMPUTING', 
      slug: 'CLOUD-COMPUTING',
      type: 'course',
      description: 'Master cloud infrastructure and services',
    },
    { 
      title: 'ETHICAL HACKING', 
      slug: 'ETHICAL-HACKING',
      type: 'course',
      description: 'Learn ethical hacking and penetration testing',
    },
    { 
      title: 'INFORMATION SECURITY', 
      slug: 'INFORMATION-SECURITY',
      type: 'course',
      description: 'Protect information systems and data',
    },
    
    // Services
    {
      title: 'SOFTWARE DEVELOPMENT & EXPORT SERVICES',
      slug: 'SOFTWARE-DEVELOPMENT-&-EXPORT-SERVICES',
      type: 'service',
      description: 'Professional web development services for businesses',
    },
    {
      title: 'CYBERSECURITY SERVICES',
      slug: 'CYBERSECURITY-SERVICES',
      type: 'service',
      description: 'Custom mobile application development for iOS and Android',
    },
    {
      title: 'CLOUD SOLUTIONS & MIGRATION',
      slug: 'CLOUD-SOLUTIONS-&-MIGRATION',
      type: 'service',
      description: 'Migrate your infrastructure to cloud platforms',
    },
    {
      title: 'IT TRAINING & CERTIFICATION',
      slug: 'IT-TRAINING-&-CERTIFICATION',
      type: 'service',
      description: 'Expert IT consultation for organizations',
    },
    {
      title: 'Study Abroad',
      slug: 'Study-Abroad',
      type: 'service',
      description: 'Expert IT consultation for organizations',
    },
    {
      title: 'Work Abroad',
      slug: 'Work-Abroad',
      type: 'service',
      description: 'Expert IT consultation for organizations',
    },
    {
      title: 'E-COMMERCE SOLUTIONS',
      slug: 'E-COMMERCE-SOLUTIONS',
      type: 'service',
      description: 'Expert IT consultation for organizations',
    },
    {
      title: 'UI/UX DESIGN SERVICES',
      slug: 'UI-UX-DESIGN-SERVICES',
      type: 'service',
      description: 'Expert IT consultation for organizations',
    },
    {
      title: 'IT INFRASTRUCTURE MANAGEMENT',
      slug: 'IT-INFRASTRUCTURE-MANAGEMENT',
      type: 'service',
      description: 'Expert IT consultation for organizations',
    },
  ];

  useEffect(() => {
    const query = searchParams.get('q'); // Get the query from the URL
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    } else {
      // Clear results if no query is present
      setResults([]);
      setNoResults(false);
      
      // Focus the search input if no query
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }, [searchParams]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const performSearch = (query) => {
   
    setNoResults(false);
    setErrorMessage('');
    
    // Simulate network delay for a more realistic experience
    setTimeout(() => {
      try {
        // First try exact match on slug (case-insensitive)
        const exactSlugMatch = searchData.find(item => 
          item.slug.toLowerCase() === query.toLowerCase()
        );
        
        if (exactSlugMatch) {
          // If we have an exact slug match, redirect immediately based on type
          console.log(`Found exact slug match: ${exactSlugMatch.title}, slug: ${exactSlugMatch.slug}, type: ${exactSlugMatch.type}`);
          redirectToItem(exactSlugMatch);
          return;
        }
        
        // Then try title/description matches
        const filteredResults = searchData.filter(item => 
          (item.title?.toLowerCase().includes(query.toLowerCase()) || 
          item.description?.toLowerCase().includes(query.toLowerCase()))
        );

        if (filteredResults.length > 0) {
          // Store results
          setResults(filteredResults);
          
          // Get the best match
          const bestMatch = filteredResults[0];
          console.log(`Found match: ${bestMatch.title}, slug: ${bestMatch.slug}, type: ${bestMatch.type}`);
          
          // Direct redirect to the appropriate page based on type
          redirectToItem(bestMatch);
        } else {
          // No results found
          setNoResults(true);
        }
      } catch (error) {
        console.error("Search error:", error);
        setErrorMessage('An error occurred during search. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 0); // Short delay for better user experience
  };

  // Generate suggestions as the user types
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setSearchQuery(userInput);
    
    // Generate suggestions only if we have at least 2 characters
    if (userInput.length >= 2) {
      const suggestionResults = searchData
        .filter(item => 
          item.title.toLowerCase().includes(userInput.toLowerCase()) || 
          item.description?.toLowerCase().includes(userInput.toLowerCase())
        )
        .slice(0, 6); // Limit to 6 suggestions
        
      setSuggestions(suggestionResults);
      setShowSuggestions(true);
      setActiveSuggestion(0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;
    
    // Arrow down
    if (e.keyCode === 40) {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev >= suggestions.length - 1 ? 0 : prev + 1
      );
    }
    // Arrow up
    else if (e.keyCode === 38) {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev <= 0 ? suggestions.length - 1 : prev - 1
      );
    }
    // Enter
    else if (e.keyCode === 13) {
      e.preventDefault();
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        redirectToItem(suggestions[activeSuggestion]);
        setShowSuggestions(false);
      } else if (searchQuery.trim()) {
        // If no suggestion is selected but search query exists
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
    }
    // Escape
    else if (e.keyCode === 27) {
      setShowSuggestions(false);
    }
  };

  // Select a suggestion with mouse click
  const handleSuggestionClick = (suggestion) => {
    redirectToItem(suggestion);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Helper function to redirect based on item type
  const redirectToItem = (item) => {
    let path;
    
    switch (item.type) {
      case 'course':
        path = `/courses/${item.slug}`;
        break;
      case 'service':
        path = `/services/${item.slug}`;
        break;
      default:
        path = `/courses/${item.slug}`; // Default to courses for backward compatibility
    }
    
    // Navigate to the appropriate path
    router.push(path);
  };

  // Get type label for display
  const getTypeLabel = (type) => {
    switch (type) {
      case 'course': return 'Course';
      case 'service': return 'Service';
      default: return 'Item';
    }
  };

  return (
    <div className="w-full">
      {/* Search input with autocomplete */}
      <div className="relative mb-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative flex-grow">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
              placeholder="Search courses, services..."
              className="w-full px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search"
            />
            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <ul 
                ref={suggestionsRef}
                className="absolute z-50 w-full bg-white mt-1 border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto"
              >
                {suggestions.map((suggestion, index) => (
                  <li 
                    key={suggestion.slug}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                      index === activeSuggestion ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseEnter={() => setActiveSuggestion(index)}
                  >
                    <div>
                      <div className="font-medium">{suggestion.title}</div>
                      <div className="text-sm text-gray-600">
                        <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded text-xs mr-2">
                          {getTypeLabel(suggestion.type)}
                        </span>
                        {suggestion.description?.substring(0, 60)}{suggestion.description?.length > 60 ? '...' : ''}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
      
      {/* Loading state */}
      {/* {loading && (
        <div className="text-center py-8">
          <p className="text-lg">Searching for "{searchQuery}"...</p>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      )} */}
      
      {/* Error state */}
      {errorMessage && (
        <div className="text-center py-8 text-red-600">
          <p className="text-lg font-medium">{errorMessage}</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => router.push('/')}
          >
            Browse All Offerings
          </button>
        </div>
      )}
      
      {/* No results state */}
      {noResults && !errorMessage && (
        <div className="text-center py-8">
          <p className="text-lg font-medium">No results found matching "{searchQuery}"</p>
          <div className="flex justify-center gap-4 mt-4">
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => router.push('/courses')}
            >
              Browse Courses
            </button>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => router.push('/services')}
            >
              View Services
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;