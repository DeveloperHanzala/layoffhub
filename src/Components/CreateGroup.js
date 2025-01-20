import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateGroup = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Resturant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <label>Name Of Resturant</label><br/>
            <input type="text" className='w-100' name="nameOfResturant" />
            </div>
            <div>
            <label className='pt-3'>Total No of Seats</label><br/>
            <input type="text" className='w-100' name="numberOfseats" />
            </div>
            <div>
            <label className='pt-3'>No Of 4 Seat Table</label><br/>
            <input type="text" className='w-100' name="numberOf4seats" />
            </div>
            <div>
            <label className='pt-3'>No Of 5 Seat Table</label><br/>
            <input type="text" className='w-100' name="numberOf5seats" />
            </div>
          
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateGroup
