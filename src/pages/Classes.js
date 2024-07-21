import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Pagination, InputGroup, FormControl, Dropdown, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Classes.css';
import { instructors, classNames } from '../data';
import { Helmet } from 'react-helmet';

import CardioBlast from '../images/classes/cardioblast.webp';
import PilatesCore from '../images/classes/pilatescore.webp';
import HIITBurn from '../images/classes/hiitburn.webp';
import StrengthMastery from '../images/classes/strengthmastery.webp';
import YogaFlow from '../images/classes/yogaflow.webp';
import HIITCardio from '../images/classes/hiitcardio.webp';
import CardioDance from '../images/classes/cardiodance.webp';
import YogaForBeginners from '../images/classes/yogaforbeginners.webp';
import PilatesSculpt from '../images/classes/pliatessculpt.webp';
import StrengthHIIT from '../images/classes/strengthhiit.webp';
import YogaRelaxation from '../images/classes/yogarelaxation.webp';
import CardioPower from '../images/classes/cardiopower.webp';
import PilatesFlexibility from '../images/classes/pilatesflexibility.webp';
import StrengthEndurance from '../images/classes/strengthendurance.webp';
import HIITEnergy from '../images/classes/hiitenergy.webp';
import CardioKick from '../images/classes/cardiokick.webp';
import PilatesForStrength from '../images/classes/pilatesforstrength.webp';
import HIITChallenge from '../images/classes/hiitchallenge.webp';
import StrengthBuilding from '../images/classes/strengthbuilding.webp';
import YogaSerenity from '../images/classes/yogaserenity.webp';
import CardioStrength from '../images/classes/cardiostrength.webp';
import PilatesPrecision from '../images/classes/pilatesprecision.webp';
import HIITBlast from '../images/classes/hiitblast.webp';
import StrengthForBeginners from '../images/classes/strengthforbeginners.webp';
import YogaEnergy from '../images/classes/yogaenergy.webp';
import CardioSculpt from '../images/classes/cardiosculpt.webp';
import PilatesBalance from '../images/classes/pilatesbalance.webp';
import StrengthCircuit from '../images/classes/strengthcircuit.webp';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const classTypes = ['Cardio', 'HIIT', 'Pilates', 'Strength Training', 'Yoga'];
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
const durations = ['< 30 minutes', '30 - 60 minutes', '> 60 minutes'];
const equipment = ['Dumbbells', 'No Equipment', 'Resistance Bands', 'Step Platform', 'Yoga Mat'];
const formats = ['Live', 'On Demand'];
const ratings = ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'];
const priceRanges = [
  { label: '$10.00 - $14.99', min: 10.00, max: 14.99 },
  { label: '$15.00 - $19.99', min: 15.00, max: 19.99 },
  { label: '$20.00 - $24.99', min: 20.00, max: 24.99 }
];

