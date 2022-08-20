import React from "react";
import { Container, TextField, Box } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function OrderNumber() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [search, setSearch] = useSearchParams();

  const formik = useFormik({
    initialValues: {
      ordername: search.get("val"),
    },
    validationSchema: yup.object({
      ordername: yup.string().required("发货工单号不能为空!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth={false} disableGutters>
      <Header
        title="发货工单号"
        onClickBack={() => {
          // navigate(`/shipment/${id}`);
          navigate(-1);
        }}
      />
      <Box sx={{ p: 2, mt: 2 }}>
        <TextField
          fullWidth
          variant="standard"
          name="ordername"
          type="text"
          value={formik.values.ordername}
          onChange={formik.handleChange}
          error={formik.touched.ordername && Boolean(formik.errors.ordername)}
          placeholder={"请输入发货工单号"}
        />
      </Box>
    </Container>
  );
}

export default OrderNumber;
