import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import AssociateWorOkrder from "./AssociateWorOkrder";

import { fetchShipmentDetails } from "../../slices/shipmentDetailsSlice";
import { shipmentDetailsSelector } from "../../slices/shipmentDetailsSlice";


import Header from "../../components/Header";
import BasicInformation from "./BasicInformation";
import LogisticsInformation from "./LogisticsInformation";


function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data } = useSelector(shipmentDetailsSelector);

  useEffect(() => {
    dispatch(fetchShipmentDetails({ id: id }));
  }, [id]);

  return (
    <Container maxWidth={false} disableGutters>
      <Header onClickBack={() => navigate(-1)} title="发货单详情" />
      <BasicInformation data={data} />
      <LogisticsInformation data={data} />
      <AssociateWorOkrder data={data} />
    </Container>
  );
}

export default Details;
