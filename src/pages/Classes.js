import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Pagination, InputGroup, FormControl, Dropdown, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Classes.css';

const instructors = [
  { name: 'All' },
  { name: 'Ana de Armas', specialty1: 'Pilates', specialty2: 'Yoga' },
  { name: 'Arnold Schwarzenegger', specialty1: 'Strength Training', specialty2: 'Cardio' },
  { name: 'Aubrey Graham', specialty1: 'Cardio', specialty2: 'HIIT' },
  { name: 'Dwayne Johnson', specialty1: 'Strength Training', specialty2: 'HIIT' },
  { name: 'Emma Watson', specialty1: 'Yoga', specialty2: 'Pilates' },
  { name: 'Eric Winter', specialty1: 'HIIT', specialty2: 'Strength Training' },
  { name: 'Hugh Jackman', specialty1: 'Strength Training', specialty2: 'Cardio' },
  { name: 'Jennifer Lawrence', specialty1: 'Cardio', specialty2: 'HIIT' },
  { name: 'Jennifer Lopez', specialty1: 'Cardio', specialty2: 'Yoga' },
  { name: 'Megan Fox', specialty1: 'Cardio', specialty2: 'Strength Training' },
  { name: 'Scarlett Johansson', specialty1: 'Pilates', specialty2: 'Yoga' },
  { name: 'Sofia Vergara', specialty1: 'Yoga', specialty2: 'Pilates' },
  { name: 'Timothee Chalamet', specialty1: 'Yoga', specialty2: 'Pilates' },
  { name: 'Tom Holland', specialty1: 'Cardio', specialty2: 'Strength Training' },
  { name: 'Will Smith', specialty1: 'HIIT', specialty2: 'Strength Training' },
  { name: 'Zara Larsson', specialty1: 'Yoga', specialty2: 'Cardio' }
];

const classTypes = ['Cardio', 'HIIT', 'Pilates', 'Strength Training', 'Yoga'];
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
const durations = ['< 30 minutes', '30 - 60 minutes', '> 60 minutes'];
const equipment = ['No Equipment', 'Dumbbells', 'Resistance Bands', 'Step Platform', 'Yoga Mat'];
const formats = ['Live', 'On Demand'];
const ratings = ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'];

const generateRandomClasses = () => {
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return Array.from({ length: 20 }, (_, i) => ({
    name: `Class Name ${i + 1}`,
    instructor: getRandomElement(instructors),
    classType: getRandomElement(classTypes),
    difficulty: getRandomElement(difficulties),
    duration: getRandomElement(durations),
    equipment: getRandomElement(equipment),
    format: getRandomElement(formats),
    rating: getRandomElement(ratings),
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  }));
};

