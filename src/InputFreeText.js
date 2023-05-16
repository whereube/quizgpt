import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function InputFreeText(){
    return (
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text id="categoryInput">Skriv kategori</InputGroup.Text>
            <Form.Control
              placeholder="Kategori"
              aria-label="Kategori"
              aria-describedby="categoryInput"
            />
            </InputGroup>
        </>
    );
}