const Classes = () => {
  const [allClasses, setAllClasses] = useState(classNames);
  const [filteredClasses, setFilteredClasses] = useState(allClasses);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const [selectedClassTypes, setSelectedClassTypes] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favourites, setFavourites] = useState([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  const classesPerPage = 4;
  const navigate = useNavigate();

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
    let filtered = allClasses.filter(cls =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedInstructor === 'All' || cls.instructor.name === selectedInstructor) &&
      (selectedClassTypes.length === 0 || selectedClassTypes.includes(cls.classType)) &&
      (selectedDifficulties.length === 0 || selectedDifficulties.includes(cls.difficulty)) &&
      (selectedDurations.length === 0 || selectedDurations.includes(cls.duration)) &&
      (selectedEquipment.length === 0 || selectedEquipment.includes(cls.equipment)) &&
      (selectedFormats.length === 0 || selectedFormats.includes(cls.format)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(cls.rating)) &&
      (selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
        const price = parseFloat(cls.price.replace('$', ''));
        return price >= range.min && price <= range.max;
      }))
    );

    if (showFavouritesOnly) {
      filtered = filtered.filter(cls => favourites.includes(cls.name));
    }

    return filtered;
  };

  const toggleFavouritesOnly = () => {
    setShowFavouritesOnly(!showFavouritesOnly);
    if (!showFavouritesOnly) {
      setSelectedInstructor('All');
      setSelectedClassTypes([]);
      setSelectedDifficulties([]);
      setSelectedDurations([]);
      setSelectedEquipment([]);
      setSelectedFormats([]);
      setSelectedRatings([]);
      setSelectedPriceRanges([]);
    }
  };

  const toggleFavorite = (className) => {
    if (favourites.includes(className)) {
      setFavourites(favourites.filter(fav => fav !== className));
    } else {
      setFavourites([...favourites, className]);
    }
  };

  useEffect(() => {
    setFilteredClasses(filterClasses());
    setCurrentPage(1);
  }, [searchTerm, selectedInstructor, selectedClassTypes, selectedDifficulties, selectedDurations, selectedEquipment, selectedFormats, selectedRatings, selectedPriceRanges, allClasses, showFavouritesOnly, favourites]);

  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = filteredClasses.slice(indexOfFirstClass, indexOfLastClass);
  const totalPages = Math.ceil(filteredClasses.length / classesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReserveClick = (cls) => {
    navigate('/reserve', { state: { selectedClass: cls } });
  };

  const getClassImage = (className) => {
    switch (className) {
      case 'Cardio Blast': return CardioBlast;
      case 'Pilates Core': return PilatesCore;
      case 'HIIT Burn': return HIITBurn;
      case 'Strength Mastery': return StrengthMastery;
      case 'Yoga Flow': return YogaFlow;
      case 'HIIT Cardio': return HIITCardio;
      case 'Cardio Dance': return CardioDance;
      case 'Yoga for Beginners': return YogaForBeginners;
      case 'Pilates Sculpt': return PilatesSculpt;
      case 'Strength HIIT': return StrengthHIIT;
      case 'Yoga Relaxation': return YogaRelaxation;
      case 'Cardio Power': return CardioPower;
      case 'Pilates Flexibility': return PilatesFlexibility;
      case 'Strength Endurance': return StrengthEndurance;
      case 'HIIT Energy': return HIITEnergy;
      case 'Cardio Kick': return CardioKick;
      case 'Pilates for Strength': return PilatesForStrength;
      case 'HIIT Challenge': return HIITChallenge;
      case 'Strength Building': return StrengthBuilding;
      case 'Yoga Serenity': return YogaSerenity;
      case 'Cardio Strength': return CardioStrength;
      case 'Pilates Precision': return PilatesPrecision;
      case 'HIIT Blast': return HIITBlast;
      case 'Strength for Beginners': return StrengthForBeginners;
      case 'Yoga Energy': return YogaEnergy;
      case 'Cardio Sculpt': return CardioSculpt;
      case 'Pilates Balance': return PilatesBalance;
      case 'Strength Circuit': return StrengthCircuit;
      default: return '';
    }
  };

  return (
    <div className="app">
      <Helmet>
        <title>Classes - Flexify</title>
        <meta name="description" content="This is a detailed description of the page." />
      </Helmet>
      <ScrollToTop />
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
            <div className="facet-header">Favourite</div>
            <Form.Check
              type="switch"
              id="favourites-switch"
              label="Show Favourites Only"
              checked={showFavouritesOnly}
              onChange={toggleFavouritesOnly}
              className="purple-checkbox"
            />
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
            <div className="facet-header">Price</div>
            {priceRanges.map((range) => (
              <Form.Check
                key={range.label}
                type="checkbox"
                label={range.label}
                checked={selectedPriceRanges.includes(range)}
                onChange={() => handleCheckboxChange(setSelectedPriceRanges, selectedPriceRanges, range)}
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
        </div>
        <div className="results">
          {currentClasses.map((cls, index) => (
            <Card className="class-card" key={index}>
              <Card.Body>
                <div className="class-card-content">
                  <div className="class-image-placeholder">
                    <img src={getClassImage(cls.name)} alt={cls.name} />
                  </div>
                  <div className="class-details">
                    <Card.Title>{cls.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Instructor: {cls.instructor.name}</Card.Subtitle>
                    <Card.Text>
                      <strong>Class Type:</strong> {cls.classType}<br />
                      <strong>Difficulty:</strong> {cls.difficulty}<br />
                      <strong>Duration:</strong> {cls.duration}<br />
                      <strong>Equipment:</strong> {cls.equipment}<br />
                      <strong>Format:</strong> {cls.format}<br />
                      {cls.format === 'Live' && (
                        <>
                          <strong>Date:</strong> {cls.date}<br />
                          <strong>Time:</strong> {cls.time}<br />
                        </>
                      )}
                      <strong>Rating:</strong> {cls.rating}<br />
                      <strong style={{ fontSize: '40px', color: 'black'}}>Price: </strong> 
                      <span style={{ fontSize: '40px', color: '#8E46C6', fontWeight: 'bold' }}>{cls.price}</span><br />
                      <strong>Description:</strong> {cls.description}<br />
                    </Card.Text>
                    <span
                      className={`favourite-star ${favourites.includes(cls.name) ? 'favorited' : ''}`}
                      onClick={() => toggleFavorite(cls.name)}>
                      &#9733;
                    </span>
                  </div>
                </div>
                <Button className="purple-button" onClick={() => handleReserveClick(cls)}>
                  RESERVE
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