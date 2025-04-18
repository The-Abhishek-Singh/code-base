import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Form from '@/components/course/Forms';
import Button from '@/components/course/Button';
import DevOpsSkills from '@/components/course/DevOpsSkills';
import CourseSection from '@/components/course/CourseSection';
import CourseRoadmap from '@/components/course/CourseRoadmap';
import FAQSection from '@/components/course/FAQSection';
import FeeStructure from '@/components/course/FeeStructure';
import { FaChartBar, FaChartLine, FaUsers, FaRobot, FaHashtag, FaMoneyBillWave } from 'react-icons/fa';
import ScrollReveal from '@/components/ScrollReveal';


function page(){
  const reviews = [
    {
      initials: "A",
      name: "Aman Sharma",
      review: "This course is a must for anyone preparing for system design interviews! The real-world case studies on Uber, Netflix, and WhatsApp helped me understand how large-scale applications work. The explanations on microservices and database scaling were crystal clear. Highly recommended!.",
      rating: 5,
    },
    {
      initials: "P",
      name: "Priya Desai",
      review: "Great content with detailed coverage of caching, message queues, and load balancing. The instructor explained concepts in a structured way, making them easy to grasp. I just wish there were more coding exercises to practice system design problems.",
      rating: 4,
    },
    {
      initials: "R",
      name: "Rahul Verma",
      review: "As a backend developer, this course helped me improve my architectural thinking. Learning about CAP theorem, database sharding, and security best practices gave me a deeper understanding of system scalability. Definitely worth it!.",
      rating: 5,
    },
  ]
  const projects = [
    {
      icon: <FaChartBar className='text-white text-3xl' />,
      title: "Data Analytics Dashboard ",
      description: "Build an interactive analytics dashboard using Python, Pandas, and visualization tools like Tableau or PowerBI. Extract insights from complex datasets and create compelling visualizations that drive data-informed decision-making."
    },
    {
      icon: <FaChartLine className='text-white text-3xl' />,
      title: "Market Trend Analysis",
      description: "Analyze market data to identify emerging trends and patterns using R or Python. Apply time series analysis, regression models, and forecasting techniques to predict future market movements and provide actionable business recommendations."
    },
    {
      icon: <FaUsers className='text-white text-3xl' />,
      title: "Customer Segmentation Analysis",
      description: "Use clustering algorithms and demographic data to segment customers into meaningful groups. Implement K-means and RFM analysis to identify high-value customer segments and develop targeted marketing strategies."
    },
    {
      icon: <FaRobot className='text-white text-3xl' />,
      title: "Predictive Analytics Model",
      description: "Develop machine learning models to predict business outcomes using historical data. Apply classification, regression, and ensemble methods to forecast sales, customer churn, or product demand with scikit-learn and TensorFlow."
    },
    {
      icon: <FaHashtag className='text-white text-3xl' />,
      title: "Social Media Analytics",
      description: "Analyze social media data to extract user sentiment and engagement patterns. Use NLP techniques and sentiment analysis to process text data, identify trends, and measure campaign effectiveness across multiple platforms."
    },
    {
      icon: <FaMoneyBillWave className='text-white text-3xl' />,
      title: "Financial Data Analysis",
      description: "Perform comprehensive analysis of financial data to identify investment opportunities and risks. Create financial models, conduct ratio analysis, and develop interactive reports to support investment decisions and portfolio management."
    }
    ];
  const courseDesc = [
    {
      title: 'High-Demand Data Analytics Roles',
      description: 'Be job-ready for roles like Data Analyst, Data Engineer, and Business Intelligence Analyst with this comprehensive data analytics program built for today’s data-driven world.'
    },
    {
      title: 'Certification-Driven Learning',
      description: 'Prepare for industry-recognized certifications like Microsoft PL-300, Google Data Analytics, and AWS Data Analytics—with structured modules, hands-on projects, quizzes, and expert mentoring to boost your success.'
    },
    {
      title: 'Hands-On Data Analytics Mastery',
      description: 'Gain real-world experience with tools like SQL, Excel, Power BI, and Python. Clean and analyze datasets, build dashboards, and uncover insights that drive decisions. Practice like a pro—hands-on.'
    }
  ];
    const courses1 = [
      {
        title: "Python Basics",
        duration: "1 Week",
        description: "This course covers fundamental Python programming concepts essential for beginners and those seeking to strengthen their foundation. Students will learn core Python syntax, built-in data structures, and basic operations while developing practical coding skills applicable to various domains including scripting, automation, and application development.",
        topics: {
          "The print statement": "Basic syntax, String formatting, Multiple arguments, End and separator parameters",
          "Comments": "Single-line comments, Multi-line comments, Docstrings, Best practices",
          "Python Data Structures & Data Types": "Lists, Dictionaries, Tuples, Sets, Numbers, Strings, Boolean",
          "String Operations in Python": "Concatenation, Slicing, Formatting, String methods",
          "Simple Input & Output": "Input function, Command-line arguments, File handling, Standard streams",
          "Simple Output Formatting": "F-strings, Format method, String modulo operator, Template strings",
          "Deep copy": "Copy module, Deep copying collections, Custom object copying, Performance considerations",
          "Shallow copy": "List slicing, Dictionary copy method, Shallow copy limitations, Nested data structures",
          "Operators in python": "Arithmetic, Logical, Comparison, Assignment, Bitwise, Identity, Membership"
        }
      },
      {
        title: "Business Statistics",
        duration: "1 Week",
        description: "Business Statistics provides essential analytical tools for data-driven decision making in corporate environments. This course focuses on statistical methods used to analyze business data, interpret results, and draw meaningful conclusions. Students will learn fundamental statistical concepts, probability theory, hypothesis testing, and regression analysis to solve real-world business problems and support strategic planning.",
        topics: {
          "Introduction to Statistical Analysis": "Types of data, Descriptive vs. Inferential statistics, Statistical thinking in business, Measuring central tendency and dispersion",
          "Counting, Probability, and Probability Distributions": "Basic counting principles, Probability rules, Normal distribution, Binomial and Poisson distributions",
          "Sampling Distributions": "Central limit theorem, Standard error, Sampling techniques, Confidence intervals",
          "Estimation and Hypothesis Testing": "Point and interval estimation, Null and alternative hypotheses, Type I and Type II errors, p-values and significance levels",
          "Scatter Diagram": "Interpreting scatter plots, Identifying relationships, Outliers detection, Visualization techniques",
          "Anova and Chisquare": "One-way and two-way ANOVA, F-test interpretation, Chi-square test of independence, Goodness-of-fit tests",
          "Imputation Techniques": "Handling missing data, Mean/median imputation, Regression imputation, Multiple imputation methods",
          "Data Cleaning": "Identifying data quality issues, Handling outliers, Data transformation, Standardization and normalization",
          "Correlation and Regression": "Correlation coefficients, Simple linear regression, Multiple regression analysis, Model evaluation and diagnostics"
        }
      },
      {
        title: "Introduction to Data Analytics",
        duration: "1 Week",
        description: "Data Analytics is an essential discipline that enables organizations to extract meaningful insights from raw data. This course provides a comprehensive foundation in data analytics concepts, methodologies, and applications across industries. Students will learn the different types of analytics approaches, data interpretation techniques, and how analytics drives business decision-making and strategic planning.",
        topics: {
          "Data Analytics Overview": "Definition, History of data analytics, Analytics lifecycle, Industry applications",
          "Importance of Data Analytics": "Business value creation, Data-driven decision making, Competitive advantage, Performance optimization",
          "Types of Data Analytics": "Classification of analytics methods, Comparison of approaches, Use case selection, Implementation considerations",
          "Descriptive Analytics": "Historical data analysis, Summary statistics, Data visualization, KPI development",
          "Diagnostic Analytics": "Root cause analysis, Correlation vs. causation, Investigation methods, Anomaly detection",
          "Predictive Analytics": "Forecasting techniques, Predictive modeling, Machine learning applications, Pattern recognition",
          "Prescriptive Analytics": "Optimization methods, Decision modeling, Recommendation systems, Automated decision-making",
          "Benefits of Data Analytics": "Cost reduction, Faster decision making, Risk mitigation, Revenue growth opportunities",
          "Data Visualization for Decision Making": "Visualization principles, Chart selection, Interactive dashboards, Storytelling with data",
          "Data Types, Measure Of central tendency, Measures of Dispersion": "Categorical vs numerical data, Mean/median/mode, Standard deviation, Range and IQR",
          "Graphical Techniques, Skewness & Kurtosis, Box Plot": "Histograms, Distribution shapes, Outlier identification, Visual data analysis",
          "Descriptive Stats": "Statistical summaries, Data profiling, Variable relationships, Cross-tabulation analysis",
          "Sampling Funnel, Sampling Variation, Central Limit Theorem, Confidence interval": "Sample selection methods, Distribution of sample means, Statistical inference, Margin of error"
        }
      }
    ];
    const courses2 = [
      {
        title: "Excel: Basics ",
        duration: "1 Month",
        description: "Microsoft Excel is a powerful spreadsheet application widely used for data analysis, financial modeling, and business reporting. This comprehensive course takes students from Excel fundamentals to advanced techniques, covering essential functions, data manipulation, visualization, and automation to enhance productivity and analytical capabilities in professional environments.",
        topics: {
          "Excel tutorial": "Interface navigation, Workbook structure, Basic formatting, Keyboard shortcuts",
          "Text to Columns": "Delimiter selection, Fixed width splitting, Advanced options, Data cleanup",
          "Concatenate": "String joining methods, Multiple cell combinations, Error handling, Text manipulation",
          "The Concatenate Function": "Syntax and parameters, Formula construction, Alternative methods, Practical applications",
          "The Right Function with Concatenation": "Text extraction techniques, Combined function usage, Character counting, Format conversion",
          "Absolute Cell References": "$A$1 notation, Mixed references, Formula copying, Reference management",
          "Data Validation": "Input restrictions, Drop-down lists, Custom validation rules, Error alerts",
          "Time and Date Calculations": "Date functions, Duration calculations, Working days, Custom date formats",
          "Conditional Formatting": "Rule types, Visual indicators, Formula-based conditions, Managing multiple rules",
          "Exploring Styles and Clearing Formatting": "Cell styles, Style inheritance, Format clearing options, Style management",
          "Using Conditional Formatting to Hide Cells": "Visual hiding techniques, Custom formatting rules, Zero-height rows, White text methods",
          "Using the IF Function": "Logical tests, TRUE/FALSE conditions, Nested IF statements, Error trapping",
          "Changing the \"Value if false\" Condition to Text": "Text outputs, Multiple conditions, Combining with other functions, Format considerations",
          "Pivot Tables": "Data source preparation, Table structure, Field configuration, Refresh options",
          "Creating a Pivot Table": "Data selection, Field arrangement, Value summarization, Layout options",
          "Specifying PivotTable Data": "Data source management, External data connections, Field selection, Dynamic ranges",
          "Changing a PivotTables Calculation": "Value field settings, Custom calculations, Summarization methods, Number formatting",
          "Filtering and Sorting a PivotTable": "Filter fields, Slicer implementation, Sort orders, Top/bottom filters",
          "Creating a PivotChart": "Chart type selection, Field mapping, Visual customization, Interactive elements",
          "Grouping Items": "Date grouping, Numeric grouping, Custom groups, Hierarchy creation",
          "Updating a PivotTable": "Data refresh techniques, Automatic updates, Change detection, Source modifications",
          "Formatting a PivotTable": "Style applications, Custom formatting, Banded rows/columns, Conditional formats",
          "Using Slicers": "Slicer creation, Multi-selection, Visual customization, Connections to multiple PivotTables",
          "Charts": "Chart types overview, Data selection, Chart elements, Design principles",
          "Creating a Simple Chart": "Basic chart creation, Data range selection, Chart positioning, Quick analysis tools",
          "Charting Non-Adjacent Cells": "Discontinuous range selection, Custom data series, Series formula editing, Organization techniques",
          "Creating a Chart Using the Chart Wizard": "Step-by-step process, Chart customization, Advanced options, Finalizing charts",
          "Modifying Charts": "Element editing, Data range changes, Design adjustments, Format options",
          "Moving an Embedded Chart": "Positioning techniques, Sheet relocation, Chart objects, Alignment tools",
          "Sizing an Embedded Chart": "Dimension adjustment, Aspect ratio, Precision sizing, Print considerations",
          "Changing the Chart Type": "Type conversion, Mixed chart types, Appropriate visualization selection, Format preservation",
          "Chart Types": "Column, Bar, Line, Pie, Scatter, Area, Surface, Radar, Treemap, Sunburst",
          "Changing the Way Data is Displayed": "Axis scaling, Data labels, Trendlines, Secondary axes",
          "Moving the Legend": "Legend positioning, Custom legend entries, Format customization, Visibility options"
        }
      },
      {
        title: "Excel: Advanced",
        duration: "1 Month",
        description: "Advanced Excel skills are critical for data analysis, financial modeling, and business intelligence. This comprehensive course builds on Excel fundamentals to explore sophisticated features including advanced charting, data analysis techniques, range management, lookup functions, and pivot table mastery, enabling professionals to handle complex data manipulation tasks efficiently.",
        topics: {
          "Formatting Charts": "Custom chart templates, Advanced formatting options, Theme customization, Professional chart styling",
          "Adding Chart Items": "Axis titles, Data labels, Error bars, Trendlines, Secondary axes, Chart annotations",
          "Formatting All Text": "Global text styles, Font schemes, Conditional text formatting, Text rotation and alignment",
          "Formatting and Aligning Numbers": "Custom number formats, Currency display options, Data alignment techniques, Decimal precision control",
          "Formatting the Plot Area": "Background customization, Gridlines configuration, Plot area borders, 3D effects management",
          "Formatting Data Markers": "Custom marker styles, Data point customization, Series overlap settings, Gap width adjustments",
          "Pie Charts": "Pie chart variations, Donut charts, Exploded views, Percentage vs. value display options",
          "Creating a Pie Chart": "Data selection strategies, Optimal data arrangement, Category grouping techniques, Proper data proportions",
          "Moving the Pie Chart to its Own Sheet": "Chart sheet creation, Sheet organization, Navigation enhancements, Printing optimization",
          "Adding Data Labels": "Label position options, Data label content selection, Custom label formatting, Multi-level labeling",
          "Exploding a Slice of a Pie Chart": "Single slice explosion, Multiple slice adjustments, Percentage offset control, Visual emphasis techniques",
          "Data Analysis − Overview": "Analysis principles, Excel analysis capabilities, Statistical methods, Data interpretation approaches",
          "Types of Data Analysis": "Descriptive analysis, Inferential analysis, Predictive modeling, What-if scenario planning",
          "Data Analysis Process": "Data collection, Data cleaning, Analysis methodology, Result interpretation and presentation",
          "Working with Range Names": "Named range benefits, Dynamic ranges, Name scope management, Formula readability improvements",
          "Copying Name using Formula Autocomplete": "Autocomplete techniques, Efficient formula building, Name selection shortcuts, Cross-sheet referencing",
          "Range Name Syntax Rules": "Naming conventions, Invalid characters, Reserved names, Name length limitations",
          "Creating Range Names": "Different methods for creating names, Range name dialog, Name from selection, Table-based naming",
          "Creating Names for Constants": "Formula-defined constants, Workbook constants, Global constants, Constant referencing",
          "Managing Names": "Name manager interface, Bulk name operations, Name auditing, Scope visualization",
          "Scope of a Name": "Workbook-level names, Sheet-level names, Scope conflicts, Precedence rules",
          "Editing Names": "Name modification techniques, Reference updates, Scope changes, Name dependency management",
          "Applying Names": "Converting cell references to names, Apply names dialog, Formula updates, Name application options",
          "Using Names in a Formula": "Name-based formulas, Name validation, Error handling with names, Complex name references",
          "Viewing Names in a Workbook": "Name listing methods, Usage identification, Reference tracing, Dependency visualization",
          "Copying Formulas with Names": "Preserving name references, Relative vs. absolute name usage, Cross-sheet formula copying, Name adaptation",
          "Difference between Tables and Ranges": "Table advantages, Structured references, Dynamic expansion, Table vs. range functionality",
          "Create Table": "Table creation process, Header row options, Table sizing considerations, Source data preparation",
          "Table Name": "Naming conventions, Name uniqueness, Table name usage, References using table names",
          "Managing Names in a Table": "Structured references, Column header references, Formula construction, Table element navigation",
          "Table Headers replacing Column Letters": "Structured reference syntax, Header-based formulas, Formula readability, Dynamic column references",
          "Propagation of a Formula in a Table": "Auto-fill behavior, Column formula consistency, Formula adjustments, Reference management",
          "Resize Table": "Manual resizing, Automatic expansion, Header row preservation, Data inclusion management",
          "Remove Duplicates": "Duplicate detection settings, Unique value identification, Column-based deduplication, Data preprocessing",
          "Convert to Range": "Table conversion process, Reference preservation, Format retention, Post-conversion management",
          "Table Style Options": "Banded rows/columns, Header row formatting, Total row customization, First/last column emphasis",
          "Table Styles": "Built-in style gallery, Custom table styles, Conditional formatting integration, Corporate style matching",
          "Cleaning Data with Text Functions": "TRIM, CLEAN, SUBSTITUTE, REPLACE, Text parsing techniques, Character removal strategies",
          "Removing Unwanted Characters from Text": "Space elimination, Control character removal, Special character handling, Consistent text formatting",
          "Extracting Data Values from Text": "Text parsing functions, Regular expressions, Text-to-columns alternatives, Pattern-based extraction",
          "Formatting Data with Text Functions": "PROPER, UPPER, LOWER, concatenation techniques, Case transformation, Text standardization",
          "Date Formats": "Custom date formats, International date standards, Date component extraction, Date conversion techniques",
          "Conditional Formatting": "Advanced rules, Icon sets, Data bars, Color scales, Multi-condition formatting, Formula-based conditions",
          "Sorting": "Multi-level sort criteria, Custom sort lists, Case-sensitive sorting, Sorting with formulas, Sort by color/icon",
          "Filtering": "Advanced filter criteria, Custom filters, Filter by selection, Complex conditions, Wildcard filtering",
          "Lookup Functions": "VLOOKUP, HLOOKUP, INDEX-MATCH, XLOOKUP, Approximate vs. exact matching, Lookup array optimization",
          "Pivoting": "Advanced pivot table techniques, Calculated fields, Report layouts, Grouping options, Multiple data sources, Power Pivot integration"
        }
      },
      {
        title: "SQL Database Management",
        duration: "1 Month",
        description: "SQL is the standard language for relational database management systems. This course covers Oracle Database fundamentals, data manipulation, query optimization, and database administration to help you effectively manage and retrieve data.",
        topics: {
          "Introduction to Oracle Database": "Database concepts, Architecture, Installation",
          "Retrieve Data using the SQL SELECT Statement": "Basic queries, Column aliases, Concatenation",
          "Learn to Restrict and Sort Data": "WHERE clause, ORDER BY, Comparison operators",
          "Usage of Single-Row Functions to Customize Output": "Character, Number, Date functions",
          "Invoke Conversion Functions and Conditional Expressions": "TO_CHAR, TO_DATE, CASE statements",
          "Aggregate Data Using the Group Functions": "SUM, AVG, COUNT, GROUP BY, HAVING",
          "Display Data from Multiple Tables Using Joins": "INNER, OUTER, SELF joins",
          "Use Sub-Queries to Solve Queries": "Single-row, Multiple-row subqueries",
          "The SET Operators": "UNION, INTERSECT, MINUS",
          "Data Manipulation Statements": "INSERT, UPDATE, DELETE, MERGE",
          "Use of DDL Statements to Create and Manage Tables": "CREATE, ALTER, DROP commands",
          "Other Schema Objects": "Views, Sequences, Indexes, Synonyms",
          "Control User Access": "Privileges, Roles, Security policies",
          "Management of Schema Objects": "Table maintenance, Constraints",
          "Manage Objects with Data Dictionary Views": "System catalogs, Metadata queries",
          "Manipulate Large Data Sets": "Bulk operations, Performance considerations",
          "Data Management in Different Time Zones": "Timestamp with timezone, Conversions",
          "Retrieve Data Using Sub-queries": "Correlated subqueries, Inline views",
          "Regular Expression Support": "REGEXP functions, Pattern matching"
        }
      },
    ];
    const courses3 = [
      {
        title: "Tableau Course Material",
        duration: "1 Month",
        description: "Tableau is a powerful data visualization tool that enables users to create interactive and shareable dashboards. This course covers connection to various data sources, data manipulation techniques, and visualization best practices to help analysts effectively communicate insights through visual representations.",
        topics: {
          "Start Page": "Navigation overview, Interface fundamentals",
          "Show Me": "Visualization recommendations, Chart selection guide",
          "Connecting to Excel Files": "Import methods, Data source configuration",
          "Connecting to Text Files": "CSV handling, Delimiter options, Text formatting",
          "Connect to Microsoft SQL Server": "Database connections, SQL queries, Live connection vs extract",
          "Connecting to Microsoft Analysis Services": "OLAP cubes, Dimensions, Measures",
          "Creating and Removing Hierarchies": "Custom hierarchies, Drill-down functionality",
          "Bins": "Data grouping, Range creation, Distribution analysis",
          "Joining Tables": "Inner joins, Left joins, Data relationships",
          "Data Blending": "Multi-source visualization, Primary and secondary sources"
        }
      },
      {
        title: "Learn Tableau Basic Reports",
        duration: "1 Month",
        description: "Tableau Basic Reports focuses on essential reporting techniques to transform data into meaningful visualizations. This course covers parameters, grouping methods, sets, data organization, and formatting options to help analysts create professional, insightful reports for effective data communication.",
        topics: {
          "Parameters": "Dynamic inputs, User interactivity, Parameter controls",
          "Grouping Example 1": "Basic grouping techniques, Manual grouping, Group visualization",
          "Grouping Example 2": "Advanced grouping methods, Automatic grouping options",
          "Edit Groups": "Modifying existing groups, Group management, Renaming",
          "Set": "Creating custom sets, Fixed sets, Condition-based sets",
          "Combined Sets": "Set operations, Unions, Intersections, Set actions",
          "Creating a First Report": "Report structure, Layout options, Best practices",
          "Data Labels": "Label formatting, Customization, Dynamic labeling",
          "Create Folders": "Organizing fields, Folder management, Workspace optimization",
          "Sorting Data": "Sort options, Custom sorts, Hierarchical sorting",
          "Add Totals, Sub Totals and Grand Totals to Report": "Summary calculations, Table calculations, Aggregation methods"
        }
      },
      {
        title: "Learn Tableau Charts",
        duration: "1 Month",
        description: "Visualization charts are fundamental to effective data storytelling and analysis. This course covers a comprehensive range of Tableau chart types from basic to advanced, teaching you when and how to use each visualization technique. Master these charts to transform complex data into clear, compelling visual insights.",
        topics: {
          "Area Chart": "Filled time series, Stacked areas, Showing volumes over time",
          "Bar Chart": "Categorical comparisons, Standard bars, Horizontal and vertical orientation",
          "Box Plot": "Statistical distribution, Quartiles, Outlier detection",
          "Bubble Chart": "Multi-dimensional data, Size and color encoding, Scatter variations",
          "Bump Chart": "Ranking changes over time, Position shifts, Comparative rankings",
          "Bullet Graph": "Performance against targets, Compact metrics, Stephen Few's design",
          "Circle Views": "Packed bubbles, Circle packing, Proportional visualization",
          "Dual Combination Chart": "Multiple measures, Mixed chart types, Dual axes",
          "Dual Lines Chart": "Two y-axes, Comparing different scales, Time series comparison",
          "Funnel Chart": "Process stages, Conversion visualization, Drop-off analysis",
          "Traditional Funnel Charts": "Sales pipeline, Step reduction, Conversion rates",
          "Gantt Chart": "Project timelines, Task duration, Schedule visualization",
          "Grouped Bar or Side by Side Bars Chart": "Multi-category comparison, Clustered bars",
          "Heatmap": "Color intensity matrices, Value concentration, Pattern recognition",
          "Highlight Table": "Cell coloring, Tabular data visualization, Conditional formatting",
          "Histogram": "Frequency distribution, Data ranges, Value clustering",
          "Cumulative Histogram": "Running totals, Accumulation visualization, Progressive counts",
          "Line Chart": "Time series trends, Continuous data, Connection visualization",
          "Lollipop Chart": "Dot-line combination, Space-efficient bars, Categorical comparison",
          "Pareto Chart": "80/20 rule, Sorted bars with line, Cumulative percentage",
          "Pie Chart": "Part-to-whole relationships, Proportional slices, Categorical breakdown",
          "Scatter Plot": "Correlation analysis, X-Y plotting, Point distribution",
          "Stacked Bar Chart": "Component parts, Accumulating values, Part-to-whole over categories",
          "Text Label": "Numeric displays, KPI visualization, Pure text representation",
          "Tree Map": "Hierarchical data, Nested rectangles, Size and color dimensions",
          "Word Cloud": "Text frequency, Term importance, Word sizing by value",
          "Waterfall Chart": "Sequential additions/subtractions, Running total, Financial flows"
        }
      },
      ];

      const courses4 = [
        {
          title: "Learn Tableau Advanced Reports",
          duration: "1 Week",
          description: "This course covers advanced Tableau reporting techniques essential for data analysts and visualization professionals. Students will master dual axis visualizations, reference lines, advanced mapping, and custom backgrounds while developing practical skills applicable to complex data storytelling, geographic analysis, and professional dashboard creation.",
          topics: {
            "Dual Axis Reports": "Combining multiple measures, Synchronized axes, Mixed mark types, Custom visualizations",
            "Blended Axis": "Combining related data sources, Axis alignment, Integration techniques, Relationship building",
            "Individual Axis": "Separate axis control, Independent scaling, Custom range settings, Multi-measure displays",
            "Add Reference Lines": "Static and dynamic references, Constant lines, Statistical markers, Performance indicators",
            "Reference Bands": "Range highlighting, Confidence intervals, Target zones, Comparative regions",
            "Reference Distributions": "Statistical distributions, Percentile markers, Box plots, Distribution curves",
            "Basic Maps": "Geographic visualization basics, Coordinate mapping, Regional data display, Choropleth maps",
            "Symbol Map": "Custom markers, Size encoding, Color encoding, Multi-dimension geographic visualization",
            "Use Google Maps": "Google integration, Interactive mapping, Street views, Custom location overlays",
            "Mapbox Maps as a Background Map": "Custom map styles, Mapbox integration, Interactive backgrounds, Geographic layers",
            "WMS Server Map as a Background Map": "Web Map Service connection, Custom geographic data sources, Enterprise mapping"
          }
        },
        {
          title: "Learn Tableau Calculations & Filters",
          duration: "1 Week",
          description: "Tableau Calculations & Filters provides essential techniques for data manipulation and analysis in Tableau. This course focuses on creating calculated fields, ranking methods, running totals, and implementing various filtering approaches. Students will learn fundamental calculation concepts, filter types, and optimization techniques to transform raw data into actionable insights and create dynamic, interactive visualizations.",
          topics: {
            "Calculated Fields": "Creating custom calculations, Formula syntax, Common functions, Logic operations, Aggregation methods",
            "Basic Approach to Calculate Rank": "Standard ranking methods, Rank functions, Parameter-based ranking, Sorting with ranks",
            "Advanced Approach to Calculate Ra": "Complex ranking scenarios, Multi-level ranking, Dynamic rank calculations, Custom rank display",
            "Calculating Running Total": "Progressive summation, Table calculations, Running total options, Quick table calculations",
            "Filters Introduction": "Filter types overview, Filter mechanics, Order of operations, Filter architecture",
            "Quick Filters": "Interactive dashboard controls, User-facing filters, Quick filter customization, Filter actions",
            "Filters on Dimensions": "Categorical filtering, Include/exclude methods, Custom lists, Wildcard filtering",
            "Conditional Filters": "Logical filtering, IF/THEN conditions, Formula-based filters, Dynamic conditional filters",
            "Top and Bottom Filters": "N-value filtering, Top/bottom parameters, Dynamic top N analysis, Comparative filtering",
            "Filters on Measures": "Numeric range filters, Continuous vs. discrete filtering, Relative filtering, Value distribution",
            "Context Filters": "Performance optimization, Filter hierarchy, Context setting, Dependent calculations",
            "Slicing Fliters": "Cross-dimensional filtering, Matrix analysis, Categorical segmentation, Comparative slicing",
            "Data Source Filters": "Connection-level filtering, Pre-processing data, Source optimization, Extract preparation",
            "Extract Filters": "Optimizing extracts, Incremental extracts, Extract efficiency, Data reduction techniques"
          }
        },
        {
          title: "Learn Tableau Dashboards",
          duration: "1 Month",
          description: "Tableau Dashboards are powerful tools for combining multiple visualizations into cohesive, interactive business intelligence displays. This course provides a comprehensive foundation in dashboard design, layout, interactivity, and storytelling techniques. Students will learn essential dashboard development skills, best practices for user experience, and methods to create compelling data narratives for stakeholders.",
          topics: {
            "Create a Dashboard": "Dashboard fundamentals, Worksheet integration, Size and layout options, Design principles",
            "Format Dashboard Layout": "Grid vs. floating elements, Container types, Size control, Visual hierarchy, White space management",
            "Create a Device Preview of a Dashboard": "Mobile-responsive design, Device-specific layouts, Dashboard sizing, Optimization for different screens",
            "Create Filters on Dashboard": "Global filters, Local filters, Filter actions, Interactive filtering techniques, Parameter controls",
            "Dashboard Objects": "Text objects, Image integration, Web page objects, Blank objects, Navigation buttons, Layout containers",
            "Create a Story": "Sequential narratives, Point structure, Story design, Progressive data revelation, Guided analytics"
          }
        }
      ];

      const courses5 = [
        {
          title: "Tableau Server",
          duration: "1 Week",
          description: "This course covers essential Tableau Server concepts necessary for publishing, sharing, and managing Tableau content in enterprise environments. Students will learn cloud and on-premises deployment options, publishing workflows, and content management while developing practical administration skills applicable to organizational business intelligence and data governance requirements.",
          topics: {
            "Tableau online": "Cloud-based deployment, Subscription management, User permissions, Content organization, Collaboration features",
            "Overview of Tableau Server": "Architecture components, Server roles, Site management, Authentication methods, Deployment options",
            "Publishing Tableau objects and scheduling/subscription": "Publishing workflows, Data source management, Extract refreshes, Subscription setup, Report distribution, Automated delivery"
          }
        },
        {
          title: "Introduction to Power BI",
          duration: "1 Week",
          description: "Introduction to Power BI provides essential foundations for data visualization and business intelligence using Microsoft's Power BI platform. This course focuses on setup, data connectivity, and basic reporting techniques for effective data analysis. Students will learn fundamental Power BI concepts, connection methods, visualization basics, and portal navigation to create insightful reports and dashboards for business data analysis.",
          topics: {
            "Get Started with Power BI": "Installation process, Desktop vs. Service, Power BI ecosystem, First steps for beginners",
            "Overview: Power BI concepts": "Core components, Design philosophy, Data transformation workflow, Report distribution",
            "Sign up for Power BI": "Account creation, Subscription options, License types, Organization setup",
            "Overview: Power BI data sources": "Data connector types, Native integrations, Connection methods, Data refresh options",
            "Connect to a SaaS solution": "Cloud service connections, API integration, Authentication methods, Service data access",
            "Upload a local CSV file": "File import process, Data preview, Column type detection, Import settings",
            "Connect to Excel data that can be refreshed": "Excel workbook connections, Data model import, Refresh settings, OneDrive integration",
            "Connect to a sample": "Sample datasets, Learning resources, Practice data, Quick start templates",
            "Create a Report with Visualizations": "Visualization types, Report canvas, Layout options, Interaction settings",
            "Explore the Power BI portal": "Navigation structure, Workspace management, Content organization, Sharing options"
          }
        },
        {
          title: " Viz and Tiles",
          duration: "1 Week",
          description: "This module focuses on data visualization techniques and tools that transform raw data into meaningful visual representations. Students will learn how to create, format, and arrange various types of visualizations to effectively communicate insights. The module covers essential skills for building interactive dashboards, implementing filters, and customizing visualizations to meet specific analytical needs.",
          topics: {
            "Overview: Visualizations": "Visualization fundamentals, Types of visualizations, Visual perception principles, Choosing appropriate visualizations",
            "Using visualizations": "Visualization purposes, Data-to-visual mapping, Effective use cases, Visualization limitations",
            "Create a new report": "Report setup, Data source connections, Report configuration, Layout planning",
            "Create and arrange visualizations": "Visualization placement, Layout strategies, Visual hierarchy, Dashboard organization",
            "Format a visualization": "Appearance customization, Color schemes, Labeling strategies, Design consistency",
            "Create chart visualizations": "Bar/column charts, Line charts, Pie/donut charts, Scatter plots and bubble charts",
            "Use text, map, and gauge visualizations and save a report": "Text elements integration, Geographic visualization, KPI gauges, Report saving and sharing",
            "Use a slicer to filter visualizations": "Slicer creation, Filter types, Cross-filtering, Interactive filtering techniques",
            "Sort, copy, and paste visualizations": "Sorting mechanisms, Visualization duplication, Format consistency, Layout adjustments",
            "Download and use a custom visual from the gallery": "Custom visual sources, Installation process, Custom visual configuration, Visual marketplace exploration"
          }
        }
      ];

      const courses6 = [
        {
          title: "Reports and Dashboards",
          duration: "1 Week",
          description: "This course explores the creation and management of professional reports and interactive dashboards for effective data storytelling. Students will learn techniques for report customization, dashboard design, content distribution, and natural language querying. The course emphasizes practical skills for building compelling visual analytics solutions that drive business insights and decision-making.",
          topics: {
            "Modify and Print a Report": "Report customization, Layout adjustments, Visual formatting, Content organization, Print settings",
            "Rename and delete report pages": "Page management, Organizing multi-page reports, Restructuring content, Report navigation",
            "Add a filter to a page or report": "Filter creation, Filter types, Scope configuration, Interactive filtering, Cross-filtering",
            "Set visualization interactions": "Cross-highlighting, Drill-through actions, Tooltip customization, Synchronizing visuals",
            "Print a report page": "Print formatting, Export options, Page setup, Print resolution, Output optimization",
            "Send a report to PowerPoint": "Export workflows, Slide configuration, Maintaining interactivity, Presentation formatting",
            "Create a Dashboard": "Dashboard planning, Layout design, Visual arrangement, Information hierarchy, User experience",
            "Create and manage dashboards": "Dashboard creation, Template usage, Theme application, Mobile optimization",
            "Pin a report tile to a dashboard": "Pinning workflows, Tile configuration, Size adjustment, Position management",
            "Pin a live report page to a dashboard": "Live connections, Auto-refresh settings, Interactive elements, Full page integration",
            "Pin a tile from another dashboard": "Cross-dashboard referencing, Content reuse, Visual consistency, Update behavior",
            "Pin an Excel element to a dashboard": "Excel integration, Data connection, Element selection, Refresh settings",
            "Manage pinned elements in Excel": "Element configuration, Data updates, Format management, Link maintenance",
            "Add a tile to a dashboard": "Custom tiles, Text elements, Media integration, Web content, Custom visuals",
            "Build a dashboard with Quick Insights": "Automated analysis, Insight generation, Pattern detection, Visual suggestions",
            "Set a Featured (default) dashboard": "Default configuration, Navigation settings, User experience, Landing page setup",
            "Ask Questions about Your Data": "Natural language queries, Question formulation, Query optimization, Result interpretation",
            "Ask a question with Power BI Q&A": "Q&A interface, Query syntax, Visual generation, Follow-up questions",
            "Tweak your dataset for Q&A": "Dataset optimization, Synonym configuration, Question suggestions, Phrasing improvements",
            "Enable Cortana for Power BI": " Query setup, Cortana configuration, Voice command customization"
          }
        },
        {
          title: "Publishing Workbooks and Workspace",
          duration: "1 Week",
          description: "This course focuses on collaborative aspects of business intelligence through effective sharing and publishing of Power BI content. Students will learn enterprise content distribution methods, workspace management, and embedding techniques for integrating reports into organizational platforms. The course covers essential skills for content governance, team collaboration, and audience-targeted analytics delivery in professional environments.",
          topics: {
            "Share Data with Colleagues and Others": "Sharing permissions, Distribution methods",
            "Publish a report to the web": "Public publishing workflow, URL generation",
            "Manage published reports": "Version control, Update processes, Audience management, Usage monitoring",
            "Share a dashboard": "Dashboard permissions, Direct sharing, Link distribution, Access level configuration",
            "Create an app workspace and add users": "Workspace setup, User role assignment, Collaboration settings, Content organization",
            "Use an app workspace": "Collaborative editing, Content management, Team workflows, Development lifecycle",
            "Publish an app": "App creation, Content packaging, Distribution settings, Audience targeting",
            "Create a QR code to share a tile": "QR generation process, Mobile access, Scan functionality, Dynamic linking",
            "Embed a report in SharePoint Online": "SharePoint integration, Web part configuration, Authentication flow, Interactive embedding"
          }
        },

       {
  title: "Other Power BI Components and Table Relationship",
  duration: "1 Week",
  description: "This module explores advanced Power BI components and data modeling techniques essential for comprehensive business intelligence solutions. Students will learn mobile app functionality, desktop application capabilities, and data relationship concepts. The course covers both consumption and development aspects of the Power BI ecosystem, providing skills for creating end-to-end analytics solutions across multiple platforms.",
  topics: {
    "Use Power BI Mobile Apps": "Mobile platform overview, App navigation, Mobile-optimized features, Offline capabilities",
    "Get Power BI for mobile": "Installation process, Device compatibility, App configuration, Authentication setup",
    "View reports and dashboards in the iPad app": "iPad interface, Touch interactions, Layout adaptation, Optimization techniques",
    "Use workspaces in the mobile app": "Mobile workspace access, Content navigation, Permission management, Collaboration features",
    "Sharing from Power BI Mobile": "Mobile sharing options, Link generation, Access control, Recipient management",
    "Use Power BI Desktop": "Desktop application overview, Development environment, Advanced features, Desktop workflow",
    "Install and launch Power BI Desktop": "System requirements, Installation process, Application setup, Configuration options",
    "Get data": "Data source connections, Import vs. DirectQuery, Advanced connectors, Connection parameters",
    "Reduce data": "Data filtering, Column selection, Row limitations, Performance optimization",
    "Transform data": "Data cleaning operations, Column transformations, Custom calculations, Query editor features",
    "Relate tables": "Relationship creation, Cardinality settings, Filter direction, Model optimization",
    "Get Power BI Desktop data with the Power BI service": "Desktop-to-service workflow, Publishing process, Gateway configuration, Refresh settings",
    "Export a report from Power BI service to Desktop": "Export functionality, File management, Version control, Development transitions"
  }
}
      ];

      
      const courses7 = [
        {
          title: "DAX Functions",
          duration: "1 Week",
          description: "This course provides comprehensive coverage of Data Analysis Expressions (DAX) functions essential for advanced data modeling and analytics in Power BI. Students will learn various function categories and their applications for creating calculated columns, measures, and tables. The course develops practical skills for implementing complex calculations, time intelligence, and custom business logic to enhance data models and deliver sophisticated business intelligence solutions.",
          topics: {
            "New DAX functions": "Latest additions, Function enhancements, Usage improvements, Compatibility considerations",
            "Date and time functions": "Calendar manipulation, Time period calculations, Date formatting, Date table creation",
            "Time intelligence functions": "Year-to-date analysis, Period comparisons, Rolling calculations, Fiscal period handling",
            "Filter functions": "Context manipulation, Filter propagation, Relationship traversal, Custom filtering logic",
            "Information functions": "Data type evaluation, Error handling, Value testing, Metadata access",
            "Logical functions": "Conditional expressions, Boolean operations, Branching logic, Comparison techniques",
            "Math & trig functions": "Arithmetic operations, Statistical calculations, Scientific functions, Rounding methods",
            "Parent and child functions": "Hierarchy navigation, Path analysis, Level identification, Recursive calculations",
            "Text functions": "String manipulation, Concatenation operations, Text extraction, Format conversion"
          }
        }
      ]

const skills = [
  'Excel', 'SQL', 'Python', 'R', 'Pandas',
  'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau',
  'Data Cleaning', 'Data Visualization', 'EDA', 'Statistics', 'Business Intelligence'
];


  return (
    <div className='h-auto w-full'>
        <Navbar />

        {/* Hero Section */}
        <div className='min-h-[75vh] 2xl:min-h-[50vh] w-full bg-zinc-950 relative'>
            <div className='absolute h-[200px] w-[200px] top-32 left-48 rounded-full bg-[#1DD9FF] blur-[180px]'/>
            <Image src='/coursePage/100.png' alt='#' width={600} height={600} className='absolute bottom-0 h-auto w-full'/>
            <div className='relative top-0 left-0 w-full h-full flex xl:flex-row flex-col'>
                <div className='left h-fit xl:w-1/2 w-full xl:px-24 xl:py-20 p-4 flex flex-col gap-10 items-start'>
                <ScrollReveal animation='slightRight' delay={100} easing='gentle'>
                <div className='rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase'>
                ONLINE Data Analytics COURSE
                </div>
                </ScrollReveal>
                <ScrollReveal animation='fadeIn' delay={300} easing='spring'>
                  <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>
                      Your Ultimate Handbook for Mastering <span className='text-red-600 capitalize'>Data Analytics</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal animation='slideUp' delay={500} easing='smooth'>
                  <p className='lg:text-xl sm:text-lg tracking-wide'>
                 Data Analytics is a course that focuses on examining raw data to uncover patterns, draw conclusions, and support decision-making. It covers key areas such as statistical analysis, data visualization, predictive modeling, and business intelligence. The course equips learners with the knowledge and tools to collect, process, and interpret complex datasets, extract meaningful insights, and communicate findings effectively to drive strategic actions across various organizational contexts.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation='scaleUp' delay={700} easing='bouncy' className='flex gap-4 items-start'>
                <Button text='Enquire Now' link={'/contact'} />
                <Button text='Enroll Now' link={'https://courses.careertronic.com/courses'}/>
                </ScrollReveal>    
                </div>
                  <div className='right h-fit xl:w-1/2 w-full xl:p-28 md:px-48 p-4'>
                  <ScrollReveal animation='slideLeft' delay={400} easing='smooth'>
                      <div className='h-full w-full'>
                      <Form text='Free Career Counselling is just a call away!'/>
                      </div>
                  </ScrollReveal>
                  </div>

            </div>
            <ScrollReveal animation='scaleUp' delay={200} easing='smooth' className='relative bottom-0 -translate-x-1/2 w-full z-20'>
            <div className='h-auto sm:w-[85%] w-[75%] rounded-lg px-5 py-3 bg-[#fff] relative bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between'>
            <ScrollReveal animation='slideUp' delay={800} easing='spring' className='relative flex flex-col sm:flex-row w-full text-black gap-5'>
                <div className='flex flex-col sm:flex-row w-full text-black gap-5'>
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                    <div className='h-auto'><p className='text-base md:text-lg'>Propgram Duration</p></div>
                    <div className='sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'><span className='text-3xl'>12</span> Months</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Time Commitment</p></div>
                   <div className='h-3/4 sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'>12-15 Hrs/Week</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Placement Support</p></div>
                   <div className='h-3/4 sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'>900+ Companies</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Enrollment</p></div>
                    <div className='h-3/4 flex items-center'><p className='font-bold text-lg md:text-2xl'>Highly Selective</p></div>
                   </div> 
                </div>
            </ScrollReveal>
            </div>
            </ScrollReveal>
        </div>

        {/* Steps Secction */}
        <div className='h-auto w-full bg-[#212121] relative flex lg:flex-row justify-around lg:pt-28 md:pt-20 sm:pt-40 pt-40 z-10'>
    {/* Image Section - Hidden on small screens, visible on medium and up */}
    <div className='w-full lg:w-[40%] relative hidden lg:block'>
        <div className="relative h-full">
            <Image src='/coursePage/103.png' alt='Image1' width={450} height={450} className='absolute -bottom-1 left-0 w-auto h-auto max-w-full max-h-[60vh]'/>
            <ScrollReveal animation='fadeIn' delay={700} easing='spring' className='relative h-full'> 
                {/* <Image src='/coursePage/105.png' alt='Image2' width={400} height={400} className='absolute bottom-40 left-72 w-auto h-auto max-w-[80%] hidden lg:block'/> */}
            </ScrollReveal>
                <Image src='/coursePage/101.png' alt='Image3' width={1000} height={1000} className='absolute -bottom-1 left-0 h-auto xl:max-w-full 2xl:w-[630px] w-full'/>
        </div>
    </div>
    
    {/* Content Section */}
    <div className='w-full lg:w-[60%] flex p-4 sm:p-6 md:p-10 lg:p-16 flex-col justify-around relative'>
        <ScrollReveal animation='fadeIn' delay={200} easing='smooth'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left mb-6 sm:mb-10 lg:mb-0 text-white leading-tight capitalize'>
                How Can We Turn You Into an Expert in data analysts?
            </h1>
        </ScrollReveal>
        
        {/* Steps Section - Reorganizes on smaller screens */}
        <div className="flex flex-col justify-evenly md:flex-row w-full p-2 md:p-4 gap-6 md:gap-2 lg:gap-4 xl:gap-8 mt-8 lg:mt-0">
            {/* Step 1 */}
            <ScrollReveal animation='scaleUp' delay={600} easing='spring'>
                <div className="flex flex-col items-center mb-2 sm:mb-4 md:mb-0 flex-1">
                    <div className="bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">1</span>
                    </div>
                    <div className="text-white text-center">
                        <p className="font-bold text-sm sm:text-base md:text-lg">In-depth</p>
                        <p className="font-bold text-sm sm:text-base md:text-lg">Knowledge</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Arrow 1 - Changes direction on mobile */}
            <ScrollReveal animation='fadeIn' delay={900} easing='gentle' className="hidden md:flex items-center justify-center mx-0 sm:mx-1 lg:mx-2 xl:mx-4 relative self-center flex-shrink-0">
                <Image src='/coursePage/Vector.png' alt="Arrow" width={60} height={60} className="relative bottom-7 w-6 h-auto md:w-8 lg:w-10 xl:w-auto"/>
            </ScrollReveal>
            {/* Mobile down arrow instead of right arrow */}
            <ScrollReveal animation='fadeIn' delay={900} easing='gentle' className="flex md:hidden items-center justify-center mb-2 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </ScrollReveal>


            {/* Step 2 */}
            <ScrollReveal animation='scaleUp' delay={800} easing='spring'>
                <div className="flex flex-col items-center mb-2 sm:mb-4 md:mb-0 flex-1">
                    <div className="bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">2</span>
                    </div>
                    <div className="text-white text-center">
                        <p className="font-bold text-sm sm:text-base md:text-lg">Real World</p>
                        <p className="font-bold text-sm sm:text-base md:text-lg">Simulations</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Arrow 2 - Changes direction on mobile */}
            <ScrollReveal animation='fadeIn' delay={1100} easing='gentle' className="hidden md:flex items-center justify-center mx-0 sm:mx-1 lg:mx-2 xl:mx-4 relative self-center flex-shrink-0">
                <Image src='/coursePage/Vector.png' alt="Arrow" width={60} height={60} className="relative bottom-7 w-6 h-auto md:w-8 lg:w-10 xl:w-auto"/>
            </ScrollReveal>
            {/* Mobile down arrow instead of right arrow */}
            <ScrollReveal animation='fadeIn' delay={1100} easing='gentle' className="flex md:hidden items-center justify-center mb-2 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal animation='scaleUp' delay={1000} easing='spring'>
                <div className="flex flex-col items-center flex-1">
                    <div className="bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">3</span>
                    </div>
                    <div className="text-white text-center">
                        <p className="font-bold text-sm sm:text-base md:text-lg">Placement</p>
                        <p className="font-bold text-sm sm:text-base md:text-lg">Assistance</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </div>