const Classes = () => {
  const [allClasses, setAllClasses] = useState(generateRandomClasses());
  const [filteredClasses, setFilteredClasses] = useState(allClasses);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const [selectedClassTypes, setSelectedClassTypes] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const classesPerPage = 4;

  const handleDropdownSelect = (key, value) => {
    switch (key) {
      case 'instructor':
        setSelectedInstructor(value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (setStateFunction, state, item) => {
    setStateFunction(state.includes(item) ? state.filter(i => i !== item) : [...state, item]);
  };

  const filterClasses = () => {
    return allClasses.filter(cls =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedInstructor === 'All' || cls.instructor.name === selectedInstructor) &&
      (selectedClassTypes.length === 0 || selectedClassTypes.includes(cls.classType)) &&
      (selectedDifficulties.length === 0 || selectedDifficulties.includes(cls.difficulty)) &&
      (selectedDurations.length === 0 || selectedDurations.includes(cls.duration)) &&
      (selectedEquipment.length === 0 || selectedEquipment.includes(cls.equipment)) &&
      (selectedFormats.length === 0 || selectedFormats.includes(cls.format)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(cls.rating))
    );
  };

  const handleFilterButtonClick = () => {
    const filtered = filterClasses();
    setFilteredClasses(filtered);
    setCurrentPage(1); 
  };

  useEffect(() => {
    setFilteredClasses(filterClasses());
    setCurrentPage(1); 
  }, [searchTerm, selectedInstructor, selectedClassTypes, selectedDifficulties, selectedDurations, selectedEquipment, selectedFormats, selectedRatings, allClasses]);

  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = filteredClasses.slice(indexOfFirstClass, indexOfLastClass);
  const totalPages = Math.ceil(filteredClasses.length / classesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReserveClick = () => {
    console.log("Reserve button clicked!");
  };

  return (
    <div className="app">
      <Header />
      <div className="header text-center">
        <h1>CLASSES</h1>
        <p>
          We offer a diverse range of fitness classes suitable for all levels. Our classes range from under 30 minutes to over an hour, 
          with both live and on-demand options for maximum flexibility. Expert instructors provide 
          personalized guidance to help you achieve your fitness goals. Join our supportive community to share your journey and get inspired! 
        </p>
      </div>
      <div className="search">
        <InputGroup className="purple-border">
          <FormControl
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className="search-container">
        <div className="facets">
          <div className="facet">
            <div className="facet-header">Instructor</div>
            <Dropdown onSelect={(e) => handleDropdownSelect('instructor', e)}>
              <Dropdown.Toggle variant="secondary" className="instructor-selector">
                {selectedInstructor || 'Select Instructor'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {instructors.map((instructor) => (
                  <Dropdown.Item key={instructor.name} eventKey={instructor.name}>
                    {instructor.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="facet">
            <div className="facet-header">Class Type</div>
            {classTypes.map((type) => (
              <Form.Check
                key={type}
                type="checkbox"
                label={type}
                checked={selectedClassTypes.includes(type)}
                onChange={() => handleCheckboxChange(setSelectedClassTypes, selectedClassTypes, type)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Difficulty</div>
            {difficulties.map((difficulty) => (
              <Form.Check
                key={difficulty}
                type="checkbox"
                label={difficulty}
                checked={selectedDifficulties.includes(difficulty)}
                onChange={() => handleCheckboxChange(setSelectedDifficulties, selectedDifficulties, difficulty)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Duration</div>
            {durations.map((duration) => (
              <Form.Check
                key={duration}
                type="checkbox"
                label={duration}
                checked={selectedDurations.includes(duration)}
                onChange={() => handleCheckboxChange(setSelectedDurations, selectedDurations, duration)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Equipment</div>
            {equipment.map((equip) => (
              <Form.Check
                key={equip}
                type="checkbox"
                label={equip}
                checked={selectedEquipment.includes(equip)}
                onChange={() => handleCheckboxChange(setSelectedEquipment, selectedEquipment, equip)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Format</div>
            {formats.map((format) => (
              <Form.Check
                key={format}
                type="checkbox"
                label={format}
                checked={selectedFormats.includes(format)}
                onChange={() => handleCheckboxChange(setSelectedFormats, selectedFormats, format)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Rating</div>
            {ratings.map((rating) => (
              <Form.Check
                key={rating}
                type="checkbox"
                label={rating}
                checked={selectedRatings.includes(rating)}
                onChange={() => handleCheckboxChange(setSelectedRatings, selectedRatings, rating)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <Button
              variant="secondary"
              className="purple-button"
              onClick={handleFilterButtonClick}
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="results">
          {currentClasses.map((cls, index) => (
            <Card className="class-card" key={index}>
              <Card.Body>
                <Card.Title>{cls.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Instructor: {cls.instructor.name}</Card.Subtitle>
                <Card.Text>
                  <strong>Class Type:</strong> {cls.classType}<br />
                  <strong>Difficulty:</strong> {cls.difficulty}<br />
                  <strong>Duration:</strong> {cls.duration}<br />
                  <strong>Equipment:</strong> {cls.equipment}<br />
                  <strong>Format:</strong> {cls.format}<br />
                  <strong>Rating:</strong> {cls.rating}<br />
                </Card.Text>
                <Card.Text>{cls.description}</Card.Text>
                <Button className="purple-button" onClick={handleReserveClick}>
                  <Link to="/reserve" className="nav-link-custom">
                    RESERVE
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div> 
      </div>
      <div className="results-count">
          {filteredClasses.length > 0
            ? `${indexOfFirstClass + 1}-${Math.min(indexOfLastClass, filteredClasses.length)} of ${filteredClasses.length} results`
            : '0 results'}
      </div>
        <Pagination>
          <Pagination.Prev
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Pagination.Prev>
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Pagination.Next>
        </Pagination>
      <Footer />
    </div>
  );
};

export default Classes;