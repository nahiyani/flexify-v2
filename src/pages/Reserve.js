import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Reserve.css';
import { classNames } from '../data';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

const Reserve = () => {
  const location = useLocation();
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(location.state?.selectedClass || null);
  const [cardNumber, setCardNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState(selectedClass?.name || '');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [datePlaceholder, setDatePlaceholder] = useState('Date');
  const [timePlaceholder, setTimePlaceholder] = useState('Time');
  const [price, setPrice] = useState(selectedClass?.price || null);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const handleClassChange = (selectedClassData) => {
    setSelectedClass(selectedClassData);
    setSearchTerm(selectedClassData.name);
    setDropdownVisible(false);

    if (!selectedClassData) {
      setStartDate(null);
      setStartTime('');
      setDatePlaceholder('Date');
      setTimePlaceholder('Time');
      setErrors(prev => ({ ...prev, class: 'Please select a class' }));
      setPrice(null);
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.class;
        return newErrors;
      });

      if (selectedClassData.format === 'Live') {
        setStartDate(new Date(selectedClassData.date));
        setStartTime(selectedClassData.time);
        setDatePlaceholder(selectedClassData.date);
        setTimePlaceholder(selectedClassData.time);
      } else {
        setStartDate(null);
        setStartTime('');
        setDatePlaceholder('On-demand class');
        setTimePlaceholder('On-demand class');
      }
      setPrice(selectedClassData.price);
    }
  };

  const classOptions = classNames.map((cls) => ({
    value: cls,
    label: cls.name
  }));

  const filteredClassOptions = classOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    switch (fieldName) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phoneNumber':
        if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
          newErrors.phoneNumber = 'Please enter a valid phone number (XXX-XXX-XXXX)';
        } else {
          delete newErrors.phoneNumber;
        }
        break;
      case 'cardNumber':
        if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(value)) {
          newErrors.cardNumber = 'Please enter a valid credit card number (XXXX XXXX XXXX XXXX)';
        } else {
          delete newErrors.cardNumber;
        }
        break;
      case 'cvv':
        if (!/^\d{3}$/.test(value)) {
          newErrors.cvv = 'Please enter a valid 3-digit CVV number';
        } else {
          delete newErrors.cvv;
        }
        break;
      case 'firstName':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.firstName = 'First name must contain only letters';
        } else {
          delete newErrors.firstName;
        }
        break;
      case 'lastName':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.lastName = 'Last name must contain only letters';
        } else {
          delete newErrors.lastName;
        }
        break;
      case 'expiryDate':
        const expiry = new Date(value);
        const now = new Date();
        if (expiry < new Date(now.getFullYear(), now.getMonth(), 1)) {
          newErrors.expiryDate = 'Credit card expiry date cannot be in the past.';
        } else {
          delete newErrors.expiryDate;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newErrors = {};

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!selectedClass) {
        newErrors.class = 'Please select a class';
      }

      const expiry = new Date(expiryDate);
      const now = new Date();
      if (expiry < new Date(now.getFullYear(), now.getMonth(), 1)) {
        newErrors.expiryDate = 'Credit card expiry date cannot be in the past.';
      }

      const requiredFields = ['formFirstName', 'formLastName', 'formEmail', 'formPhoneNumber', 'formCreditCardNumber', 'formCVV'];
      requiredFields.forEach(field => {
        if (!form[field].value) {
          newErrors[field] = 'This field is required';
        }
      });

      if (Object.keys(newErrors).length === 0) {
        setShowSuccessModal(true);
      } else {
        setErrors(newErrors);
      }
    }
  };

  const handlePhoneNumberChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, '').substring(0, 10);
    const formattedInput = value.replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, (match, g1, g2, g3) =>
      g2 ? (g3 ? `${g1}-${g2}-${g3}` : `${g1}-${g2}`) : g1
    );
    setPhoneNumber(formattedInput);
    validateField('phoneNumber', formattedInput);
  };

  const handleCardNumberChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, '').substring(0, 16);
    const formattedInput = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedInput);
    validateField('cardNumber', formattedInput);
  };

  const handleCvvChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, '').substring(0, 3);
    setCvv(value);
    validateField('cvv', value);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    if (field === 'email') {
      setEmail(value);
    } else if (field === 'firstName') {
      setFirstName(value);
    } else if (field === 'lastName') {
      setLastName(value);
    }
    validateField(field, value);
  };

  const handleExpiryDateChange = (date) => {
    setExpiryDate(date);
    validateField('expiryDate', date);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setErrors({});
    setSelectedClass(null);
    setSearchTerm('');
    setStartDate(null);
    setStartTime('');
    setExpiryDate(new Date());
    setCardNumber('');
    setPhoneNumber('');
    setCvv('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setDatePlaceholder('Date');
    setTimePlaceholder('Time');
    setPrice(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedClass) {
      if (selectedClass.format === 'Live') {
        setStartDate(new Date(selectedClass.date));
        setStartTime(selectedClass.time);
        setDatePlaceholder(selectedClass.date);
        setTimePlaceholder(selectedClass.time);
      } else {
        setStartDate(null);
        setStartTime('');
        setDatePlaceholder('On-demand class');
        setTimePlaceholder('On-demand class');
      }
      setPrice(selectedClass.price);
    }
  }, [selectedClass]);

  return (
    <div>
      <Helmet>
        <title>Reserve - Flexify</title>
        <meta name="description" content="This is a detailed description of the page." />
      </Helmet>
      <ScrollToTop />
      <Header />
      <Container className="reserve-container">
        <h1 className="text-center headline">RESERVE A CLASS</h1>
        <p className="text-center description">
          Flexify strives to make the process of scheduling your fitness sessions as seamless and convenient as possible.
          Follow the simple steps below to reserve a spot in one of our many classes with a certified expert trainer and take the
          first step towards achieving your fitness goals.
        </p>
        <Form className="reserve-form" onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="formSubject" ref={dropdownRef}>
            <Form.Label className="form-title required-field">Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search for a class"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedClass(null); 
                setDropdownVisible(true);
              }}
              onFocus={() => setDropdownVisible(true)}
              className="dropdown-with-arrow"
              ref={inputRef}
            />
            {dropdownVisible && (
              <div className="dropdown-menu show" style={{ width: inputRef.current ? `${inputRef.current.offsetWidth}px` : '100%' }}>
                {filteredClassOptions.map((option) => (
                  <div
                    key={option.value.id}
                    className="dropdown-item"
                    onClick={() => handleClassChange(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
            <Form.Control.Feedback type="invalid">{errors.class}</Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formDate" className="date-picker-container">
                <Form.Label className="form-title">Date</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText={datePlaceholder}
                  className={`form-control purple-datepicker`}
                  calendarClassName="purple-datepicker-calendar"
                  disabled={true}
                />
                <div className="text-danger">{errors.startDate}</div>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formTime" className="time-picker-container">
                <Form.Label className="form-title">Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={timePlaceholder}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="form-control purple-datepicker"
                  disabled={true}
                />
                {errors.startTime && <div className="text-danger">{errors.startTime}</div>}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formFirstName" className="form-group-spacing">
            <Form.Label className="form-title required-field">First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" required value={firstName} onChange={(e) => handleInputChange(e, 'firstName')} isInvalid={!!errors.firstName} />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formLastName" className="form-group-spacing">
            <Form.Label className="form-title required-field">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" required value={lastName} onChange={(e) => handleInputChange(e, 'lastName')} isInvalid={!!errors.lastName} />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail" className="form-group-spacing">
            <Form.Label className="form-title required-field">Email</Form.Label>
            <Form.Control type="email" placeholder="youremailaddress@gmail.com" required value={email} onChange={(e) => handleInputChange(e, 'email')} isInvalid={!!errors.email} />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber" className="form-group-spacing">
            <Form.Label className="form-title required-field">Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={phoneNumber} onChange={handlePhoneNumberChange} isInvalid={!!errors.phoneNumber} />
            <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
          </Form.Group>
          {price && (
            <div className="text-center mb-3">
              <div className="text-center mb-3">
                <span style={{ fontSize: '60px', color: 'black', fontWeight: 'bold' }}>TOTAL: </span>
                <span style={{ fontSize: '60px', color: '#8E46C6', fontWeight: 'bold' }}>{price}</span>
              </div>
            </div>
          )}
          <Form.Group controlId="formCreditCardNumber" className="form-group-spacing">
            <Form.Label className="form-title required-field">Credit Card Number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9012 3456" required value={cardNumber} onChange={handleCardNumberChange} isInvalid={!!errors.cardNumber} />
            <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formExpiryDate">
                <Form.Label className="form-title required-field">Expiry Date</Form.Label>
                <DatePicker
                  selected={expiryDate}
                  onChange={handleExpiryDateChange}
                  dateFormat="MM/yy"
                  showMonthYearPicker
                  placeholderText="MM/YY"
                  className={`form-control purple-datepicker ${errors.expiryDate ? 'is-invalid' : ''}`}
                  calendarClassName="purple-datepicker-calendar"
                />
                <Form.Control.Feedback type="invalid">{errors.expiryDate}</Form.Control.Feedback>
                <div className="text-danger">{errors.expiryDate}</div>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCVV">
                <Form.Label className="form-title required-field">CVV</Form.Label>
                <Form.Control type="text" placeholder="***" required pattern="\d{3}" title="Please enter a 3-digit CVV number" maxLength={3} value={cvv} onChange={handleCvvChange} isInvalid={!!errors.cvv} />
                <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <div className="button-container">
            <Button variant="success" type="submit" className="confirm-button">Confirm Reservation</Button>
          </div>
        </Form>
      </Container>
      <Modal show={showSuccessModal} onHide={closeModal} centered>
        <Modal.Header style={{ backgroundColor: 'green', color: 'white' }} closeButton>
          <Modal.Title>Reservation Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your class reservation, <strong style={{ color: '#8E46C6' }}>{firstName}</strong>! A confirmation outlining the details has been sent to <strong style={{ color: '#8E46C6' }}>{email}</strong>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default Reserve;