</div>
        {/* Industries Section */}
        <div className='h-auto w-full bg-white md:py-24 md:px-20 p-4'>
            <div>
            <ScrollReveal animation='slightRight' delay={200} easing='gentle'>
                <h1 className='text-2xl md:text-4xl font-bold text-red-600 mb-6 uppercase'>Industry Requirements</h1>
            </ScrollReveal>
            <ScrollReveal animation='fadeIn' delay={500} easing='smooth'>
                <h1 className='text-3xl md:text-6xl font-bold text-black mb-10'>What Tech Companies search for?</h1>
            </ScrollReveal>
            <ScrollReveal animation='scaleUp' delay={800} easing='spring'>
                <div className='w-full border-4 border-red-600 rounded-lg'>
                    <DevOpsSkills skills={skills}/>
                </div>
            </ScrollReveal>
            </div>
        </div>

        {/* DevOps Section */}
        <div className='h-auto w-full overflow-hidden'>
            <CourseSection courseName={'data analytics'} courseDescription={courseDesc}/>
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40'>
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6'>Our Curriculum</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10'>Expert-Design Course Structure</h1>
        
        <CourseRoadmap courses={courses1} show={false}/>
        <CourseRoadmap courses={courses2} show={true} texts={{ 
            heading:'READY FOR DATA ANALYST ROLES', 
            subHeading:'Covering all modules above makes you ready to apply for Data Analyst roles' 
        }} />
        <CourseRoadmap courses={courses3} show={true} texts={{ 
            heading:'YOU\'RE NOW READY FOR SRE ROLES', 
            subHeading:'Covering all modules above makes you ready to apply for Data Analyst roles' 
        }} />
        


       <CourseRoadmap courses={courses4} show={false}/>

       <CourseRoadmap courses={courses5} show={true} texts={{ 
            heading:'YOU\'RE NOW READY FOR Power BI', 
            subHeading:'Covering all modules above makes you ready to apply for Power BI roles' 
        }} />

        <CourseRoadmap courses={courses6} show={false}/>
        <CourseRoadmap courses={courses7} show={false}/>

     

        
        {/* Download Brochure Section */}
        <div className='w-full bg-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-start gap-3 sm:gap-4 md:gap-7'>
            <ScrollReveal
            animation="scaleUp"
            duration={1300}
            delay={300}
            easing="spring">
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-semibold'>
              Your Guide to Everything
            </h1>
          </ScrollReveal>
          <ScrollReveal
          animation="fadeIn"
          duration={1200}
          delay={600}
          easing="gentle">
          <h1 className='text-lg sm:text-xl md:text-2xl text-black'>
            Download Our Brochure for a Complete Overview!
          </h1>
          </ScrollReveal>
          <ScrollReveal
          animation="slideUp"
          duration={1400}
          delay={900}
          easing="bouncy">
        <Button text='Download Brochure' />
        </ScrollReveal>
        </div>
    </div>
