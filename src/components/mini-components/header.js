import { Button } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { open } from "../../store/slices/drawerSlice";
import { Container } from "./container";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container className={"shadow py-3"}>
      <Button onClick={() => dispatch(open())}>
        <RxHamburgerMenu />
      </Button>
    </Container>
  );
};
