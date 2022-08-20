import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout, userSelector } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const { isLogout } = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogout) {
      navigate(`/login`, { replace: true });
    }
  }, [isLogout]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container maxWidth={false}>
      Profile
      <Button variant="outlined" fullWidth onClick={handleLogout}>
        退出登录
      </Button>
    </Container>
  );
}

export default Profile;