</div>



        <div>
      <div>
       {/* Career-Boosting Projects Section */}
       <div className="bg-white py-16 px-4">
         <div className="max-w-6xl mx-auto text-center">
         <ScrollReveal
          animation="slightRight"
          duration={1200}
          delay={200}
          easing="gentle">
          <h3 className="text-lg font-semibold text-gray-500 uppercase">
            Gain Real-World Data Analytics Experience!
          </h3>
          </ScrollReveal>
          <ScrollReveal
          animation="fadeIn"
          duration={1300}
          delay={500}
          easing="smooth">
          <h2 className="text-4xl font-bold text-black mt-2">
            Career-Boosting Projects
          </h2>
          </ScrollReveal>
           <div className="mt-10 grid md:grid-cols-3 gap-6">
             {projects.map((project, index) => (
              <ScrollReveal
              key={project.title}
              animation="scaleUp"
              duration={1200}
              delay={200}
              easing="spring"
              index={index}
              stagger={150}
              className="h-full" // Ensure the animation wrapper takes full height
            >

               <div
                 key={index}
                 className="p-6 rounded-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg text-white flex flex-col items-start h-full"
                 >
                 <div className="mb-4">{project.icon}</div>
                 <h3 className="text-xl font-bold">{project.title}</h3>
                 <p className="text-sm text-gray-300 mt-2">
                   {project.description}
                 </p>
               </div>
             </ScrollReveal>
             ))}
           </div>
         </div>
         </div>
         
         {/* DevOps & Cloud Computing Curriculum Section */}
         <div className="min-h-screen bg-black text-white p-6 md:p-12">
         <div className="container mx-auto max-w-7xl">
          <ScrollReveal
            animation="slideUp"
            duration={1200}
            delay={200}
            easing="smooth">
           <h2 className="text-lg font-semibold text-gray-400 uppercase">
             Data Analytics Curriculum
           </h2>
          </ScrollReveal>
          <ScrollReveal
          animation="slideUp"
          duration={1200}
          delay={200}
          easing="smooth">
           <h1 className="text-4xl font-bold mb-8">
             Your Journey With Careertronic
           </h1>
          </ScrollReveal>

           <div className="bg-black text-white p-6 md:p-12">
           <ScrollReveal
            animation="slideRight"
            duration={800}
            delay={300}
            easing="spring">
             <div className="flex items-center mb-4">
             <ScrollReveal
                animation="scaleUp"
                duration={600}
                delay={500}
                easing="bouncy">
                <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                  1
                </div>
              </ScrollReveal>
               <h2 className="text-2xl font-bold text-white">
                 Onboarding Session
               </h2>
             </div>
            </ScrollReveal>

             <div className="grid md:grid-cols-3 gap-4">
               {/* Intro Session Card */}
               <ScrollReveal
                animation="slideRight"
                duration={800}
                delay={200}
                easing="smooth">
               <div className="bg-slate-950 p-6 rounded-xl text-white h-52">
                 <h3 className="text-lg font-bold">Intro Session</h3>
                 <p className="text-sm text-gray-400 mt-2">
                   Start in a customized cohort and forge meaningful connections
                   who will be your allies on this journey.
                 </p>
               </div>
              </ScrollReveal>

               {/* Pick Your Mentor Card - Increased Width */}
               <ScrollReveal
                animation="fadeIn"
                duration={800}
                delay={350}
                easing="smooth"
              > 
               <div className="bg-red-900 p-6 rounded-xl text-white flex flex-col justify-center items-center h-52">
                 <button className="bg-white text-black px-4 py-2 rounded font-bold">
                   Pick Your Mentor
                 </button>
                 <p className="text-sm text-gray-200 mt-2 text-center">
                   Select the right mentor for guidance and gain invaluable
                   insights to boost your career.
                 </p>
               </div>
              </ScrollReveal>

               {/* Learning Coordinator Card */}
               <ScrollReveal
              animation="slideLeft"
              duration={800}
              delay={500}
              easing="smooth"> 
               <div className="relative bg-gray-900 rounded-xl overflow-hidden h-52">
                 <div
                   className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: "url('/coursePage/co2.png')" }}
                   ></div>
                 <div className="relative p-6 flex flex-col justify-end h-full bg-black bg-opacity-50">
                   <h3 className="text-lg font-bold text-white">
                     Connect with a{" "}
                     <span className="text-blue-400">Learning Coordinator</span>
                   </h3>
                 </div>
               </div>
             </ScrollReveal>
             </div>
           </div>

           {/* Live Learning Experience */}
           <div className="bg-black text-white p-6 md:p-8 lg:p-12">
           <ScrollReveal
            animation="slideRight"
            duration={800}
            delay={300}
            easing="spring">
            <div className="flex items-center mb-6">
            <ScrollReveal
                animation="scaleUp"
                duration={600}
                delay={500}
                easing="bouncy">
              <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                2
              </div>
              </ScrollReveal>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Live Learning Experience
              </h2>
            </div>
            </ScrollReveal>

  {/* Mobile layout - single column for extra small screens */}
  <div className="grid grid-cols-1 gap-4 sm:hidden">
    {/* Live Classroom - Featured item first on mobile */}
    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-48">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cou9.png"
          alt="Live Classroom"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h2 className="text-xl font-bold text-white">
          Live Classroom
        </h2>
        <p className="text-sm text-white">
          Engage with instructors and connect with your peers in real-time
        </p>
      </div>
    </div>
