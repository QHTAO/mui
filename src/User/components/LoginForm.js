import React from "react";
import PropTypes from "prop-types";
import { Button, TextField, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
function LoginForm({ onSubmit }) {
  //创建Formik表单和设置验证逻辑
  const formik = useFormik({
    initialValues: {
      username: "22042502",
      password: "22042502",
    },
    validationSchema: yup.object({
      username: yup.string().required("账号不能为空!"),
      password: yup
        .string()
        .min(6, "密码长度在 6 到 64 个字")
        .required("密码不能为空!"),
    }),
    onSubmit: onSubmit,
  });

  return (
    <Stack spacing={3} sx={{ mb: 6 }}>
      <TextField
        fullWidth
        size="small"
        name="username"
        type="text"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        placeholder={"请输入工号或手机号"}
      />
      <TextField
        fullWidth
        size="small"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        placeholder={"请输入密码"}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        onClick={formik.handleSubmit}
      >
        登录
      </Button>
    </Stack>
  );
}
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
