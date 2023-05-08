import Dropdown from "react-bootstrap/Dropdown";
function ButtonDark() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Items
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Hats</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Hoodies</Dropdown.Item>
          <Dropdown.Item href="#/action-3">T-shirts</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Totes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDark;