</ScrollReveal>

    {/* Other items */}
    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/practice.webp"
          alt="Practice"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Practice with</h3>
        <p className="text-sm text-white">Assignments & Home Works</p>
      </div>
    </div>
    </ScrollReveal>

    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/mentors.png"
          alt="Mentorship"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">1:1</h3>
        <p className="text-sm text-white">Guidance from Pro Mentors</p>
      </div>
    </div>
    </ScrollReveal>
  
    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cloud.jpg"
          alt="cloud"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Cloud Sandbox</h3>
        <p className="text-sm text-white">Hands-on practice in real-world cloud environment</p>
      </div>
    </div>
    </ScrollReveal>

    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/ai.avif"
          alt="AI Assistance"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">AI-Assisted</h3>
        <p className="text-sm text-white">Problem-solving support</p>
      </div>
    </div>
  </ScrollReveal>
<ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/soln.avif"
          alt="Situational Problems"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Situational</h3>
        <p className="text-sm text-white">Problem & Solution</p>
      </div>
    </div>
</ScrollReveal>
<ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/course3.png"
          alt="teaching"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Teaching-Assistance</h3>
        <p className="text-sm text-white">1:1 Teaching Assistant over chat & video call</p>
      </div>
    </div>
</ScrollReveal>
  </div>

  {/* Tablet and small screens layout - simplified grid */}
  <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
    {/* Live Classroom - Featured item with larger size */}
    <div className="col-span-2 md:col-span-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-48">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cou9.png"
          alt="Live Classroom"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h2 className="text-xl font-bold text-white">
          Live Classroom
        </h2>
        <p className="text-sm text-white">
          Engage with instructors and connect with your peers in real-time
        </p>
      </div>
    </div>

    {/* Other items */}
    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/practice.webp"
          alt="Practice"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Practice with</h3>
        <p className="text-sm text-white">Assignments & Home Works</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/mentors.png"
          alt="Mentorship"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">1:1</h3>
        <p className="text-sm text-white">Guidance from Pro Mentors</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cloud.jpg"
          alt="cloud"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Cloud Sandbox</h3>
        <p className="text-sm text-white">Hands-on practice in real-world cloud environment</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/ai.avif"
          alt="AI Assistance"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">AI-Assisted</h3>
        <p className="text-sm text-white">Problem-solving support</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/soln.avif"
          alt="Situational Problems"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Situational</h3>
        <p className="text-sm text-white">Problem & Solution</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/course3.png"
          alt="teaching"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Teaching-Assistance</h3>
        <p className="text-sm text-white">1:1 Teaching Assistant over chat & video call</p>
      </div>
    </div>
  </div>

  {/* Desktop layout - complex grid similar to original */}
  <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-6 lg:gap-4 lg:h-[550px]">
    {/* Practice with Assignments */}
    <ScrollReveal
          animation="slightLeft"
          duration={700}
          delay={100}
          easing="gentle"
          className='row-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden'
        >

    {/* <div className="row-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"> */}
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/practice.webp"
          alt="Practice"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">
          Practice with
        </h3>
        <p className="text-sm text-white">Assignments & Home Works</p>
      </div>
    {/* </div> */}
  </ScrollReveal>

    {/* 1:1 Guidance */}
    <ScrollReveal
          animation="fadeIn"
          duration={900}
          delay={300}
          easing="spring"
          className='row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden'>
    {/* <div className="row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"> */}
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/mentors.png"
          alt="Mentorship"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">1:1</h3>
        <p className="text-sm text-white">
          Guidance from Pro Mentors
        </p>
      </div>
    {/* </div> */}
