import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";
import { login, userSelector } from "../slices/userSlice";

function Login() {
  const { isLogin, isAuthenticated } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 登录成功和验证用户成功之后,跳转到应用首页
  useEffect(() => {
    if (isLogin && isAuthenticated) {
      navigate(`/`, { replace: true });
    }
  }, [isLogin, isAuthenticated]);

  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <Container maxWidth={false}>
      <LoginHeader />
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default Login;
