import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types'; 

const GiveAnswer = ({ questionId }) => { 
    const [content, setContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("access-token");

    const postAnswer = async () => {
        if (!questionId) {
            setShowError(true);
            return;
        }

        setLoading(true);
        const url = `https://api.layoffhub.ai/api/answer_a_question/${questionId}/`; 
        const postData = {
            is_anonymous: isAnonymous,
            content,
        };

        try {
            const response = await axios.post(url, postData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });

            console.log('API Response:', response.data);

            setShowSuccess(true);
            setShowError(false);

            // Clear the form
            setContent('');
            setIsAnonymous(false);

            // Reload the page after showing the success message
            setTimeout(() => {
                window.location.reload(); // Reloads the page
            }, 1500); // Adjust the timeout as needed
        } catch (error) {
            console.error('Error posting Comment:', error);
            setShowSuccess(false);
            setShowError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10} lg={12}>
                    <div className="border p-4 rounded shadow-sm bg-light">
                        {showSuccess && (
                            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                Comment posted successfully! 
                            </Alert>
                        )}
                        {showError && (
                            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                                Failed to post Comment. Please try again.
                            </Alert>
                        )}
                        <Form>
                            <Form.Group className="mb-3 d-flex justify-content-start align-items-center">
                                <Form.Check
                                    type="checkbox"
                                    id="anonymousCheckbox"
                                    checked={isAnonymous}
                                    onChange={(e) => setIsAnonymous(e.target.checked)}
                                    disabled={loading} // Disable checkbox while loading
                                />
                                <span className='mx-2' style={{fontSize:'medium'}}>Post anonymously</span>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write your Comment here..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    disabled={loading} // Disable input while loading
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="button"
                                className="w-100"
                                onClick={postAnswer}
                                disabled={loading || !content.trim()} // Disable button if loading or content is empty
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

GiveAnswer.propTypes = {
    questionId: PropTypes.number.isRequired, 
};

export default GiveAnswer;