</ScrollReveal>

    {/* Situational Problem & Solution */}
    <ScrollReveal
    animation="fadeIn"
    duration={900}
    delay={300}
    easing="spring"
    className="row-span-2 col-start-1 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/soln.avif"
          alt="Situational Problems"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Situational</h3>
        <p className="text-sm text-white">Problem & Solution</p>
      </div>
    </ScrollReveal>

    {/* Live Classroom */}
    <ScrollReveal
          animation="slideUp"
          duration={900} 
          delay={300}
          easing="spring"
          className="col-span-2 row-span-4 col-start-2 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cou9.png"
          alt="Live Classroom"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Live Classroom
        </h2>
        <p className="text-sm text-white">
          Engage with instructors and connect with your peers in real-time
        </p>
      </div>
  </ScrollReveal>

    {/* Cloud Sandbox */}
    <ScrollReveal
          animation="fadeIn"
          duration={900}
          delay={300}
          easing="spring"
          className="col-span-2 row-span-2 col-start-2 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cloud.jpg"
          alt="cloud"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">
          Cloud Sandbox
        </h3>
        <p className="text-sm text-white">
          Hands-on practice in real-world cloud environment
        </p>
      </div>
</ScrollReveal>

    {/* AI-Assisted Problem Solving */}
    <ScrollReveal
          animation="slideLeft"
          duration={900}
          delay={300}
          easing="spring"
          className="row-span-3 col-start-4 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">        
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/ai.avif"
          alt="AI Assistance"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h3 className="text-lg font-bold text-white">AI-Assisted</h3>
        <p className="text-sm text-white">Problem-solving support</p>
      </div>
    </ScrollReveal>

    {/* Teaching Assistance */}
    <ScrollReveal
          animation="slideLeft"
          duration={900}
          delay={300}
          easing="spring"
          className="row-span-3 col-start-4 row-start-4 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/course3.png"
          alt="teaching"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h3 className="text-lg font-bold text-white">
          Teaching-Assistance
        </h3>
        <p className="text-sm text-white">
          1:1 Teaching Assistant over chat & video call
        </p>
      </div>
    </ScrollReveal>
  </div>
</div>

           {/* Training & Placement Support */}
           <div className="bg-black text-white p-6 md:p-12">
           <ScrollReveal
            animation="slideRight"
            duration={800}
            delay={300}
            easing="spring">
             <div className="flex items-center space-x-3">
             <ScrollReveal
                animation="scaleUp"
                duration={600}
                delay={500}
                easing="bouncy">
               <div className="bg-gray-700 text-white px-3 py-1 rounded-lg font-bold">
                 3
               </div>
               </ScrollReveal>
               <h2 className="text-xl md:text-2xl font-bold">
                 Training & Placement Support
               </h2>
             </div>
             </ScrollReveal>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
             <ScrollReveal animation="fadeSlideLeft" duration={800} delay={100} easing="spring" className='md:col-span-2'>
              <div className="bg-cover bg-center relative p-6 md:col-span-2 rounded-lg flex flex-col justify-center" style={{ backgroundImage: "url('/coursePage/test.webp')" }} >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> 
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-white">Module-Based Mocks</h3>
                <p className="text-gray-200 text-sm">
                  Practically apply your skills through interview simulations post-module.
                </p>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeSlideRight" duration={800} delay={100} easing="spring" className='md:col-span-1'>
               <div className="bg-slate-950 p-4 rounded-lg text-center">
                 <h3 className="font-bold text-lg text-white">Resume Building</h3>
                 <p className="text-gray-400 text-sm">
                   Build an impactful, professional resume with expert
                   mentorship.
                 </p>
               </div>
            </ScrollReveal>
             </div>
             <ScrollReveal animation="fadeSlideLeft" duration={800} delay={100} easing="spring" className='md:col-span-2'>
             <div className="bg-red-600 text-center p-4 mt-6 rounded-lg font-semibold text-sm md:text-base">
               GET INDUSTRY READY Get access to exclusive job openings within our
               network.
             </div>
             <div className="bg-gray-900 p-6 mt-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
               <div className="w-full md:w-1/2">
                 <h3 className="font-bold text-lg">Placement Training</h3>
                 <p className="text-gray-400 text-sm">
                   Focused training to excel in tech recruitment processes.
                 </p>
               </div>
               <div className="w-full md:w-1/2 text-right">
                 <h3 className="font-bold text-lg">Placement Support</h3>
                 <p className="text-gray-400 text-sm">
                   End-to-end assistance to secure your dream job.
                 </p>
               </div>
             </div>
             </ScrollReveal>
           </div>
         </div>
         {/**MENTORS AND TRAINERS WITH REVIEW */}
         <div className="bg-white text-black py-16 px-4 rounded-s-2xl rounded-e-2xl w-full h-auto">
           <div className="container mx-auto max-w-7xl">
            <ScrollReveal
            animation="slideUp"
            duration={1200}
            delay={200}
            easing="smooth">
             <h2 className="text-lg font-semibold text-black uppercase text-center mb-4">
               Meet Mentors & Instructors
             </h2>
             <h1 className="text-4xl font-bold text-center mb-12">
               Tap into the wisdom of Data Analytics Experts
             </h1>
            </ScrollReveal>

             {/* Mentors Grid */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
               {/* Mentor Card Template */}
               {[
                 {
                   name: "Anshuman Singh",
                   role: "Teacher1",
                   img: "/coursePage/teacher1.jpg"
                 },
                 { name: "Naman Balla", 
                   role: "Teacher3",
                   img: "/coursePage/teacher3.jpg" 
                 },
                 {
                   name: "Anshuman Singh",
                   role: "Teacher2",
                   img: "/coursePage/teacher2.jpg"
                 },
                 {
                   name: "Anshuman Singh",
                   role: "Teacher4",
                   img: "/coursePage/teacher4.jpg"
                 },
               ].map((mentor, index) => (

                 <div
                   key={index}
                   className="bg-black shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
                  <ScrollReveal
                    animation="fadeIn" 
                    duration={1200}
                    delay={200}
                    easing="smooth">
                   <div className="w-full h-64 flex items-center justify-center bg-cover"
                   style={{ backgroundImage: `url(${mentor.img})` }}>
                     {/* <span className="text-gray-400">Mentor Image</span> */}
                   </div>
                   <div className="p-4 text-center">
                     <h3 className="font-semibold text-white">{mentor.name}</h3>
                     {/* <p className="text-gray-400 text-sm">{mentor.role}</p> */}
                   </div>
                  </ScrollReveal>
                 </div>
               ))}
             </div>

             {/* Reviews Section */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {reviews.map((review, index) => (
                   <div
                     key={index}
                     className="bg-black shadow-lg rounded-lg p-6"
                   >
                    <ScrollReveal
                    animation="fadeIn"
                    duration={1200}
                    delay={200}
                    easing="smooth">
                     <div className="flex items-center mb-4">
                       <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                         <span className="text-gray-400">{review.initials}</span>
                       </div>
                       <div>
                         <h4 className="font-semibold text-white">{review.name}</h4>
                         <div className="text-yellow-400">
                           {[...Array(review.rating)].map((_, i) => (
                             <span key={i} className="text-yellow-400">★</span>
                           ))}
                         </div>
                       </div>
                     </div>
                     <p className="text-gray-400">
                       {review.review}
                     </p>
                    </ScrollReveal>
                   </div>
                 ))}
             </div>
           </div>
         </div>
       </div>
     </div>
        {/* Fee Structure */}
        <div className='w-full bg-black'>
            <FeeStructure courseName={'Data Analytics'}/>
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto bg-white'>
            <FAQSection />
        </div>

    </div>
  </div>
  )
}

export default page;
